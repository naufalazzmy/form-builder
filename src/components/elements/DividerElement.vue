<!-- components/elements/SelectInput.vue -->
<template>
    <div class="p-2 bg-white" :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <hr class="w-full h-1 bg-gray-700 border-0 rounded-sm">
        <div class="flex justify-between">
            <small class="text-blue-500">name:[ {{ element.name }} ]</small>
            <small class="text-stone-900">{{ element.type }}</small>
            <small class="text-gray-700">classes:{ {{ element.class }} }</small>
        </div>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: Object
})
</script>
