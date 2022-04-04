<!-- card dinamiche per sezione 'main services' 'trusted feedback' e footer  -->
<template>
  <div class="card position-relative">
    <div v-if="CardTypeFromMain == 'type1'"
    class="icon_box">
      <font-awesome-icon :icon="`fa-solid ${ObjCard.icon}`" />
    </div>
    <div v-else>
      <img :src="`${ObjCard.icon}`" alt="">
    </div>
    <h4 class="py-3">{{ ObjCard.title }}</h4>
    <p class="">{{ ObjCard.p1 }}</p>
    <p v-show="CardTypeFromMain == 'type2'">{{ ObjCard.p1 }}</p>
    <font-awesome-icon v-if="CardTypeFromMain == 'type1'"
    :icon="`fa-solid ${ObjCard.iconPositioned}`" />
    <font-awesome-icon v-else
    :icon="`fa-solid ${ObjCard.iconPositioned}`" />
  </div>
</template>

<script>
export default {
  name: 'CardFooter',
  props: {
    CardTypeFromFooter: String,
    ObjCard: Object,
  },
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
      .fa-truck-ramp-box, .fa-temperature-low, .fa-boxes-stacked {
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
    .fa-quote-right {
      position: absolute;
      bottom: 1em;
      right: 1em;
      font-size: 1.8rem;
    }
  }

</style>
