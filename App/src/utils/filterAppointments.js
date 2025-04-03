import { useAppointmentsStore } from "../stores/useAppointmentsStore";
import { useDateStore } from "../stores/useDateStores";
import { getActivePinia, createPinia, setActivePinia } from "pinia";

if (!getActivePinia()) {
  setActivePinia(createPinia());
}

export default function filterAppointments() {
  const dateStore = useDateStore();
  const appointmentsStore = useAppointmentsStore(); 

  const dailyAppointments = appointmentsStore.appointments.filter(
    (appointment) => appointment.date === dateStore.formattedDate
  );

  appointmentsStore.dayliAppointments = {
    morning: dailyAppointments.filter((a) => parseInt(a.hour.split(":")[0]) < 12),
    afternoon: dailyAppointments.filter((a) => parseInt(a.hour.split(":")[0]) >= 12 && parseInt(a.hour.split(":")[0]) < 18),
    night: dailyAppointments.filter((a) => parseInt(a.hour.split(":")[0]) >= 18),
  };
}

