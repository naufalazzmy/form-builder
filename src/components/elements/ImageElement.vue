<!-- components/elements/InputField.vue -->
<template>
    <div v-if="element.type === 'image'" class="p-2 bg-white "
        :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }" @click="selected(element.id)">
        <div>
            <div class="flex">
                <div class="rounded-lg w-full text-center bg-violet-50 p-4">
                    <div>{{ element.label
                    }}</div>
                    <div>{{ element.width }} x {{ element.height }}</div>
                    <div class="text-xs italic">src:{ {{ element.src }} }</div>
                </div>
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
