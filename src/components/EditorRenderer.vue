<template>
    <component :is="resolvedComponent" :element="element" />
</template>

<script setup>
import InputField from '@/components/editor/InputFieldEditor.vue'
import NumberField from '@/components/editor/NumberFieldEditor.vue'
import SelectInput from '@/components/editor/SelectInputEditor.vue'
import RadioInput from '@/components/editor/RadioEditor.vue'
import TextareaInput from '@/components/editor/TextareaEditor.vue'
import CheckboxInput from '@/components/editor/CheckboxEditor.vue'
import ColumnControl from '@/components/editor/ColumnControlEditor.vue'

const props = defineProps({
    element: {
        type: Object,
        required: true
    }
})

const componentsMap = {
    input: InputField,
    number: NumberField,
    select: SelectInput,
    radio: RadioInput,
    textarea: TextareaInput,
    checkbox: CheckboxInput,
    columnControl: ColumnControl
}

const resolvedComponent = componentsMap[props.element.type] || null
</script>
