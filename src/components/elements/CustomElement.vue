<template>
    <div v-if="element.type === 'custom'" class="p-2 bg-white "
        :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }" @click="selected(element.id)">
        <div :class="element.horizontal ? 'flex items-center justify-between' : ''">
            <label v-if="!element.required" :for="element.name" :class="element.horizontal ? 'mr-2' : ''"
                class="block text-sm font-medium">{{ element.label
                }}</label>
            <label v-if="element.required" :for="element.name" :class="element.horizontal ? 'mr-2' : ''"
                class="block text-sm font-medium text-red-500">*{{
                element.label }}</label>
            <div class="rounded-lg w-60 text-center bg-orange-50">
                <div>{{ element.name
                    }}</div>
                <div class="text-xs italic">elementId:{ {{ element.elementId }} }</div>
                <div class="text-xs italic">elementClass:{ {{ element.elementClass }} }</div>
            </div>
        </div>
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
    element: {
        type: Object,
        required: true
    }
})

function selected(elementId) {
    store.selectElement(elementId)
}

</script>

<style scoped>
input[disabled] {
    background-color: white;
    color: black;
}
</style>
