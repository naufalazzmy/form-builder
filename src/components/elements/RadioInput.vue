<template>
    <div class="p-2 bg-white rounded"
        :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label v-if="!element.required" :for="element.name" class="block text-sm font-medium">{{ element.label
            }}</label>
        <label v-if="element.required" :for="element.name" class="block text-sm font-medium text-red-500">*{{
            element.label }}</label>
        <div v-for="(option, idx) in element.options" :key="idx" class="flex items-center gap-2">
            <input :required="element.required" type="radio" :name="element.name" disabled />
            <span class="text-sm">{{ option }}</span>
        </div>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()
const props = defineProps({ element: Object })
</script>
