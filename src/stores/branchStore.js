import { ref } from "vue";

// Get saved branch or default to "Delhi"
const savedBranch = localStorage.getItem("selectedBranch") || "Delhi";
const selectedBranch = ref(savedBranch);

export function useBranchStore() {
  const setSelectedBranch = (branch) => {
    selectedBranch.value = branch;
    localStorage.setItem("selectedBranch", branch);
  };

  return {
    selectedBranch,
    setSelectedBranch,
  };
}
