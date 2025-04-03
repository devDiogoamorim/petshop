<script setup>

import ScheduleSection from './components/ScheduleSection.vue';
import InputDate from "./components/form/InputDateFilter.vue"

import { onMounted, ref } from "vue"
import { useAppointmentsStore} from './stores/useAppointmentsStore.js';
import Modal from './components/Modal.vue';
import componentTitle from './components/ComponentTitle.vue'
import fetchAppointments from './services/fetchAppointments.js';

const appointmentsStore = useAppointmentsStore()
const modalIsActive = ref(false)
const openModal = () => modalIsActive.value = true

const closeModal = (event) => {
  if (event.target.classList.contains('overlay')) {
    modalIsActive.value = false;
  }
};

onMounted(async () => await fetchAppointments())

</script>

<template>
  <div class="wrapper">
    <div class="app-name">
      <img src="./assets/images/app-namer.svg" alt="Logo do Mundo Pet">
    </div>
    <div class="container">
      <header>
        <componentTitle 
        title="Sua agenda"
        paragraph="Aqui você pode ver todos os clientes e serviços agendados para hoje."
        />
        <InputDate />
      </header>
      <div class="schedules">
        <ScheduleSection period="morning" :appointments="appointmentsStore.dayliAppointments.morning"/>
        <ScheduleSection period="afternoon" :appointments="appointmentsStore.dayliAppointments.afternoon"/>
        <ScheduleSection period="night" :appointments="appointmentsStore.dayliAppointments.night"/>
      </div>
    </div>
    <div class="button-wrapper">
      <button class="btn-primary" @click="openModal">Novo agendamento</button>
    </div>
    <div class="overlay" v-show="modalIsActive" @click="closeModal">
      <Modal />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('./styles/index.scss');
</style>
