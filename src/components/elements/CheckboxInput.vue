<template>
    <div class="p-2 bg-white border rounded cursor-pointer"
        :class="{ 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label class="block text-sm font-medium mb-1">{{ element.label }}</label>
        <div v-for="(option, idx) in element.options" :key="idx" class="flex items-center gap-2">
            <input type="checkbox" :name="element.name" disabled />
            <span class="text-sm">{{ option }}</span>
        </div>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({ element: Object })
</script>
