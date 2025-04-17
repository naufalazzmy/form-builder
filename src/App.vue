<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <Canvas />
      <PropertyEditor />
    </div>

    <!-- Action Buttons -->
    <div class="p-4 border-t bg-white text-right">
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="showJson = true">
        JSON View
      </button>
    </div>

    <!-- Modal for JSON View -->
    <div v-if="showJson" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div class="bg-white p-6 rounded max-w-2xl w-full">
        <h2 class="text-lg font-semibold mb-4">Form JSON</h2>
        <pre
          class="bg-gray-100 p-4 max-h-[60vh] overflow-y-auto text-sm">{{ JSON.stringify(store.elements, null, 2) }}</pre>
        <div class="text-right mt-4">
          <button class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded" @click="showJson = false">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBuilderStore } from '@/stores/builder'
import Sidebar from './components/Sidebar.vue'
import Canvas from './components/Canvas.vue'
import PropertyEditor from './components/PropertyEditor.vue'

const store = useBuilderStore()
const showJson = ref(false)
</script>
