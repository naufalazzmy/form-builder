<template>
    <div>
        <div class="flex items-center justify-between mt-3">
            <h2 class="font-semibold mb-2">Checkbox Input</h2>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>
        <div class="flex items-center justify-between mt-3">
            <label class="flex items-center gap-2">
                <input type="checkbox" :checked="element.required" @change="e => update('required', e.target.checked)"
                    class="checkbox" />
                Required
            </label>
            <label class="flex items-center gap-2">
                <input type="checkbox" :checked="element.horizontal"
                    @change="e => update('horizontal', e.target.checked)" class="checkbox" />
                Horizontal
            </label>
        </div>

        <label class="block text-sm mb-1">Label</label>
        <input @input="update('label', element.label)" v-model="element.label" class="border px-2 py-1 mt-1 w-full" />

        <label class="block text-sm mb-1">Name</label>
        <input @input="update('name', element.name)" v-model="element.name" class="border px-2 py-1 mt-1 w-full" />

        <label class="block mb-1">Classes</label>
        <input v-model="element.class" @input="update('class', element.class)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Columns</label>
        <input type="number" min="1" v-model="element.columns" @input="update('columns', parseInt(element.columns))"
            class="w-full border p-1 mb-4" />

        <label class="block text-sm mb-1">Options</label>
        <div v-for="(opt, idx) in element.options" :key="idx" class="flex items-center gap-2 mb-2">
            <input v-model="opt.name" @input="updateOption(idx, 'name', opt.name)" class="border p-1 w-1/2"
                placeholder="Name" />
            <input v-model="opt.label" @input="updateOption(idx, 'label', opt.label)" class="border p-1 w-1/2"
                placeholder="Label" />
            <input v-model="opt.value" @input="updateOption(idx, 'value', opt.value)" class="border p-1 w-1/2"
                placeholder="Value" />
            <button @click="removeOption(idx)" class="text-red-500 text-sm">✕</button>
        </div>
        <button @click="addOption" class="bg-blue-500 text-white text-sm px-2 py-1 rounded">+ Add Option</button>
        <!-- <div v-for="(option, index) in element.options" :key="index" class="flex gap-2 items-center mb-1">
            <input v-model="element.options[index]" class="border px-2 py-1 mt-1 w-full" />
            <button @click="removeOption(index)" class="btn btn-sm btn-error">✕</button>
        </div>
        <button @click="addOption" class="btn btn-sm btn-primary mt-2">+ Add Option</button> -->
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({
    element: Object
})

function addOption() {
    if (!props.element.options) {
        props.element.options = []
    }
    props.element.options.push({ name: 'name', label: 'Option', value: 'option' })
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
