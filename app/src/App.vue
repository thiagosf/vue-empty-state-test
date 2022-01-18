<template>
  <div class="flex justify-center items-center min-h-screen">
    <EmptyState
      image="svgs/not_found.svg"
      title="Page Not Found"
      text="This page does not exist"
    >
      <div class="text-center mt-2">
        <a
          href="#"
          class="rounded-full bg-green-600 text-white py-2 px-4 font-bold text-sm uppercase transition-colors duration-200 hover:bg-green-700"
        >Go home</a>
      </div>
    </EmptyState>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EmptyState from './components/EmptyState/EmptyState.vue'

export default defineComponent({
  name: 'App',
  components: {
    EmptyState
  }
})
</script>
