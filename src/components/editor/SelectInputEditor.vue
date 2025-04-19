<template>
    <div v-if="store.selectedElement?.type === 'select'" class="mb-4">
        <label class="block mb-1">Label</label>
        <input v-model="label" @input="update('label', label)" class="w-full border p-1 mb-4" />
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
</script>
