<template>
  <div id="calendar-entry" class="container">
<div class="card" style="width: 14rem;">
  <div class="card-header">
    New Event
  </div>
  <div class="card-body">
    <input type="text" placeholder="New Event" v-model="inputEntry" required />
    <p>day of Event: <span>{{ titleOfActiveDay }}</span></p>
  </div>
</div>
  </div>
</template>

<script>
// import CalendarWeek from './CalendarWeek'
// import CalendarDay from './CalendarDay'
export default {
  name: "CalendarEntry",
  data() {
    return{
      inputEntry: '',
      error: false,
    } 
  },
  computed: {
    titleOfActiveDay () {
      return this.store.getActiveDay().fullTitle;
    }
  },
  // components:{
  //   CalendarDay,
  //   CalendarWeek
  // }
};
</script>

<style lang="scss" scoped></style>
