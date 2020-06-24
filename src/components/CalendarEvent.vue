<template>
  <div>
    <div id="calendar-event" class="container">
      <span class="d-block text-center">{{ event.details }}</span>
      <div class="icons d-flex justify-content-center">
        <span class="mr-2"><i class="far fa fa-edit"></i></span>
        <span><i class="fas fa fa-trash-alt"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CalendarEvent',
    props: ['event', 'day'],
  //    data() {
  //   return {
  //     sharedState: this.$store.state,
  //   };
  // },
};
</script>

<style lang="scss" scoped>
</style>
