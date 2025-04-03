import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppointmentsStore = defineStore("appointments", () => {
  const appointments = ref([]);

  const setAppointments = (newAppointments) => {
    appointments.value = newAppointments;
  };

  const dayliAppointments = ref({});

  const setDayliAppointments = (newAppointments) => {
    dayliAppointments.value = newAppointments;
  };


  return { appointments, setAppointments, dayliAppointments, setDayliAppointments};
});

