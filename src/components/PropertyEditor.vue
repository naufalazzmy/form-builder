<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useBuilderStore } from '@/stores/builder'

const store = useBuilderStore()

const EditorComponent = computed(() => {
    if (store.selectedElement?.type === 'input') {
        return defineAsyncComponent(() => import('@/components/editor/InputFieldEditor.vue'))
    }
    if (store.selectedElement?.type === 'number') {
        return defineAsyncComponent(() => import('@/components/editor/NumberFieldEditor.vue'))
    }

    if (store.selectedElement?.type === 'columnControl') {
        return defineAsyncComponent(() => import('@/components/editor/ColumnControlEditor.vue'))
    }

    if (store.selectedElement?.type === 'select') {
        return defineAsyncComponent(() => import('@/components/editor/SelectInputEditor.vue'))
    }

    if (store.selectedElement?.type === 'radio') {
        return defineAsyncComponent(() => import('@/components/editor/RadioEditor.vue'))
    }

    if (store.selectedElement?.type === 'textarea') {
        return defineAsyncComponent(() => import('@/components/editor/TextareaEditor.vue'))
    }

    if (store.selectedElement?.type === 'checkbox') {
        return defineAsyncComponent(() => import('@/components/editor/CheckboxEditor.vue'))
    }

    // if (store.selectedColumnFieldInfo) {
    //     return defineAsyncComponent(() => import('@/components/editor/ColumnInnerFieldEditor.vue'))
    // }

    return null
})
</script>

<template>
    <div class="p-4 w-1/4 border-l bg-gray-50 overflow-y-auto">
        <component :is="EditorComponent" v-if="EditorComponent" />
        <p v-else class="text-gray-400 italic">Tidak ada elemen yang dipilih</p>
    </div>
</template>
