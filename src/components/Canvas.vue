<!-- Canvas.vue -->
<template>
    <div class="flex-1 p-4 bg-gray-100 h-full overflow-y-auto" @dragover.prevent @drop="handleDrop">
        <Draggable v-model="store.elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div :key="element.id"
                    :class="['p-2 bg-white border', { 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }]"
                    @click="store.selectElement(element.id)">
                    <CanvasElementRenderer :element="element" />
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
import Draggable from 'vuedraggable'
import CanvasElementRenderer from '@/components/ElementRenderer.vue'

const store = useBuilderStore()

function handleDrop(event) {
    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        store.addElement(data)
    } catch (err) {
        // Drop internal reorder tidak perlu di-handle
    }
}
</script>
