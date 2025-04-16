<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

// This function stores the clicked element into the store
function handleSelect(id) {
    // Find the element by ID and set it as the selected element in the store
    const selectedElement = store.elements.find(el => el.id === id)
    if (selectedElement) {
        store.selectElement(selectedElement)  // This stores it in Pinia
    }
}
</script>

<template>
    <div class="min-h-[400px] border-2 border-dashed border-gray-300 p-4 rounded" @dragover.prevent @drop="handleDrop">
        <div v-for="element in store.elements" :key="element.id" @click.stop="handleSelect(element.id)">
            <FormElementInput :element="element" :isSelected="store.selectedId === element.id" />
        </div>
    </div>
</template>
