<template>
    <div class="p-4 border-r w-1/4 bg-gray-50 space-y-2">
        <!-- Input Field -->
        <div class="p-2 bg-white border cursor-pointer" draggable="true" @dragstart="dragInputField">
            Input Field
        </div>

        <!-- Column Control -->
        <div class="p-2 bg-white border cursor-pointer" draggable="true" @dragstart="dragColumnControl">
            Column Control
        </div>
    </div>
</template>

<script setup>
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
        label: 'Row dengan Kolom',
        columnCount: 2 // Default 2 kolom
    }
    event.dataTransfer.setData('application/json', JSON.stringify(columnElement))
}
</script>
