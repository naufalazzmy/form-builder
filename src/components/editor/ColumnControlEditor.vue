<template>
    <!-- FIELD INSIDE COLUMNS -->
    <div v-if="store.selectedElement && store.selectedColumnFieldInfo">
        <label class="block mb-1">Label</label>
        <input v-model="label" @input="update('label', label)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Nama Field</label>
        <input v-model="name" @input="update('name', name)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Input Type</label>
        <select v-model="inputType" @change="update('inputType', inputType)" class="w-full border p-1">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
        </select>
    </div>

    <!-- COLUMN CONTROL -->
    <div v-else-if="store.selectedElement?.type === 'columnControl'">
        <div class="flex items-center justify-between mt-3">
            <h2 class="font-semibold mb-2">Column Control</h2>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>

        <label class="block mb-1">Jumlah Kolom</label>
        <input type="number" v-model.number="columnCount" @input="updateColumnCount" class="w-full border p-1 mb-4"
            min="1" max="12" />

        <div v-for="(size, index) in columnSizes" :key="index" class="mb-3">
            <label class="block text-sm font-medium mb-1">Ukuran Kolom {{ index + 1 }} (1–12)</label>
            <input type="number" v-model.number="columnSizes[index]" @input="updateColumnSizes" min="1" max="12"
                class="w-full border p-1" />
        </div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

const label = ref('')
const name = ref('')
const inputType = ref('text')
const columnCount = ref(2)

// Sync field value when selected changes
const columnSizes = ref([])

watch(() => store.selectedElement, (el) => {
    if (el?.type === 'columnControl') {
        columnCount.value = el.columns?.length || 2
        columnSizes.value = el.columnSizes || Array(columnCount.value).fill(Math.floor(12 / columnCount.value))
    }
}, { immediate: true })

function updateColumnSizes() {
    const el = store.selectedElement
    if (!el || el.type !== 'columnControl') return

    el.columnSizes = [...columnSizes.value]
}

function update(key, value) {
    store.updateSelectedProperty(key, value)
}

function updateColumnCount() {
    const el = store.selectedElement
    if (!el || el.type !== 'columnControl') return

    const currentCols = el.columns || []
    const newCols = []

    for (let i = 0; i < columnCount.value; i++) {
        newCols[i] = currentCols[i] || []
    }

    el.columns = newCols
}

function remove() {
    store.deleteSelectedElement();
}
</script>
