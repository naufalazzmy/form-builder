<!-- Sidebar.vue -->
<template>
    <div class="p-4 border-r w-1/5 bg-gray-50 space-y-2">
        <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h1>Fields</h1>
                <div class="flex flex-wrap gap-2">
                    <span draggable="true" @dragstart="dragInputField"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                        </svg>
                        Text
                    </span>
                    <span draggable="true" @dragstart="dragNumberField"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                        </svg>

                        Number
                    </span>
                    <span draggable="true" @dragstart="dragDateField"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>

                        Date
                    </span>
                    <span draggable="true" @dragstart="dragSelectField"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>
                        Select
                    </span>
                    <span draggable="true" @dragstart="dragRadio"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
                        </svg>

                        Radio
                    </span>
                    <span draggable="true" @dragstart="dragTextarea"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                        </svg>
                        Textarea
                    </span>
                    <span draggable="true" @dragstart="dragCheckbox"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Checkbox
                    </span>
                    <span draggable="true" @dragstart="dragAnotation"
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-100 ring-1 ring-blue-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path
                                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                            <path
                                d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>
                        Anotation
                    </span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1>Page</h1>
                <div class="flex flex-wrap gap-2">
                    <span draggable="true" @dragstart="dragColumnControl"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        Column Control
                    </span>
                    <span draggable="true" @dragstart="dragInputField"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25" />
                        </svg>

                        Title
                    </span>
                    <span draggable="true" @dragstart="dragInputField"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
                        </svg>
                        Section
                    </span>
                    <span draggable="true" @dragstart="dragSelectField"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803" />
                        </svg>
                        Text
                    </span>
                    <span draggable="true" @dragstart="dragRadio"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd"
                                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                clip-rule="evenodd" />
                        </svg>
                        Image
                    </span>
                    <span draggable="true" @dragstart="dragRadio"
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 hover:bg-green-100 ring-1 ring-green-700/10 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>
                        Divider
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

function dragSelectField(event) {
    const selectElement = {
        type: 'select',
        label: 'Select Label',
        name: 'selectField',
        required: false,
        horizontal: false,
        class: '',
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
        inputType: 'text',
        required: false,
        horizontal: false,
        class: '',
        prepend: '',
        append: ''
    }
    event.dataTransfer.setData('application/json', JSON.stringify(inputElement))
}

function dragNumberField(event) {
    const numberElement = {
        type: 'number',
        label: 'NumberLabel',
        name: 'fieldName',
        inputType: 'number',
        required: false,
        horizontal: false,
        class: '',
        prepend: '',
        append: ''
    }
    event.dataTransfer.setData('application/json', JSON.stringify(numberElement))
}

function dragDateField(event) {
    const dateElement = {
        type: 'date',
        label: 'dateLabel',
        name: 'fieldName',
        inputType: 'date',
        required: false,
        horizontal: false,
        class: '',
        prepend: '',
        append: ''
    }
    event.dataTransfer.setData('application/json', JSON.stringify(dateElement))
}

function dragColumnControl(event) {
    const columnElement = {
        type: 'columnControl',
        label: 'Column',
        columnCount: 2 // Default 2 kolom
    }
    event.dataTransfer.setData('application/json', JSON.stringify(columnElement))
}

function dragRadio(event) {
    const el = {
        type: 'radio',
        label: 'Radio Label',
        name: 'radioField',
        required: false,
        horizontal: false,
        class: '',
        columns: 1,
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' }
        ]
    }
    event.dataTransfer.setData('application/json', JSON.stringify(el))
}

function dragTextarea(event) {
    const el = {
        type: 'textarea',
        label: 'Textarea Label',
        name: 'textareaField',
        required: false,
        horizontal: false,
        class: '',
    }
    event.dataTransfer.setData('application/json', JSON.stringify(el))
}

function dragCheckbox(event) {
    const el = {
        type: 'checkbox',
        label: 'Checkbox Label',
        required: false,
        horizontal: false,
        class: '',
        columns: 1,
        options: [
            { name: 'name 1', label: 'Option 1', value: 'option1' },
            { name: 'name 2', label: 'Option 2', value: 'option2' },
            { name: 'name 3', label: 'Option 3', value: 'option3' }
        ]
    }
    event.dataTransfer.setData('application/json', JSON.stringify(el))
}

function dragAnotation(event) {
    const el = {
        type: 'anotation',
        label: 'Anotation Label',
        height: 'width',
        width: 'height',
        src: '',
        name: '',
        class: 'ImageAnotator',

    }
    event.dataTransfer.setData('application/json', JSON.stringify(el))
}

</script>
