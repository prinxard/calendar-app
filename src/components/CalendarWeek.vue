<template>
  <div>
    <div id="calendar-week" class="container">
      <div class="row">
        <div>
          <CalendarDay
            v-for="day in sharedState.seedData"
            :key="day.id"
            :day="day"
          />
        </div>
      </div>
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
      sharedState: this.$store.state
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style lang="scss" scoped>
 .cal{
   border: solid red 1px;
 }
</style>
