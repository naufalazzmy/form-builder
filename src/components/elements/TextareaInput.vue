<template>
    <div class="p-2 bg-white border rounded cursor-pointer"
        :class="{ 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label class="block text-sm font-medium mb-1">{{ element.label }}</label>
        <textarea class="border px-2 py-1 mt-1 w-full" :name="element.name" disabled rows="4"></textarea>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({ element: Object })
</script>
