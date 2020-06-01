<template>
  <div id="calendar-day" class="container-fluid">
    <div class="card">
      <div class="card-header head-card">
        {{ day.abbvTitle }}
      </div>
      <div class="card-body">
        {{ day.id }}
        <div class="day-event">
          <h6 text-center>Complete project</h6>
          <div class="icons">
            <i class="far fa fa-edit"></i>
            <i class="fas fa fa-trash-alt"></i>
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

<style lang="scss" scoped>
.day-event {
  padding: 5px;
  background-color: rgb(153, 255, 153)
}
 .icons {
  padding: 0 4px;
}

</style>
