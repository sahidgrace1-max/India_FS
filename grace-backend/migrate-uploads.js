import prisma from "./src/config/db.js";

/**
 * Helper function to update image paths for a specific Prisma model.
 * * @param {string} modelName - The name of the Prisma model (e.g., 'blogPost')
 * @param {string} fieldName - The name of the image field (e.g., 'thumbnail')
 */
async function migratePathsForModel(modelName, fieldName) {
  // 1. ONLY fetch records that actually need to be updated
  const recordsToUpdate = await prisma[modelName].findMany({
    where: {
      [fieldName]: {
        startsWith: "/uploads/",
      },
    },
    // Optimization: Only select the ID and the field we are changing to save memory
    select: { 
      id: true, 
      [fieldName]: true 
    },
  });

  if (recordsToUpdate.length === 0) {
    console.log(`No updates needed for ${modelName}.`);
    return;
  }

  // 2. Prepare an array of update promises
  const updatePromises = recordsToUpdate.map((record) =>
    prisma[modelName].update({
      where: { id: record.id },
      data: {
        [fieldName]: record[fieldName].replace("/uploads/", "/api/uploads/"),
      },
    })
  );

  // 3. Execute all updates in a single, atomic transaction
  await prisma.$transaction(updatePromises);
  
  console.log(`✅ Migrated ${updatePromises.length} records in ${modelName}.`);
}

async function run() {
  console.log("Starting database image path migration...");

  try {
    // Run them sequentially or use Promise.all to run them concurrently
    await migratePathsForModel("teamMember", "image");
    await migratePathsForModel("blogPost", "thumbnail");
    await migratePathsForModel("destination", "imageUrl");
    await migratePathsForModel("university", "logoUrl");

    console.log("🎉 Database image paths migrated successfully.");
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
}

run().finally(() => prisma.$disconnect());