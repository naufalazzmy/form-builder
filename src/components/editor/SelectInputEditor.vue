<template>
    <div v-if="element?.type === 'select'">
        <div class="flex items-center justify-between mt-3">
            <h2 class="font-semibold mb-2">Select Input</h2>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>
        <div class="flex items-center justify-between mt-3 gap-2">
            <label class="flex items-center gap-2 ">
                <input type="checkbox" :checked="element.required" @change="e => update('required', e.target.checked)"
                    class="checkbox" />
                Required
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" :checked="element.multiple" @change="e => update('multiple', e.target.checked)"
                    class="checkbox" />
                Multiple
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" :checked="element.horizontal"
                    @change="e => update('horizontal', e.target.checked)" class="checkbox" />
                Horizontal
            </label>
        </div>

        <label class="block mb-1">Label</label>
        <input v-model="label" @input="update('label', label)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Name</label>
        <input v-model="element.name" @input="update('name', element.name)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Classes</label>
        <input v-model="element.class" @input="update('class', element.class)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Options</label>
        <div v-for="(opt, idx) in element.options" :key="idx" class="flex items-center gap-2 mb-2">
            <input v-model="opt.label" @input="updateOption(idx, 'label', opt.label)" class="border p-1 w-1/2"
                placeholder="Label" />
            <input v-model="opt.value" @input="updateOption(idx, 'value', opt.value)" class="border p-1 w-1/2"
                placeholder="Value" />
            <button @click="removeOption(idx)" class="text-red-500 text-sm">✕</button>
        </div>
        <button @click="addOption" class="bg-blue-500 text-white text-sm px-2 py-1 rounded">+ Add Option</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: Object
})

const label = ref('')

function addOption() {
    if (!props.element.options) {
        props.element.options = []
    }
    props.element.options.push({ label: 'Option', value: 'option' })
}


function removeOption(index) {
    if (store.selectedColumnFieldInfo) {
        const { colIndex, fieldId, parentId } = store.selectedColumnFieldInfo
        const parent = store.elements.find(el => el.id === parentId)

        if (parent && parent.columns?.[colIndex]) {
            const targetField = parent.columns[colIndex].find(el => el.id === fieldId)
            if (targetField && targetField.options) {
                targetField.options.splice(index, 1)
            }
        }
    } else {
        if (store.selectedElement.options) {
            store.selectedElement.options.splice(index, 1)
        }
    }
}


function updateOption(index, key, value) {
    store.selectedElement.options[index][key] = value
}

function update(key, value) {
    if (key === 'name') {
        if (!store.isNameUnique(value, props.element.id)) {
            props.element.name = ''
            alert('Name must be unique!')  // Atau pakai toast nanti
            return;
        }
    }
    if (store.selectedColumnFieldInfo) {
        store.updateSelectedColumnFieldProperty(key, value)
    } else {
        store.updateSelectedProperty(key, value)
    }
}

function remove() {
    if (store.selectedColumnFieldInfo) {

        // Hapus dari kolom tertentu
        const { colIndex, fieldId, parentId } = store.selectedColumnFieldInfo
        const parent = store.elements.find(el => el.id === parentId)

        if (parent && parent.columns?.[colIndex]) {
            console.log(parent.columns[colIndex]);
            parent.columns[colIndex] = parent.columns[colIndex].filter(el => el.id !== fieldId)

            store.selectedColumnFieldInfo = null
        }
    } else {
        // Kalau bukan di kolom, hapus langsung dari root
        store.deleteSelectedElement()
    }
}
</script>
