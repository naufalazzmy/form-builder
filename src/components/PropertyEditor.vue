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

    if (store.selectedElement?.type === 'date') {
        return defineAsyncComponent(() => import('@/components/editor/DateFieldEditor.vue'))
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

    if (store.selectedElement?.type === 'anotation') {
        return defineAsyncComponent(() => import('@/components/editor/AnotationEditor.vue'))
    }

    if (store.selectedElement?.type === 'title') {
        return defineAsyncComponent(() => import('@/components/editor/TitleEditor.vue'))
    }

    if (store.selectedElement?.type === 'section') {
        return defineAsyncComponent(() => import('@/components/editor/SectionEditor.vue'))
    }

    if (store.selectedElement?.type === 'text') {
        return defineAsyncComponent(() => import('@/components/editor/TextEditor.vue'))
    }

    if (store.selectedElement?.type === 'image') {
        return defineAsyncComponent(() => import('@/components/editor/ImageEditor.vue'))
    }

    if (store.selectedElement?.type === 'divider') {
        return defineAsyncComponent(() => import('@/components/editor/DividerEditor.vue'))
    }

    return null
})
</script>

<template>
    <div class="p-4 w-1/5 border-l bg-gray-50 overflow-y-auto">
        <component :element="store.selectedElement" :is="EditorComponent" v-if="EditorComponent" />
        <p v-else class="text-gray-400 italic">Tidak ada elemen yang dipilih</p>
    </div>
</template>
