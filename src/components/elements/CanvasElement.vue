<template>
    <div class="min-h-[50px] bg-gray-100 p-2" @dragover.prevent @drop="handleDrop">
        <Draggable :list="elements" item-key="id" class="space-y-2">
            <template #item="{ element }">
                <div :key="element.id"
                    :class="['p-2 bg-white border', { 'shadow-lg ring-2 ring-blue-400': isSelected(element.id) }]"
                    @click.stop="handleSelect(element.id)">
                    <CanvasElementRenderer :element="element" />
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Draggable from 'vuedraggable'
import { useBuilderStore } from '@/stores/builder'
import CanvasElementRenderer from '@/components/ElementRenderer.vue'

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

function handleSelect(id) {
    if (props.targetType === 'column') {
        store.selectColumnField(props.parentId, props.columnIndex, id)
    } else {
        store.selectElement(id)
    }
}

function isSelected(id) {
    if (props.targetType === 'column') {
        return (
            store.selectedElementId === props.parentId &&
            store.selectedColumnFieldInfo?.fieldId === id &&
            store.selectedColumnFieldInfo?.colIndex === props.columnIndex
        )
    } else {
        return store.selectedElementId === id
    }
}


function handleDrop(event) {
    event.stopPropagation()

    try {
        const data = JSON.parse(event.dataTransfer.getData('application/json'))
        if (props.targetType === 'column' && data.type === 'columnControl') {
            alert('Column Control tidak boleh berada di dalam kolom.')
            return
        }
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
