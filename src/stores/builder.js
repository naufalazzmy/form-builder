import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useBuilderStore = defineStore("builder", () => {
  const elements = ref([]);
  const selectedElementId = ref(null);
  const selectedColumnFieldInfo = ref(null); // For selecting inner fields

  const addElement = (element) => {
    const id = Date.now().toString();
    if (element.type === "columnControl") {
      const columnCount = element.columnCount || 2;
      const columns = Array.from({ length: columnCount }, () => []);
      elements.value.push({ ...element, id, columns });
    } else {
      elements.value.push({ ...element, id });
    }
  };

  const selectElement = (id) => {
    selectedElementId.value = id;
    selectedColumnFieldInfo.value = null;
  };

  const selectColumnField = (parentId, colIndex, fieldId) => {
    selectedElementId.value = parentId;
    selectedColumnFieldInfo.value = { colIndex, fieldId };
  };

  const updateSelectedProperty = (key, value) => {
    const parent = elements.value.find(
      (el) => el.id === selectedElementId.value
    );
    if (!parent) return;

    if (selectedColumnFieldInfo.value) {
      const field = parent.columns[selectedColumnFieldInfo.value.colIndex].find(
        (f) => f.id === selectedColumnFieldInfo.value.fieldId
      );
      if (field) field[key] = value;
    } else {
      parent[key] = value;
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
    selectColumnField,
    selectedColumnFieldInfo,
  };
});
