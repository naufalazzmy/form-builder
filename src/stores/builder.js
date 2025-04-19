import { defineStore } from "pinia";

export const useBuilderStore = defineStore("builder", {
  state: () => ({
    elements: [],
    selectedElementId: null,
    selectedColumnFieldInfo: null, // { colIndex, fieldId }
  }),

  getters: {
    selectedElement(state) {
      return state.elements.find((el) => el.id === state.selectedElementId);
    },
  },

  actions: {
    generateId() {
      return Date.now().toString();
    },

    addElement(element) {
      const id = this.generateId();
      if (element.type === "columnControl") {
        const columnCount = element.columnCount || 2;
        const columns = Array.from({ length: columnCount }, () => []);
        this.elements.push({ ...element, id, columns });
      } else {
        this.elements.push({ ...element, id });
      }
    },

    selectElement(id) {
      this.selectedElementId = id;
      this.selectedColumnFieldInfo = null;
    },

    selectColumnField(parentId, colIndex, fieldId) {
      this.selectedElementId = parentId;
      this.selectedColumnFieldInfo = { colIndex, fieldId };
    },

    updateSelectedProperty(key, value) {
      const parent = this.elements.find(
        (el) => el.id === this.selectedElementId
      );
      if (!parent) return;

      if (this.selectedColumnFieldInfo) {
        const { colIndex, fieldId } = this.selectedColumnFieldInfo;
        const field = parent.columns[colIndex].find((f) => f.id === fieldId);
        if (field) field[key] = value;
      } else {
        parent[key] = value;
      }
    },

    deleteSelectedElement() {
      const index = this.elements.findIndex(
        (el) => el.id === this.selectedElementId
      );
      if (index !== -1) {
        this.elements.splice(index, 1);
        this.selectedElementId = null;
        this.selectedColumnFieldInfo = null;
      }
    },
  },
});
