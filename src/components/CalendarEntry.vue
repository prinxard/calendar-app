<template>
  <div id="calendar-entry" class="container">
    <div class="card" style="width: 14rem;">
      <div class="card-header">
        New Event
      </div>
      <div class="card-body">
        <input
          type="text"
          placeholder="New Event"
          v-model="inputEntry"
          required
        />
        <p>day of Event: <span>{{ getActiveDay.fullTitle }}</span></p>
        <button class="btn btn-primary mt-2">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "CalendarEntry",
  data() {
    return {
      inputEntry: "",
      // error: false,
    };
  },
  computed: {
    // titleOfActiveDay(day) {
    //   return this.$store.getters.getActiveDay.fullTitle
    // },
    ...mapGetters(['getActiveDay'])
  },
};
</script>

<style lang="scss" scoped></style>
