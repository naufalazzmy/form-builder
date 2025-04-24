<template>
    <component :is="resolvedComponent" :element="element" />
</template>

<script setup>
import InputField from '@/components/elements/InputField.vue'
import NumberField from '@/components/elements/NumberField.vue'
import DateField from '@/components/elements/DateField.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import RadioInput from '@/components/elements/RadioInput.vue'
import TextareaInput from '@/components/elements/TextareaInput.vue'
import CheckboxInput from '@/components/elements/CheckboxInput.vue'
import ColumnControl from '@/components/elements/ColumnControl.vue'
import Anotation from '@/components/elements/Anotation.vue'
import Title from '@/components/elements/TitleElement.vue'
import Section from '@/components/elements/SectionElement.vue'
import SubSection from '@/components/elements/SubSectionElement.vue'
import Text from '@/components/elements/TextElement.vue'
import Image from '@/components/elements/ImageElement.vue'
import Divider from '@/components/elements/DividerElement.vue'
import Custom from '@/components/elements/CustomElement.vue'

const props = defineProps({
    element: {
        type: Object,
        required: true
    }
})

const componentsMap = {
    input: InputField,
    number: NumberField,
    date: DateField,
    select: SelectInput,
    radio: RadioInput,
    textarea: TextareaInput,
    checkbox: CheckboxInput,
    columnControl: ColumnControl,
    anotation: Anotation,
    title: Title,
    section: Section,
    subsection: SubSection,
    text: Text,
    image: Image,
    divider: Divider,
    custom: Custom
}

const resolvedComponent = componentsMap[props.element.type] || null
</script>
