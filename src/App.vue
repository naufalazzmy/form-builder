<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <Canvas />
      <PropertyEditor />
    </div>

    <!-- Action Buttons -->
    <div class="p-2 border-t bg-white flex justify-end-safe gap-2">
      <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" @click="showJson = true">
        View JSON
      </button>
      <button @click="downloadJson" class="bg-green-600 text-white px-4 py-2 rounded">
        Download JSON
      </button>
    </div>

    <!-- Modal for JSON View -->
    <div v-if="showJson" class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div class="bg-white p-6 rounded max-w-2xl w-full">
        <h2 class="text-lg font-semibold mb-4">Form JSON</h2>
        <pre
          class="bg-gray-100 p-4 max-h-[60vh] overflow-y-auto text-sm">{{ JSON.stringify(store.elements, null, 2) }}</pre>
        <div class="flex justify-between mt-4">
          <button class="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded" @click="showJson = false">
            Close
          </button>
          <button @click="copyJson" class="bg-blue-600 text-white px-4 py-2 rounded">
            Copy JSON
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

function copyJson() {
  const json = JSON.stringify(store.elements, null, 2)
  navigator.clipboard.writeText(json)
    .then(() => {
      alert('JSON berhasil disalin ke clipboard!')
    })
    .catch(err => {
      console.error('Gagal menyalin JSON:', err)
      alert('Gagal menyalin JSON')
    })
}

function downloadJson() {
  const json = JSON.stringify(store.elements, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'form-builder.json'  // Nama file JSON yang akan diunduh
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)  // Membersihkan URL object setelah selesai
}

</script>
