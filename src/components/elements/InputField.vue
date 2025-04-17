<!-- components/elements/InputField.vue -->
<template>
    <div v-if="element.type === 'input'" class="p-2 bg-white border cursor-pointer"
        :class="{ 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label :for="element.name" class="block text-sm font-medium">{{ element.label }}</label>
        <input class="border px-2 py-1 mt-1 w-full" :type="element.inputType" :name="element.name" disabled />
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
input[disabled] {
    background-color: white;
    color: black;
}
</style>
