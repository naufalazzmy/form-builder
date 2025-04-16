<template>
    <div class="flex h-screen">
        <div class="w-1/5 bg-gray-100 p-4 border-r">
            <ComponentPanel />
        </div>

        <div class="flex-1 p-4 bg-gray-50">
            <Canvas />
        </div>

        <div class="w-1/5 bg-gray-100 p-4 border-l">
            <PropertyEditor />
        </div>
    </div>
</template>

<script setup>
import ComponentPanel from './ComponentPanel.vue'
import Canvas from './Canvas.vue'
import PropertyEditor from './PropertyEditor.vue'
</script>
