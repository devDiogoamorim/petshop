import axios from "axios";
import fetchAppointments from '../services/fetchAppointments.js';

export default async function newAppointment(form, result) {
  const API_URL = import.meta.env.VITE_API_URL;
  form.id = Date.now();

  try {
    await axios.post(`${API_URL}/appointments`, form);

    await fetchAppointments()
    return result;
  } catch (error) {
    console.error('Erro ao criar um novo agendamento:', error);
    return {
      type: 'error',
      content: 'Erro ao criar um novo agendamento'
    }
  };
}
