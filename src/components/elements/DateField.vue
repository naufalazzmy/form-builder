<template>
    <div v-if="element.type === 'date'" class="p-2 bg-white "
        :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }" @click="selected(element.id)">
        <div v-if="element.horizontal">

            <div class="flex items-center">
                <label v-if="!element.required" :for="element.name" class="block mr-2 text-sm font-medium">{{
                    element.label
                }}</label>
                <label v-else :for="element.name" class="block mr-2 text-sm font-medium text-red-500">*{{
                    element.label }}</label>
                <span v-if="element.prepend"
                    class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 py-1 mt-1 ">
                    {{ element.prepend }}
                </span>
                <input class="border px-2 py-1 mt-1 w-full" :required="element.required" :type="element.inputType"
                    :name="element.name" :placeholder="element.placeholder" disabled />
                <span v-if="element.append"
                    class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border  border-gray-300 border-e-0 py-1 mt-1 ">
                    {{ element.append }}
                </span>
            </div>
        </div>
        <div v-else>
            <label v-if="!element.required" :for="element.name" class="block text-sm font-medium">{{ element.label
                }}</label>
            <label v-else :for="element.name" class="block text-sm font-medium text-red-500">*{{
                element.label }}</label>
            <div class="flex">
                <span v-if="element.prepend"
                    class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 py-1 mt-1 ">
                    {{ element.prepend }}
                </span>
                <input class="border px-2 py-1 mt-1 w-full" :required="element.required" :type="element.inputType"
                    :name="element.name" :placeholder="element.placeholder" disabled />
                <span v-if="element.append"
                    class="inline-flex items-center px-2 text-sm text-gray-900 bg-gray-200 border  border-gray-300 border-e-0 py-1 mt-1 ">
                    {{ element.append }}
                </span>
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
