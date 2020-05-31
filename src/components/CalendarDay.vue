<template>
  <div id="calendar-day" class="container">
    <div class="row">
      <div class="col">
      <div class="card">
        <div class="card-header">
          {{ day.abbvTitle }}
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarDay",
  props: ["day"],
};
</script>

<style lang="scss" scoped></style>
