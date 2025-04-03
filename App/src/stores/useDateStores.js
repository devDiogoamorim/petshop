import { defineStore } from "pinia";
import { ref, watch } from "vue";
import dayjs from "dayjs";

export const useDateStore = defineStore("date", () => {

  const currentDate = ref(dayjs().format("YYYY-MM-DD"));
  const formattedDate = ref(dayjs(currentDate.value).format("DD-MM-YYYY"));

  watch(currentDate, (newDate) => {
    formattedDate.value = newDate
  });

  return { currentDate, formattedDate };
});
