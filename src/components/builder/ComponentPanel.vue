<script setup>
import { useBuilderStore } from '@/stores/builder'
const store = useBuilderStore()

function handleDragStart(e) {
    const element = {
        type: 'input',
        label: 'Input Label',
        placeholder: 'Enter text...',
        required: false,
    }
    e.dataTransfer.setData('application/json', JSON.stringify(element))
}
</script>

<template>
    <div>
        <div class="bg-white border px-4 py-2 rounded shadow-sm cursor-grab" draggable="true"
            @dragstart="handleDragStart">
            Input Field
        </div>
    </div>
</template>
