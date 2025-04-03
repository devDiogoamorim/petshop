<script setup>
import MorningIcon from "../assets/images/morning.svg"
import AfternoonIcon from "../assets/images/afternoon.svg"
import NightIcon from "../assets/images/night.svg"

defineProps({
  period: {
    type: String,
    required: true
  },
  appointments: {
    type: Array,
    default: () => [],
  },
})

const icons = {
  morning: MorningIcon,
  afternoon: AfternoonIcon,
  night: NightIcon,
}

const titles = {
  morning: "Manhã",
  afternoon: "Tarde",
  night: "Noite"
}

const hours = {
  morning: "09h-12h",
  afternoon: "13h-17h",
  night: "18h-21h"
}

</script>

<template>
  <section>
    <div class="header-section">
      <div class="period">
        <i><img :src="icons[period]" alt="Ícone do período"></i>
        <h2>{{ titles[period] }}</h2>
      </div>
      <span>{{ hours[period] }}</span>
    </div>
    <ul>
      <li v-for="appointment in appointments" :key="appointment.id">
        <strong>{{ appointment.hour }}</strong>
        <small>
          <strong>{{ appointment.petName }}</strong> / {{ appointment.tutor }}
        </small>
        <span>{{ appointment.service }}</span>
        <button>Remover agendamento</button>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import '../styles/scheduleSection.scss';
</style>