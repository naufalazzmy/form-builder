<template>
    <div class="min-h-[50px] bg-gray-100 p-2" @dragover.prevent @drop="handleDrop">
        <Draggable :list="elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div :key="element.id"
                    :class="['p-2 bg-white border', { 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }]"
                    @click.stop="store.selectElement(element.id)">
                    <InputField v-if="element.type === 'input'" :element="element" />
                    <NumberField v-if="element.type === 'number'" :element="element" />
                    <SelectInput v-if="element.type === 'select'" :element="element" />
                    <RadioInput v-if="element.type === 'radio'" :element="element" />
                    <TextareaInput v-if="element.type === 'textarea'" :element="element" />
                    <CheckboxInput v-if="element.type === 'checkbox'" :element="element" />
                    <ColumnControl v-if="element.type === 'columnControl'" :element="element" />
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import { useBuilderStore } from '@/stores/builder'
import InputField from '@/components/elements/InputField.vue'
import NumberField from '@/components/elements/NumberField.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import RadioInput from '@/components/elements/RadioInput.vue'
import TextareaInput from '@/components/elements/TextareaInput.vue'
import CheckboxInput from '@/components/elements/CheckboxInput.vue'
import ColumnControl from '@/components/elements/ColumnControl.vue'

const props = defineProps({
    targetType: { type: String, required: true }, // 'root' or 'column'
    parentId: { type: String, default: null },
    columnIndex: { type: Number, default: null }
})

const store = useBuilderStore()

const elements = computed(() => {
    if (props.targetType === 'root') return store.elements
    if (props.targetType === 'column') {
        const parent = store.elements.find(e => e.id === props.parentId)
        return parent?.columns?.[props.columnIndex] || []
    }
    return []
})

function handleDrop(event) {
    event.stopPropagation() // 🔥 tambahkan ini agar event tidak bubble ke parent canvas

    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))

        if (props.targetType === 'column') {
            store.addElementToColumn(props.parentId, props.columnIndex, data)
        } else {
            store.addElement(data)
        }
    } catch (e) {
        // handle internal sort
    }
}

</script>
