<template>
  <div class="empty-state text-center">
    <div v-if="image" class="empty-state__image flex justify-center mb-4">
      <img
        :src="image"
        :alt="title"
        :width="imageWidth"
        :class="imageClasses"
      />
    </div>
    <div class="empty-state__title font-bold text-lg text-gray-700">
      {{ title }}
    </div>
    <div v-if="text" class="empty-state__text text-gray-600 mt-1">
      {{ text }}
    </div>
    <div v-if="hasDefaultSlot" class="empty-state__children mt-6">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmptyState',
  props: {
    image: {
      type: String,
      required: false
    },
    imageWidth: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  },
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    imageClasses () {
      return this.imageWidth ? '' : 'w-full'
    }
  }
})
</script>
