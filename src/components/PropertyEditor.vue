<template>
    <div class="p-4 w-1/4 border-l bg-gray-50">
        <div v-if="store.selectedElement">
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
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()

function update(key, value) {
    store.updateSelectedProperty(key, value)
}
</script>