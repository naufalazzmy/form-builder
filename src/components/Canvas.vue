<!-- Canvas.vue -->
<template>
    <div class="flex-1 p-4 bg-gray-100 min-h-screen" @dragover.prevent @drop="handleDrop">
        <Draggable v-model="store.elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div :key="element.id"
                    :class="['p-2 bg-white border cursor-pointer', { 'shadow-lg ring-2 ring-blue-400': element.id === store.selectedElementId }]"
                    @click="store.selectElement(element.id)">
                    <InputField v-if="element.type === 'input'" :element="element" />
                    <ColumnControl v-if="element.type === 'columnControl'" :element="element" />
                    <SelectInput v-if="element.type === 'select'" :element="element" />
                    <RadioInput v-if="element.type === 'radio'" :element="element" />
                    <TextareaInput v-if="element.type === 'textarea'" :element="element" />
                    <CheckboxInput v-if="element.type === 'checkbox'" :element="element" />
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
import Draggable from 'vuedraggable'
import InputField from '@/components/elements/InputField.vue'
import ColumnControl from '@/components/elements/ColumnControl.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import RadioInput from '@/components/elements/RadioInput.vue'
import TextareaInput from '@/components/elements/TextareaInput.vue'
import CheckboxInput from '@/components/elements/CheckboxInput.vue'

const store = useBuilderStore()

function handleDrop(event) {
    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        store.addElement(data)
    } catch (err) {
        // Drop internal reorder tidak perlu di-handle
    }
}
</script>
