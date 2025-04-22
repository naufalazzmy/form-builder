<!-- CanvasElement.vue -->
<template>
    <div class="p-2 bg-gray-50 border rounded min-h-[100px]" @dragover.prevent @drop="handleDrop">
        <Draggable v-model="localElements" item-key="id" :group="{ name: 'form-elements', pull: true, put: true }"
            class="space-y-2" @change="emitUpdate">
            <template #item="{ element }">
                <div :key="element.id" class="p-2 bg-white border"
                    :class="{ 'ring-2 ring-blue-400': element.id === store.selectedElementId }"
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
import { ref, watch } from 'vue'
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
    elements: Array,
})

const emit = defineEmits(['update:elements'])

const store = useBuilderStore()
const localElements = ref([...props.elements])

watch(() => props.elements, (val) => {
    localElements.value = [...val]
})

function emitUpdate() {
    emit('update:elements', [...localElements.value])
}

function handleDrop(event) {
    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        localElements.value.push({ ...data, id: crypto.randomUUID() })
        emitUpdate()
    } catch (err) {
        // Skip internal reorder drop
    }
}
</script>
