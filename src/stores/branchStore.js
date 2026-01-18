import { ref } from "vue";

// Selected branch store
const selectedBranch = ref("Delhi");

export function useBranchStore() {
  const setSelectedBranch = (branch) => {
    selectedBranch.value = branch;
  };

  return {
    selectedBranch,
    setSelectedBranch,
  };
}
