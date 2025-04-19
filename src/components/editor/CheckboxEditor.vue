<template>
    <div>
        <label class="block text-sm mb-1">Label</label>
        <input @input="update('label', store.selectedElement.label)" v-model="store.selectedElement.label"
            class="border px-2 py-1 mt-1 w-full" />

        <label class="block text-sm mb-1">Name</label>
        <input @input="update('name', store.selectedElement.name)" v-model="store.selectedElement.name"
            class="border px-2 py-1 mt-1 w-full" />

        <label class="block text-sm mb-1">Options</label>
        <div v-for="(option, index) in store.selectedElement.options" :key="index" class="flex gap-2 items-center mb-1">
            <input v-model="store.selectedElement.options[index]" class="border px-2 py-1 mt-1 w-full" />
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
    store.updateSelectedProperty(key, value)
}
</script>
