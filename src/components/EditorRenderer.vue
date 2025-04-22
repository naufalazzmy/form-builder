<template>
    <component :is="resolvedComponent" v-bind="passedProps" />
</template>

<script setup>
import InputField from '@/components/editor/InputFieldEditor.vue'
import NumberField from '@/components/editor/NumberFieldEditor.vue'
import SelectInput from '@/components/editor/SelectInputEditor.vue'
import RadioInput from '@/components/editor/RadioEditor.vue'
import TextareaInput from '@/components/editor/TextareaEditor.vue'
import CheckboxInput from '@/components/editor/CheckboxEditor.vue'
import ColumnControl from '@/components/editor/ColumnControlEditor.vue'

import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()

const componentsMap = {
    input: InputField,
    number: NumberField,
    select: SelectInput,
    radio: RadioInput,
    textarea: TextareaInput,
    checkbox: CheckboxInput,
    columnControl: ColumnControl
}

// Komputasi elemen aktif berdasarkan context
const activeElement = computed(() => {
    if (store.selectedColumnFieldInfo) {
        const { colIndex, fieldId } = store.selectedColumnFieldInfo
        const col = store.selectedElement?.columns?.[colIndex] || []
        return col.find(field => field.id === fieldId) || null
    }
    return store.selectedElement
})

const resolvedComponent = computed(() => {
    return componentsMap[activeElement.value?.type] || null
})

// Kirim element hanya jika diperlukan oleh komponen
const passedProps = computed(() => {
    return activeElement.value ? { element: activeElement.value } : {}
})
</script>
