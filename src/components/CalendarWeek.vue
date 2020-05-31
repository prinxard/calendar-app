<template>
  <div id="calendar-week" class="container">
    <div class="row row-cols-7">
        
          <CalendarDay
            v-for="day in sharedState.seedData"
            :key="day.id"
            :day="day"
          />

    </div>
  </div>
</template>

<script>
// import { store } from "../store/index.js";
import CalendarDay from "./CalendarDay.vue";
export default {
  name: "CalendarWeek",
  data() {
    return {
      sharedState: this.$store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style lang="scss" scoped>
.day-row {
  width: 12rem;
}
</style>
