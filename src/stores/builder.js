// src/stores/builder.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBuilderStore = defineStore("builder", () => {
  const elements = ref([]); // Holds all form elements
  const selectedElement = ref(null); // Stores the currently selected element

  const addElement = (element) => {
    elements.value.push({ ...element, id: Date.now().toString() });
  };

  const selectElement = (element) => {
    selectedElement.value = element; // Set selected element in store
  };

  const updateElement = (updatedElement) => {
    const index = elements.value.findIndex((el) => el.id === updatedElement.id);
    if (index !== -1) {
      elements.value[index] = { ...updatedElement }; // Update the element
    }
  };

  return {
    elements,
    selectedElement,
    addElement,
    selectElement,
    updateElement,
  };
});
