<template>
  <div id="calendar-day" class="container-fluid" @click="setActiveDay()">
    <div class="card">
      <div class="card-header head-card" >
        {{ day.abbvTitle }} 
      </div>
      <div class="card-body"> 
        {{ day.id }} 
        <div class="day-event">
          <CalendarEvent
            v-for="(event, index) in day.events"
            :key="index"
            :event="event"
            :day="day"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CalendarEvent from "./CalendarEvent.vue";
export default {
  name: "CalendarDay",
  props: ["day"],
  computed: {
    // setDay(dayId) {
    //   return this.$store.getters.setActiveDay;
    // },
    ...mapMutations(['setActiveDay']),
    
    
  },
 
  components: {
    CalendarEvent,
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  padding: 5px;
  background-color: rgb(153, 255, 153);
}
.icons {
  padding: 0 4px;
}
</style>
