<template>
    <div class="p-2 bg-white rounded" :class="{ 'shadow-lg ring-blue-400': element.id === store.selectedElementId }"
        @click="store.selectElement(element.id)">
        <label class="block text-sm font-medium mb-2">{{ element.label }}</label>
        <table class="w-full table-auto border border-gray-300">
            <thead>
                <tr>
                    <th v-for="(col, idx) in element.columns" :key="idx" class="border px-2 py-1 text-left">
                        {{ col }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td v-for="(col, idx) in element.columns" :key="idx" class="border px-2 py-1 text-gray-400 italic">
                        (input)
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="flex justify-between">
            <small class="text-blue-500">name:[ {{ element.name }} ]</small>
            <small class="text-stone-900">{{ element.type }}</small>
            <small class="text-gray-700">classes:{ {{ element.class }} }</small>
        </div>
    </div>
</template>

<script setup>
import { useBuilderStore } from '@/stores/builder'
const props = defineProps({ element: Object })
const store = useBuilderStore()
</script>
  
