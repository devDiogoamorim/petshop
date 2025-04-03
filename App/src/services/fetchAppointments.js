import axios from "axios";
import filterAppointments from '../utils/filterAppointments.js';
import { useAppointmentsStore} from '../stores/useAppointmentsStore.js';

export default async function fetchAppointments() {
  const API_URL = import.meta.env.VITE_API_URL;
  const appointmentsStore = useAppointmentsStore()

  try {
    const response = await axios.get(`${API_URL}/appointments`)
    const data = response.data

    appointmentsStore.appointments = data
    filterAppointments()
  } catch (error) {
    console.error("Erro ao buscar agendamentos: ", error)
  }
}

