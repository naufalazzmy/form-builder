<template>
    <component :is="resolvedComponent" v-bind="passedProps" />
</template>

<script setup>
import InputField from '@/components/editor/InputFieldEditor.vue'
import NumberField from '@/components/editor/NumberFieldEditor.vue'
import DateField from '@/components/editor/DateFieldEditor.vue'
import SelectInput from '@/components/editor/SelectInputEditor.vue'
import RadioInput from '@/components/editor/RadioEditor.vue'
import TextareaInput from '@/components/editor/TextareaEditor.vue'
import CheckboxInput from '@/components/editor/CheckboxEditor.vue'
import ColumnControl from '@/components/editor/ColumnControlEditor.vue'
import AnotationEditor from '@/components/editor/AnotationEditor.vue'
import TitleEditor from '@/components/editor/TitleEditor.vue'
import SectionEditor from '@/components/editor/SectionEditor.vue'
import SubSectionEditor from '@/components/editor/SubSectionEditor.vue'
import TextEditor from '@/components/editor/TextEditor.vue'
import Image from '@/components/editor/ImageEditor.vue'
import Divider from '@/components/editor/DividerEditor.vue'
import Custom from '@/components/editor/CustomEditor.vue'
import Table from '@/components/editor/tableInputEditor.vue'

import { computed } from 'vue'
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()

const componentsMap = {
    input: InputField,
    number: NumberField,
    date: DateField,
    select: SelectInput,
    radio: RadioInput,
    textarea: TextareaInput,
    checkbox: CheckboxInput,
    columnControl: ColumnControl,
    anotation: AnotationEditor,
    title: TitleEditor,
    section: SectionEditor,
    subsection: SubSectionEditor,
    text: TextEditor,
    image: Image,
    divider: Divider,
    custom: Custom,
    table: Table
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
