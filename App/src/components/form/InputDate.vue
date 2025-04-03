<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
  
})

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label :for="label">{{ label }}</label>
    <div class="input-date">
      <i><img :src="icon" alt="Ícone do input"></i>
      <input 
        :type="type" 
        :id="label" 
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/input.scss';

i {
  margin-right: 0.25rem;
}
</style>