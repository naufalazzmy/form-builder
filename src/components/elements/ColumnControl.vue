<!-- components/elements/ColumnControl.vue -->
<template>
    <div v-if="element.type === 'columnControl'" class="space-y-2">
        <div class="flex gap-4">
            <div v-for="(col, colIndex) in element.columns" :key="colIndex" class="flex-1 space-y-2 border p-2">
                <div v-for="field in col" :key="field.id"
                    class="p-2 bg-gray-50 border rounded cursor-pointer hover:bg-blue-50"
                    :class="{ 'ring-2 ring-blue-500': isSelectedField(element.id, colIndex, field.id) }"
                    @click.stop="store.selectColumnField(element.id, colIndex, field.id)">
                    <label class="text-xs font-medium">{{ field.label }}</label>
                    <input :type="field.inputType" :name="field.name" class="w-full border p-1" disabled />
                </div>
            </div>
        </div>
        <p class="text-sm text-gray-500">{{ element.columns.length }} columns</p>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: {
        type: Object,
        required: true
    }
})

function isSelectedField(parentId, colIndex, fieldId) {
    return (
        store.selectedElementId === parentId &&
        store.selectedColumnFieldInfo &&
        store.selectedColumnFieldInfo.colIndex === colIndex &&
        store.selectedColumnFieldInfo.fieldId === fieldId
    )
}
</script>
