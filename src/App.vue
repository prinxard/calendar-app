
<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>

import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue'
export default {

  components: {
    CalendarEntry,
    CalendarWeek
  }
  
}
</script>

<style lang="scss">

</style lang="scss">

</style>
