<template>
    <div class="flex-1 p-4 bg-gray-100 min-h-screen" @dragover.prevent @drop="handleDrop">
        <Draggable v-model="store.elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div :key="element.id" :class="[
                    'p-2 bg-white border cursor-pointer',
                    { 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }
                ]" @click="store.selectElement(element.id)">
                    <!-- RENDER COLUMN CONTROL -->
                    <div v-if="element.type === 'columnControl'" class="space-y-2">
                        <div class="flex gap-4">
                            <div v-for="(col, colIndex) in element.columns" :key="colIndex"
                                class="flex-1 space-y-2 border p-2">
                                <div v-for="field in col" :key="field.id"
                                    class="p-2 bg-gray-50 border rounded cursor-pointer hover:bg-blue-50"
                                    :class="{ 'ring-2 ring-blue-500': isSelectedField(element.id, colIndex, field.id) }"
                                    @click.stop="store.selectColumnField(element.id, colIndex, field.id)">
                                    <label class="text-xs font-medium">{{ field.label }}</label>
                                    <input :type="field.inputType" :name="field.name" class="w-full border p-1"
                                        disabled />
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-500">{{ element.columns.length }} columns</p>
                    </div>

                    <!-- RENDER INPUT FIELD -->
                    <div v-else>
                        <label :for="element.name" class="block text-sm font-medium">{{ element.label }}</label>
                        <input class="border px-2 py-1 mt-1 w-full" :type="element.inputType" :name="element.name"
                            disabled />
                    </div>
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
        // drop internal reorder tidak perlu di-handle
    }
}

function isSelectedField(parentId, colIndex, fieldId) {
    return (
        store.selectedElementId === parentId &&
        store.selectedColumnFieldInfo &&
        store.selectedColumnFieldInfo.colIndex === colIndex &&
        store.selectedColumnFieldInfo.fieldId === fieldId
    )
}
</script>
