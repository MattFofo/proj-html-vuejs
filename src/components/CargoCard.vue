<!-- card dinamiche per sezione 'main services' 'trusted feedback' e footer  -->
<template>
  <div class="card position-relative">
    <div class="icon_box">
      <font-awesome-icon icon="fa-solid fa-truck-ramp-box" />
    </div>
    <h4 class="py-3">titolo titolo</h4>
    <p class="">Lorem ipsum dolor sit amet tra tralaal consectetur.
      Iure recusandae debitis, laborum accusamus iusto doloremqu</p>
  <font-awesome-icon icon="fa-solid fa-arrow-right" />
  </div>
</template>

<script>
export default {
  name: 'CargoCard',
};
</script>

<style scoped lang="scss">
  .card {
    padding: 2em;
    background-color: darkgray;
    .icon_box {
      width: fit-content;
      background-color: aqua;
      padding: 0.3em;
      border-radius: 50%;
      height: fit-content;
      .fa-truck-ramp-box {
        font-size: 1.8rem;
        padding: 0.3em;
      }
    }
    .fa-arrow-right {
      position: absolute;
      top: 2em;
      right: 2em;
      font-size: 1.2rem;

    }
  }

</style>
