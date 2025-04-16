<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

// Function to update the selected element in the store
function updateElementProperty(prop, value) {
    const updatedElement = { ...store.selectedElement, [prop]: value }
    store.updateElement(updatedElement)
}
</script>

<template>
    <div v-if="store.selectedElement" class="space-y-4">
        <div>
            <label class="block text-sm font-medium">Label</label>
            <input v-model="store.selectedElement.label"
                @input="updateElementProperty('label', store.selectedElement.label)"
                class="w-full border px-2 py-1 rounded" />
        </div>
        <div>
            <label class="block text-sm font-medium">Placeholder</label>
            <input v-model="store.selectedElement.placeholder"
                @input="updateElementProperty('placeholder', store.selectedElement.placeholder)"
                class="w-full border px-2 py-1 rounded" />
        </div>
        <div>
            <label class="inline-flex items-center space-x-2">
                <input type="checkbox" v-model="store.selectedElement.required"
                    @change="updateElementProperty('required', store.selectedElement.required)" />
                <span>Required</span>
            </label>
        </div>
    </div>
    <p v-else class="text-sm text-gray-500">No element selected</p>
</template>
