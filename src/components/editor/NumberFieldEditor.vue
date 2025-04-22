<template>
    <h2 class="font-semibold mb-2">Elemen Input</h2>

    <div class="flex items-center justify-between mt-3">
        <label class="flex items-center gap-2">
            <input type="checkbox" :checked="element.required"
                @change="e => update('required', e.target.checked)" class="checkbox" />
            Required
        </label>
        <button type="button" @click="remove"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
    </div>

    <label class="block mb-1">Label</label>
    <input v-model="element.label" @input="update('label', element.label)"
        class="w-full border p-1 mb-4" />

    <label class="block mb-1">Name</label>
    <input v-model="element.name" @input="update('name', element.name)"
        class="w-full border p-1 mb-4" />

    <label class="block mb-1">Placeholder</label>
    <input v-model="element.placeholder" @input="update('placeholder', element.placeholder)"
        class="w-full border p-1 mb-4" />
        
    <label class="block mb-1">Input Type</label>
    <select v-model="element.inputType" @change="update('inputType', element.inputType)"
        class="w-full border p-1">
        <option value="number">Number</option>
    </select>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()
const props = defineProps({
    element: Object
})

function update(key, value) {
    store.updateSelectedColumnFieldProperty(key, value)
}
function remove() {
    store.deleteSelectedElement();
}

</script>