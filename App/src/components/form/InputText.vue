<script setup>
import { ref } from "vue"

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue']);

const inputRef = ref(null)
const focusInput = () => inputRef.value.focus()


</script>

<template>
  <div class="input-text">
    <label :for="label">{{ label }}</label>
    <div @click="focusInput">
      <i><img :src="icon" alt="Ícone do input"></i>
      <input 
        type="text" 
        :id="label" 
        :placeholder="placeholder" 
        ref="inputRef"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        />
    </div>
  </div>
</template>

<style scoped>
@import '../../styles/input.scss'
</style>