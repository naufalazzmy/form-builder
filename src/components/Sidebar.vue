<!-- Sidebar.vue -->
<template>
    <div class="p-4 border-r w-1/4 bg-gray-50 space-y-2">
        <div class="p-2 bg-white border cursor-pointer" draggable="true" @dragstart="dragInputField">
            Input Field
        </div>

        <div class="p-2 bg-white border cursor-pointer" draggable="true" @dragstart="dragColumnControl">
            Column Control
        </div>

        <div class="p-2 bg-white border cursor-pointer" draggable="true" @dragstart="dragSelectField">
            Select Input
        </div>

    </div>
</template>

<script setup>

function dragSelectField(event) {
    const selectElement = {
        type: 'select',
        label: 'Select Label',
        name: 'selectField',
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' }
        ]
    }
    event.dataTransfer.setData('application/json', JSON.stringify(selectElement))
}

function dragInputField(event) {
    const inputElement = {
        type: 'input',
        label: 'Label',
        name: 'fieldName',
        inputType: 'text'
    }
    event.dataTransfer.setData('application/json', JSON.stringify(inputElement))
}

function dragColumnControl(event) {
    const columnElement = {
        type: 'columnControl',
        label: 'Column',
        columnCount: 2 // Default 2 kolom
    }
    event.dataTransfer.setData('application/json', JSON.stringify(columnElement))
}
</script>
