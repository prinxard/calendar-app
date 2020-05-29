<template>
  <div>
    <div id="calendar-day" class="container">
        <div class="col-lg-3 cal">
            {{ day.abbvTitle }}
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
