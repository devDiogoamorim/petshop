import newAppointment from "../services/newAppointment";

export default async function validateForm(form) {
  const message = {
      type: 'success', 
      content: 'Novo agendamento criado com sucesso!'
    }

  for (const value of Object.values(form)) {
    if (value.trim() === "") {
      message.type = 'error';
      message.content = 'Preencha todos os campos';

      return message
    }
  }

  return await newAppointment(form, message)
}
