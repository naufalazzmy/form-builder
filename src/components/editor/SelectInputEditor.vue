<template>
    <div v-if="store.selectedElement?.type === 'select'" class="mb-4">
        <div class="flex items-center justify-between mt-3">
            <label class="flex items-center gap-2 mt-2">
                <input type="checkbox" :checked="store.selectedElement.required"
                    @change="e => update('required', e.target.checked)" class="checkbox" />
                Required
            </label>
            <button type="button" @click="remove"
                class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
        </div>

        <label class="block mb-1">Label</label>
        <input v-model="label" @input="update('label', label)" class="w-full border p-1 mb-4" />

        <label class="block mb-1">Name</label>
        <input v-model="store.selectedElement.name" @input="update('name', store.selectedElement.name)"
            class="w-full border p-1 mb-4" />

        <label class="block mb-1">Options</label>
        <div v-for="(opt, idx) in store.selectedElement.options" :key="idx" class="flex items-center gap-2 mb-2">
            <input v-model="opt.label" @input="updateOption(idx, 'label', opt.label)" class="border p-1 w-1/2"
                placeholder="Label" />
            <input v-model="opt.value" @input="updateOption(idx, 'value', opt.value)" class="border p-1 w-1/2"
                placeholder="Value" />
            <button @click="removeOption(idx)" class="text-red-500 text-sm">✕</button>
        </div>
        <button @click="addOption" class="bg-blue-500 text-white text-sm px-2 py-1 rounded">+ Tambah Option</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

const label = ref('')

function addOption() {
    if (!store.selectedElement.options) {
        store.selectedElement.options = []
    }
    store.selectedElement.options.push({ label: 'Option', value: 'option' })
}

function removeOption(index) {
    store.selectedElement.options.splice(index, 1)
}

function updateOption(index, key, value) {
    store.selectedElement.options[index][key] = value
}

function update(key, value) {
    store.updateSelectedProperty(key, value)
}

function remove() {
    store.deleteSelectedElement();
}
</script>
