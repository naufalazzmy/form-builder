<template>
    <div class="p-4 w-1/4 border-l bg-gray-50 overflow-y-auto">
        <!-- FIELD INSIDE COLUMNS -->
        <div v-if="store.selectedElement && store.selectedColumnFieldInfo">
            <h2 class="font-semibold mb-2">Field dalam Kolom</h2>

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
            <h2 class="font-semibold mb-2">Column Control</h2>

            <label class="block mb-1">Jumlah Kolom</label>
            <input type="number" v-model.number="columnCount" @input="updateColumnCount" class="w-full border p-1 mb-4"
                min="1" />

            <div v-for="(col, colIndex) in store.selectedElement.columns" :key="colIndex" class="mb-4">
                <h3 class="text-sm font-semibold mb-2">Kolom {{ colIndex + 1 }}</h3>
                <button @click="addFieldToColumn(colIndex)"
                    class="mb-2 px-2 py-1 text-sm bg-blue-500 text-white rounded">
                    Tambah Field
                </button>
                <ul class="pl-4">
                    <li v-for="field in col" :key="field.id" class="text-sm">
                        • {{ field.label || 'Field Baru' }}
                    </li>
                </ul>
            </div>
        </div>

        <!-- DEFAULT FIELD EDITOR -->
        <div v-else-if="store.selectedElement">
            <h2 class="font-semibold mb-2">Elemen Input</h2>

            <label class="block mb-1">Label</label>
            <input v-model="store.selectedElement.label" @input="update('label', store.selectedElement.label)"
                class="w-full border p-1 mb-4" />

            <label class="block mb-1">Nama Field</label>
            <input v-model="store.selectedElement.name" @input="update('name', store.selectedElement.name)"
                class="w-full border p-1 mb-4" />

            <label class="block mb-1">Input Type</label>
            <select v-model="store.selectedElement.inputType"
                @change="update('inputType', store.selectedElement.inputType)" class="w-full border p-1">
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="date">Date</option>
            </select>
        </div>

        <div v-else>
            <p class="text-gray-400 italic">Tidak ada elemen yang dipilih</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

const label = ref('')
const name = ref('')
const inputType = ref('text')
const columnCount = ref(2)

// Sync field value when selected changes
watch(() => store.selectedElement, (el) => {
    if (store.selectedColumnFieldInfo && el?.columns) {
        const info = store.selectedColumnFieldInfo
        const field = el.columns?.[info.colIndex]?.find(f => f.id === info.fieldId)
        if (field) {
            label.value = field.label
            name.value = field.name
            inputType.value = field.inputType
        }
    } else if (el?.type === 'columnControl') {
        columnCount.value = el.columns?.length || 2
    }
}, { immediate: true })

function update(key, value) {
    store.updateSelectedProperty(key, value)
}

function addFieldToColumn(colIndex) {
    const el = store.selectedElement
    if (!el || !el.columns) return

    const newField = {
        id: Date.now().toString(),
        label: 'Label',
        name: 'fieldName',
        inputType: 'text'
    }

    el.columns[colIndex].push(newField)
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
</script>
