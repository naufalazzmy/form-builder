<template>
    <div class="flex items-center justify-between mt-3">
        <h2 class="font-semibold mb-2">Text Input</h2>
        <button type="button" @click="remove"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
    </div>
    <div class="flex items-center justify-between mt-3">
        <label class="flex items-center gap-2">
            <input type="checkbox" :checked="element.required" @change="e => update('required', e.target.checked)"
                class="checkbox" />
            Required
        </label>
        <label class="flex items-center gap-2">
            <input type="checkbox" :checked="element.horizontal" @change="e => update('horizontal', e.target.checked)"
                class="checkbox" />
            Horizontal
        </label>
    </div>

    <label class="block mb-1">Label</label>
    <input v-model="element.label" @input="update('label', element.label)" class="w-full border p-1 mb-4" />

    <label class="block mb-1">Name</label>
    <input v-model="element.name" @input="update('name', element.name)" class="w-full border p-1 mb-4" />

    <label class="block mb-1">Placeholder</label>
    <input v-model="element.placeholder" @input="update('placeholder', element.placeholder)"
        class="w-full border p-1 mb-4" />

    <label class="block mb-1">Classes</label>
    <input v-model="element.class" @input="update('class', element.class)" class="w-full border p-1 mb-4" />

    <hr>

    <label class="block mb-1">Prepend</label>
    <input v-model="element.prepend" @input="update('prepend', element.prepend)" class="w-full border p-1 mb-4" />

    <label class="block mb-1">Append</label>
    <input v-model="element.append" @input="update('append', element.append)" class="w-full border p-1 mb-4" />
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'

const props = defineProps({
    element: Object
})

const store = useBuilderStore()

function update(key, value) {
    if (store.selectedColumnFieldInfo) {
        store.updateSelectedColumnFieldProperty(key, value)
    } else {
        store.updateSelectedProperty(key, value)
    }
}
function remove() {
    if (store.selectedColumnFieldInfo) {

        // Hapus dari kolom tertentu
        const { colIndex, fieldId, parentId } = store.selectedColumnFieldInfo
        const parent = store.elements.find(el => el.id === parentId)

        if (parent && parent.columns?.[colIndex]) {
            console.log(parent.columns[colIndex]);
            parent.columns[colIndex] = parent.columns[colIndex].filter(el => el.id !== fieldId)

            store.selectedColumnFieldInfo = null
        }
    } else {
        // Kalau bukan di kolom, hapus langsung dari root
        store.deleteSelectedElement()
    }
}

</script>