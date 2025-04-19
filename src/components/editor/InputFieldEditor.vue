<template>
    <h2 class="font-semibold mb-2">Elemen Input</h2>

    <div class="flex items-center justify-between mt-3">
        <label class="flex items-center gap-2">
            <input type="checkbox" :checked="store.selectedElement.required"
                @change="e => update('required', e.target.checked)" class="checkbox" />
            Required
        </label>

        <button @click="remove" class="btn btn-sm btn-error">
            Delete
        </button>
    </div>

    <label class="block mb-1">Label</label>
    <input v-model="store.selectedElement.label" @input="update('label', store.selectedElement.label)"
        class="w-full border p-1 mb-4" />

    <label class="block mb-1">Name</label>
    <input v-model="store.selectedElement.name" @input="update('name', store.selectedElement.name)"
        class="w-full border p-1 mb-4" />

    <label class="block mb-1">Input Type</label>
    <select v-model="store.selectedElement.inputType" @change="update('inputType', store.selectedElement.inputType)"
        class="w-full border p-1">
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
    </select>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

function update(key, value) {
    store.updateSelectedProperty(key, value)
}
function remove() {
    console.log('')
    store.elements.filter(el => el.id !== store.selectedElementId)
}

</script>