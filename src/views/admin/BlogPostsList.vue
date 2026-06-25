<template>
  <div class="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 p-6 sm:p-8 font-poppins relative">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
      <div>
        <h2 class="text-2xl font-bold text-blue-900">Blog Posts</h2>
        <p class="text-sm text-slate-500 mt-1">Manage your website's articles and announcements.</p>
      </div>
      <button
        @click="openCreateModal"
        class="inline-flex items-center justify-center px-5 py-2.5 bg-blue-800 text-white text-sm font-medium rounded-xl shadow-lg hover:-translate-y-0.5 hover:bg-blue-900 transition-all duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        New Post
      </button>
    </div>

    <div v-if="loading" class="flex flex-col items-center justify-center py-12">
      <div class="w-8 h-8 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin"></div>
      <p class="mt-4 text-sm text-blue-800 font-medium tracking-widest uppercase">Loading your posts...</p>
    </div>

    <div v-else-if="error" class="p-4 mb-6 rounded-xl bg-red-50 border border-red-100 flex items-center">
      <svg class="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="text-sm font-medium text-red-800">{{ error }}</span>
    </div>

    <div v-else class="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
      <table class="min-w-full divide-y divide-blue-100">
        <thead class="bg-blue-50/50">
          <tr>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-widest">Post Details</th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-widest">Status</th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-blue-900 uppercase tracking-widest">Created</th>
            <th scope="col" class="px-6 py-4 text-right text-xs font-semibold text-blue-900 uppercase tracking-widest">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-blue-50">
          <tr v-if="posts.length === 0">
            <td colspan="4" class="px-6 py-12 text-center text-slate-500 text-sm italic">
              No blog posts found. Create your first post!
            </td>
          </tr>
          <tr v-for="post in posts" :key="post.id" class="hover:bg-blue-50/30 transition-colors duration-150 group">
            <td class="px-6 py-5">
              <div class="flex flex-col">
                <span class="text-sm font-bold text-blue-900 group-hover:text-green-600 transition-colors">{{ post.title }}</span>
                <span class="text-xs text-slate-500 mt-1 font-mono bg-slate-100 inline-flex w-fit px-2 py-0.5 rounded">{{ post.slug }}</span>
              </div>
            </td>
            <td class="px-6 py-5 whitespace-nowrap">
              <span
                class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                :class="{
                  'bg-green-100 text-green-700 border border-green-200': post.published,
                  'bg-amber-100 text-amber-700 border border-amber-200': !post.published,
                }"
              >
                <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="post.published ? 'bg-green-500' : 'bg-amber-500'"></span>
                {{ post.published ? "Published" : "Draft" }}
              </span>
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-sm text-slate-600 font-medium">
              {{ new Date(post.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) }}
            </td>
            <td class="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center justify-end space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button @click="openEditModal(post)" class="text-slate-400 hover:text-blue-600 transition-colors p-1" title="Edit">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                </button>
                <button @click="togglePublish(post)" class="text-slate-400 hover:text-green-600 transition-colors p-1" :title="post.published ? 'Unpublish' : 'Publish'">
                  <svg v-if="post.published" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
                <button @click="deletePost(post.id)" class="text-slate-400 hover:text-red-600 transition-colors p-1" title="Delete">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-poppins" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          
          <Transition name="backdrop-fade">
            <div v-if="showModal" class="fixed inset-0 bg-blue-900/40 backdrop-blur-sm transition-opacity" @click="closeModal" aria-hidden="true"></div>
          </Transition>
          
          <Transition name="slide-up">
            <div v-if="showModal" class="relative bg-white rounded-2xl text-left shadow-2xl transform transition-all w-full max-w-4xl max-h-[90vh] flex flex-col border border-blue-100 overflow-hidden">
              <form @submit.prevent="savePost" class="flex flex-col h-full overflow-hidden">
                
                <div class="bg-blue-50/50 px-6 py-5 border-b border-blue-100 flex justify-between items-center shrink-0">
                  <h3 class="text-lg font-bold text-blue-900" id="modal-title">
                    {{ isEditing ? 'Edit Blog Post' : 'Create New Blog Post' }}
                  </h3>
                  <button type="button" @click="closeModal" class="text-slate-400 hover:text-blue-800 bg-white hover:bg-blue-100 rounded-full p-2 transition-colors focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                <div class="px-6 py-6 space-y-6 overflow-y-auto grow">
                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-2">Cover Image</label>
                    <div class="relative flex justify-center px-6 pt-8 pb-8 border-2 border-blue-200 border-dashed rounded-xl hover:border-blue-800 hover:bg-blue-50/50 transition-colors group cursor-pointer">
                      <div class="space-y-2 text-center">
                        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-white shadow-sm transition-colors">
                          <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                          </svg>
                        </div>
                        <div class="flex text-sm text-slate-600 justify-center mt-4">
                          <label for="file-upload" class="relative cursor-pointer rounded-md font-bold text-blue-800 focus-within:outline-none hover:underline decoration-green-500 underline-offset-4">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="handleFileUpload" accept="image/*" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-slate-500 tracking-widest uppercase">PNG, JPG, WEBP up to 5MB</p>
                      </div>
                    </div>
                    <div v-if="formData.image" class="mt-3 flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                      <span class="text-sm text-green-800 font-bold truncate">{{ formData.image.name }}</span>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1">Title</label>
                      <input v-model="formData.title" type="text" required class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none" placeholder="The Ultimate Guide to..." />
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-blue-900 mb-1">Slug</label>
                      <input v-model="formData.slug" type="text" required class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 bg-slate-50 text-slate-600 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow font-mono outline-none" />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Excerpt</label>
                    <textarea v-model="formData.excerpt" rows="2" required class="block w-full border border-blue-200 rounded-xl shadow-sm py-2.5 px-3 focus:ring-2 focus:ring-blue-800 focus:border-blue-800 sm:text-sm transition-shadow outline-none" placeholder="A brief summary of the post..."></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-bold text-blue-900 mb-1">Content</label>
                    <div class="block w-full bg-white border border-blue-200 rounded-xl shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-800 transition-shadow flex flex-col">
                      <div v-if="editor" class="flex flex-wrap items-center bg-blue-50 border-b border-blue-200 px-3 py-2 gap-1 rounded-t-xl shrink-0">
                        <select 
                          :value="getActiveHeading()" 
                          @change="setHeading($event.target.value)" 
                          class="border border-blue-200 rounded-lg text-sm text-slate-600 bg-white px-2 py-1 mr-1 focus:outline-none focus:ring-1 focus:ring-blue-800 cursor-pointer"
                        >
                          <option value="p">Paragraph</option>
                          <option value="1">Heading 1</option>
                          <option value="2">Heading 2</option>
                          <option value="3">Heading 3</option>
                          <option value="4">Heading 4</option>
                        </select>
                        
                        <span class="w-px h-5 bg-blue-200 mx-1 inline-block"></span>
                        
                        <button type="button" @click="editor.chain().focus().toggleBold().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('bold') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Bold">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('italic') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Italic">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4h-9 M14 20H5 M15 4L9 20"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('underline') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Underline">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3 M4 21h16"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('strike') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Strikethrough">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14 M16 6a4 4 0 00-8 0c0 2 8 2 8 4a4 4 0 01-8 0"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleCode().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('code') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Inline Code">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        </button>

                        <span class="w-px h-5 bg-blue-200 mx-1 inline-block"></span>

                        <button type="button" @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive({ textAlign: 'left' }) }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Align Left">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h16"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive({ textAlign: 'center' }) }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Align Center">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M7 12h10M4 18h16"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive({ textAlign: 'right' }) }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Align Right">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M10 12h10M4 18h16"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive({ textAlign: 'justify' }) }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Justify">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                        </button>

                        <span class="w-px h-5 bg-blue-200 mx-1 inline-block"></span>

                        <button type="button" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('bulletList') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Bullet List">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('orderedList') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Ordered List">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h10M10 12h10M10 18h10M4 6h1M4 12h1M4 18h1"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleTaskList().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('taskList') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Task List">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h11M9 12h11M9 19h11M5 5h.01M5 12h.01M5 19h.01"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('blockquote') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Blockquote">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 011.789 1.106l-3.5 7A2 2 0 0110 14zm9 0h-4.764a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0117.736 3h4.018a2 2 0 011.789 1.106l-3.5 7A2 2 0 0119 14z"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('codeBlock') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Code Block">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3M13 15h3M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"/></svg>
                        </button>

                        <span class="w-px h-5 bg-blue-200 mx-1 inline-block"></span>

                        <button type="button" @click="setLink" :class="{ 'bg-blue-100 text-blue-800': editor.isActive('link') }" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Link">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                        </button>
                        <button type="button" @click="setImage" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Image">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        </button>
                        <button type="button" @click="setYoutube" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="YouTube Video">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().setHorizontalRule().run()" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors" title="Horizontal Rule">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"/></svg>
                        </button>

                        <span class="w-px h-5 bg-blue-200 mx-1 inline-block"></span>

                        <button type="button" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" title="Undo">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>
                        </button>
                        <button type="button" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()" class="p-1.5 rounded-lg text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" title="Redo">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"/></svg>
                        </button>
                      </div>

                      <editor-content :editor="editor" class="flex-1 w-full bg-white rounded-b-xl px-4 py-3 text-sm text-slate-700 min-h-[400px]" />
                      
                      <div v-if="editor" class="bg-slate-50 border-t border-blue-100 px-3 py-1.5 text-right shrink-0 rounded-b-xl">
                        <span class="text-xs text-slate-400 font-medium tracking-wide">
                          {{ editor.storage.characterCount.characters() }} characters
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <div class="flex items-center h-5">
                      <input v-model="formData.published" id="publish-toggle" type="checkbox" class="h-5 w-5 text-blue-800 focus:ring-blue-800 border-blue-300 rounded cursor-pointer transition-colors" />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="publish-toggle" class="font-bold text-blue-900 cursor-pointer">Publish immediately</label>
                      <p class="text-slate-500">Make this post visible to the public right away.</p>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50/50 px-6 py-4 border-t border-blue-100 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 shrink-0 rounded-b-2xl">
                  <button type="button" @click="closeModal" class="mt-3 sm:mt-0 w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 border-2 border-blue-800 shadow-sm text-sm font-bold rounded-xl text-blue-800 bg-white hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none transition-all">
                    Cancel
                  </button>
                  <button type="submit" class="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 border border-transparent shadow-lg text-sm font-bold rounded-xl text-white bg-blue-800 hover:-translate-y-0.5 hover:bg-blue-900 focus:outline-none transition-all" :disabled="saving">
                    <svg v-if="saving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ saving ? 'Saving Post...' : 'Save Post' }}
                  </button>
                </div>
              </form>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from "vue";
import api from "@/utils/api";
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';

const posts = ref([]);
const loading = ref(true);
const error = ref("");
const showModal = ref(false);
const isEditing = ref(false);
const editingId = ref(null);
const saving = ref(false);

const formData = reactive({
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  published: false,
  image: null, 
});

const editor = useEditor({
  content: formData.content,
  extensions: [
    StarterKit,
    Underline,
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    TaskList,
    TaskItem.configure({ nested: true }),
    Link.configure({ openOnClick: false }),
    Image,
    Youtube,
    Placeholder.configure({ placeholder: 'Start writing your blog post...' }),
    CharacterCount,
  ],
  onUpdate: () => {
    formData.content = editor.value.getHTML();
  },
});

watch(() => formData.title, (newTitle) => {
  if (!isEditing.value) { 
    formData.slug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
});

const fetchPosts = async () => {
  loading.value = true;
  try {
    const response = await api.get("/blog");
    posts.value = response.data.data.items || response.data.data;
  } catch (err) {
    error.value = "Failed to load blog posts";
  } finally {
    loading.value = false;
  }
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.image = file;
  }
};

const togglePublish = async (post) => {
  try {
    await api.patch(`/blog/${post.id}/publish`);
    post.published = !post.published;
  } catch (err) {
    alert("Failed to update post status");
  }
};

const deletePost = async (id) => {
  if (!confirm("Are you sure you want to delete this post?")) return;
  try {
    await api.delete(`/blog/${id}`);
    fetchPosts();
  } catch (err) {
    alert("Failed to delete post");
  }
};

const getActiveHeading = () => {
  if (editor.value?.isActive('heading', { level: 1 })) return '1';
  if (editor.value?.isActive('heading', { level: 2 })) return '2';
  if (editor.value?.isActive('heading', { level: 3 })) return '3';
  if (editor.value?.isActive('heading', { level: 4 })) return '4';
  return 'p';
};

const setHeading = (level) => {
  if (level === 'p') editor.value?.chain().focus().setParagraph().run();
  else editor.value?.chain().focus().toggleHeading({ level: parseInt(level) }).run();
};

const setLink = () => {
  const previousUrl = editor.value.getAttributes('link').href;
  const url = window.prompt('URL', previousUrl);
  if (url === null) return;
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
    return;
  }
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
};

const setImage = () => {
  const url = window.prompt('Image URL');
  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run();
  }
};

const setYoutube = () => {
  const url = window.prompt('YouTube Video URL');
  if (url) {
    editor.value.chain().focus().setYoutubeVideo({ src: url }).run();
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  editingId.value = null;
  Object.assign(formData, {
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    published: false,
    image: null,
  });
  if (editor.value) {
    editor.value.commands.setContent('');
  }
  showModal.value = true;
};

const openEditModal = (post) => {
  isEditing.value = true;
  editingId.value = post.id;
  Object.assign(formData, {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content, 
    published: post.published,
    image: null, 
  });
  if (editor.value) {
    editor.value.commands.setContent(post.content);
  }
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const savePost = async () => {
  if (editor.value) {
    formData.content = editor.value.getHTML();
  }

  if (!editor.value || editor.value.isEmpty) {
    alert("Please enter some content for your blog post.");
    return;
  }

  saving.value = true;
  try {
    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("slug", formData.slug);
    payload.append("excerpt", formData.excerpt);
    payload.append("content", formData.content); 
    payload.append("published", formData.published);
    
    if (formData.image) {
      payload.append("thumbnail", formData.image);
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };

    if (isEditing.value) {
      await api.patch(`/blog/${editingId.value}`, payload, config);
    } else {
      await api.post("/blog", payload, config);
    }
    
    closeModal();
    fetchPosts();
  } catch (err) {
    alert("Failed to save post: " + (err.response?.data?.message || err.message));
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});

onUnmounted(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});
</script>

<style scoped>
/* Modal Transition Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 0.3s ease;
}
.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

/* Tiptap Deep Styles matching exact constraints */
:deep(.ProseMirror) {
  min-height: 400px;
  outline: none;
  font-family: inherit;
}

:deep(.ProseMirror p.is-editor-empty:first-child::before) {
  color: #94a3b8;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

:deep(.ProseMirror h1) { font-size: 2em; font-weight: bold; margin-bottom: 0.5em; color: #1e3a8a; }
:deep(.ProseMirror h2) { font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; color: #1e3a8a; }
:deep(.ProseMirror h3) { font-size: 1.17em; font-weight: bold; margin-bottom: 0.5em; color: #1e3a8a; }
:deep(.ProseMirror h4) { font-size: 1em; font-weight: bold; margin-bottom: 0.5em; color: #1e3a8a; }
:deep(.ProseMirror p) { margin-bottom: 1em; line-height: 1.6; }
:deep(.ProseMirror a) { color: #2563eb; text-decoration: underline; }
:deep(.ProseMirror img) { max-width: 100%; height: auto; border-radius: 0.5rem; }

:deep(.ProseMirror ul) { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1em; }
:deep(.ProseMirror ol) { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1em; }

:deep(.ProseMirror blockquote) {
  border-left: 4px solid #93c5fd; /* blue-300 */
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  font-style: italic;
  color: #475569; /* slate-600 */
}

:deep(.ProseMirror pre) {
  background-color: #0f172a; /* slate-900 */
  color: #4ade80; /* green-400 */
  padding: 1rem;
  border-radius: 0.75rem; /* rounded-xl */
  font-family: monospace;
  overflow-x: auto;
  margin-bottom: 1em;
}

:deep(.ProseMirror code) {
  background-color: #eff6ff; /* blue-50 */
  color: #1e40af; /* blue-800 */
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-family: monospace;
}

:deep(.ProseMirror pre code) {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

:deep(.ProseMirror ul[data-type="taskList"]) {
  list-style: none;
  padding: 0;
}

:deep(.ProseMirror ul[data-type="taskList"] li) {
  display: flex;
  align-items: flex-start;
}

:deep(.ProseMirror ul[data-type="taskList"] li > label) {
  flex: 0 0 auto;
  margin-right: 0.5rem;
  user-select: none;
}

:deep(.ProseMirror ul[data-type="taskList"] li > div) {
  flex: 1 1 auto;
}
</style>