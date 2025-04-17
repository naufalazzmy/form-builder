import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBuilderStore = defineStore("builder", () => {
  const elements = ref([]);
  const selectedElementId = ref(null);

  const addElement = (element) => {
    elements.value.push({ ...element, id: Date.now().toString() });
  };

  const selectElement = (id) => {
    selectedElementId.value = id;
  };

  const updateSelectedProperty = (key, value) => {
    const index = elements.value.findIndex(
      (el) => el.id === selectedElementId.value
    );
    if (index !== -1) {
      elements.value[index][key] = value;
    }
  };

  const selectedElement = computed(() =>
    elements.value.find((el) => el.id === selectedElementId.value)
  );

  return {
    elements,
    selectedElementId,
    selectedElement,
    addElement,
    selectElement,
    updateSelectedProperty,
  };
});
