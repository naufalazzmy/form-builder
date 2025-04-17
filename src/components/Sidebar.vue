<template>
    <div class="p-4 border-r w-1/4 bg-gray-50">
        <div class="p-2 bg-white border mb-2 cursor-pointer" draggable="true" @dragstart="handleDragStart">
            Input Field
        </div>
    </div>
</template>

<script setup>
function handleDragStart(event) {
    const inputElement = {
        type: 'input',
        label: 'Label',
        name: 'fieldName',
        inputType: 'text'
    }

    event.dataTransfer.setData('application/json', JSON.stringify(inputElement))
}
</script>