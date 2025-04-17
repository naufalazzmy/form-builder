<template>
    <div class="flex-1 p-4 bg-gray-100 min-h-screen" @dragover.prevent @drop="handleDrop">
        <Draggable v-model="store.elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div class="p-2 bg-white border cursor-pointer"
                    :class="{ 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }"
                    @click="store.selectElement(element.id)">
                    <label :for="element.name" class="block text-sm font-medium">{{ element.label }}</label>
                    <input class="border px-2 py-1 mt-1 w-full" :type="element.inputType" :name="element.name"
                        disabled />
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
import Draggable from 'vuedraggable'

const store = useBuilderStore()

function handleDrop(event) {
    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        store.addElement(data)
    } catch (err) {
        // ini terjadi jika drop bukan dari sidebar (misal: internal reorder)
    }
}
</script>