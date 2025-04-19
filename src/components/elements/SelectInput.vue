<!-- components/elements/SelectInput.vue -->
<template>
    <div class="p-2 bg-white border cursor-pointer"
        :class="{ 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label v-if="!element.required" :for="element.name" class="block text-sm font-medium">{{ element.label
            }}</label>
        <label v-if="element.required" :for="element.name" class="block text-sm font-medium text-red-500">*{{
            element.label }}</label>
        <select :required="element.required" :name="element.name" class="w-full border p-1 mt-1" disabled>
            <option v-for="(opt, idx) in element.options" :key="idx" :value="opt.value">
                {{ opt.label }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: Object
})
</script>
