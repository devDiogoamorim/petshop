<script setup>

import { ref, watch } from 'vue';
import { useDateStore } from '../../stores/useDateStores';
import filterAppointments from '../../utils/filterAppointments';
import dayjs from 'dayjs';

const dateStore = useDateStore()
const currentDate = ref(dateStore.currentDate)

watch(currentDate, (newDate) => {
  dateStore.formattedDate = dayjs(newDate).format("DD-MM-YYYY")
  filterAppointments()
})

</script>

<template>
  <div class="input-date">
    <i><img src="../../assets/images/calendar.svg" alt="Calendário"></i>
    <input 
    type="date"
    v-model="currentDate"
    >
  </div>
</template>

<style scoped lang="scss">
@import '../../styles/input.scss';
</style>