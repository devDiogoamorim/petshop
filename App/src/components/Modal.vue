<script setup>
import ComponentTitle from './ComponentTitle.vue';
import InputText from './form/InputText.vue';
import InputDate from './form/InputDate.vue';

import userIcon from '../assets/images/user.svg'
import petIcon from '../assets/images/pet.svg'
import phoneIcon from '../assets/images/phone.svg'
import calendarIcon from '../assets/images/calendar.svg'
import clockIcon from '../assets/images/clock-circle.svg'

import validateForm from '../utils/validateForm';
import { reactive, ref, watch } from 'vue';
import dayjs from 'dayjs';

const inputDate = ref(dayjs(new Date, 'DD-MM-YYYY').format('YYYY-MM-DD'))
const inputHour = ref(dayjs().format("HH:mm"))

const form = reactive({
  tutor: '',
  petName: '',
  phoneNumber: '',
  service: '',
  date: this ? this.value : dayjs(new Date).format('DD-MM-YYYY'),
  hour: inputHour.value,
})

watch(inputDate, (newDate) => {
  form.date = dayjs(newDate).format("DD-MM-YYYY")
})

function clearInput() {
  form.tutor = ''
  form.petName = ''
  form.phoneNumber = ''
  form.service = ''
  form.date = dayjs().format('YYYY-MM-DD')
  form.hour = dayjs().format('HH:mm')
}

const submitForm = async () => {
  const message = await validateForm(form)
  alert(`${message.type}: ${message.content}`)
  clearInput()
}
</script>

<template>
  <div class="modal">
    <ComponentTitle title="Agende um atendimento"
      paragraph="Preencha os dados do cliente para realizar o agendamento:" />
    <form @submit.prevent="submitForm">
      <InputText v-model="form.tutor" label="Nome do tutor" :icon="userIcon" placeholder="Nome e sobrenome" />
      <InputText v-model="form.petName" label="Nome do pet" :icon="petIcon" placeholder="Cheddar" />
      <InputText v-model="form.phoneNumber" label="Telefone" :icon="phoneIcon" placeholder="(00) 0 0000-0000" />
      <div class="input-textarea">
        <label for="service">Descrição do serviço</label>
        <textarea v-model="form.service" id="service" placeholder="Ex: Banho e tosa"></textarea>
      </div>
      <div class="time-container">
        <InputDate 
          v-model="inputDate" 
          type="date" label="Data" 
          :icon="calendarIcon" 
        />
        <InputDate v-model="form.hour" type="time" label="Hora" :icon="clockIcon" class="time" />
      </div>
      <button type="submit" class="btn-newAppointment">Agendar</button>
    </form>
  </div>
</template>

<style scoped>
@import '../styles/modal.scss';
@import '../styles/input.scss';
</style>