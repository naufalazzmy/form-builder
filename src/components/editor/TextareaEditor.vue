<template>
    <div>
        <label class="block text-sm mb-1">Label</label>
        <input @input="update('label', store.selectedElement.label)" v-model="store.selectedElement.label"
            class="w-full border p-1 mb-4" />

        <label class="block text-sm mb-1">Name</label>
        <input @input="update('name', store.selectedElement.name)" v-model="store.selectedElement.name"
            class="w-full border p-1 mb-4" />
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({ element: Object })

function update(key, value) {
    store.updateSelectedProperty(key, value)
}
</script>
