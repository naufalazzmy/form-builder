<template>
    <div class="border border-dashed border-gray-400 p-4 rounded mb-4">
        <div class="mb-2 flex justify-between items-center">
            <h3 class="font-semibold">Column Control (12-grid layout)</h3>
        </div>

        <div class="grid grid-cols-12 gap-4">
            <div v-for="(col, index) in element.columns" :key="index"
                :class="['bg-gray-100 p-2 rounded border min-h-[100px]', `col-span-6`]">
                <div class="text-sm font-semibold mb-2">Kolom {{ index + 1 }} ({{ getColSize(index) }}/12)</div>
                <CanvasElement :target-type="'column'" :parent-id="element.id" :column-index="index"
                    class=" border border-gray-300 bg-white p-2 rounded" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CanvasElement from '@/components/elements/CanvasElement.vue'
import { computed } from 'vue'

const props = defineProps({
    element: {
        type: Object,
        required: true,
    },
})

// Ambil ukuran kolom dari props.element.columnSizes[index] atau fallback 12 / jumlah kolom
const getColSize = (index) => {
    const sizes = props.element.columnSizes || []
    const defaultSize = Math.floor(12 / props.element.columns.length)
    return sizes[index] || defaultSize
}
</script>
