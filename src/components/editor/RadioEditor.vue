<template>
    <div>
        <div class="flex items-center justify-between mt-3">
            <label class="flex items-center gap-2 mt-2">
                <input type="checkbox" :checked="element.required"
                    @change="e => update('required', e.target.checked)" class="checkbox" />
                Required
            </label>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>
        <label class="block text-sm mb-1">Label</label>
        <input @input="update('label', element.label)" v-model="element.label"
            class="w-full border p-1 mb-4" />

        <label class="block text-sm mb-1">Name</label>
        <input @input="update('name', element.name)" v-model="element.name"
            class="w-full border p-1 mb-4" />

        <label class="block text-sm mb-1">Options</label>
        <div v-for="(option, index) in element.options" :key="index" class="flex gap-2 items-center mb-1">
            <input v-model="element.options[index]" class="w-full border p-1" />
            <button @click="removeOption(index)" class="btn btn-sm btn-error">✕</button>
        </div>
        <button @click="addOption" class="btn btn-sm btn-primary mt-2">+ Add Option</button>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({ element: Object })

function addOption() {
    if (!store.selectedElement.options) {
        store.selectedElement.options = []
    }
    store.selectedElement.options.push('option');
}
function removeOption(index) {
    store.selectedElement.options.splice(index, 1)
}

function update(key, value) {
    store.updateSelectedColumnFieldProperty(key, value)
}

function remove() {
    store.deleteSelectedElement();
}
</script>
