<script setup>
defineProps({
    element: Object,
    isSelected: Boolean
})
</script>

<template>
    <div :class="[
        'border p-4 bg-white rounded shadow-sm mb-2',
        isSelected ? 'ring-2 ring-blue-400' : ''
    ]">
        <label class="block font-medium mb-1">{{ element.label }}</label>
        <input class="w-full border px-2 py-1 rounded" :placeholder="element.placeholder" :required="element.required"
            disabled />
    </div>
</template>
