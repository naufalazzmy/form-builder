<template>
    <!-- FIELD INSIDE COLUMNS -->
    <template v-if="store.selectedElement && store.selectedColumnFieldInfo">
        <EditorRenderer :element="selectedColumnElement" />
    </template>

    <!-- COLUMN CONTROL -->
    <div v-else-if="store.selectedElement?.type === 'columnControl'">
        <div class="flex items-center justify-between mt-3">
            <h2 class="font-semibold mb-2">Column Control</h2>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>

        <label class="block mb-1">Name</label>
        <input v-model="element.name" @input="update('name', element.name)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Classes</label>
        <input v-model="element.class" @input="update('class', element.class)" class="w-full border p-1 mb-4" />

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
import { ref, watch , computed} from 'vue'
import EditorRenderer from '@/components/EditorRenderer.vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

const label = ref('')
const name = ref('')
const inputType = ref('text')
const columnCount = ref(2)

const props = defineProps({
    element: Object
})

// Sync field value when selected changes
const columnSizes = ref([])

watch(() => store.selectedElement, (el) => {
    if (el?.type === 'columnControl') {
        columnCount.value = el.columns?.length || 2
        // Use existing columnSizes or initialize with default values
        columnSizes.value = el.columnSizes?.length ? [...el.columnSizes] :
            Array(columnCount.value).fill(Math.floor(12 / columnCount.value))
    }
}, { immediate: true })

function updateColumnSizes() {
    const el = store.selectedElement
    if (!el || el.type !== 'columnControl') return

    // Validate sizes (optional)
    const total = columnSizes.value.reduce((sum, size) => sum + Number(size), 0)
    if (total > 12) {
        alert('Total column sizes cannot exceed 12')
        return
    }

    el.columnSizes = [...columnSizes.value]
}

function update(key, value) {
    store.updateSelectedColumnFieldProperty(key, value)
}

const selectedColumnElement = computed(() => {
    if (!store.selectedElement || !store.selectedColumnFieldInfo) return null
    const { colIndex, fieldId } = store.selectedColumnFieldInfo
    const col = store.selectedElement.columns?.[colIndex]
    return col?.find(field => field.id === fieldId) || null
})

function updateColumnCount() {
    const el = store.selectedElement
    if (!el || el.type !== 'columnControl') return

    const currentCols = el.columns || []
    const currentSizes = el.columnSizes || []
    const newCols = []
    const newSizes = []

    const defaultSize = Math.floor(12 / columnCount.value)

    for (let i = 0; i < columnCount.value; i++) {
        newCols[i] = currentCols[i] || []
        newSizes[i] = currentSizes[i] || defaultSize
    }

    el.columns = newCols
    el.columnSizes = newSizes
    columnSizes.value = [...newSizes] // Update the local ref
}

function remove() {
    store.deleteSelectedElement();
}
</script>
