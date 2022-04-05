<!-- card dinamiche per sezione 'main services' 'trusted feedback' e footer  -->
<template>
  <div class="card position-relative ">
    <div v-if="CardTypeFromMain == 'type1'"
    class="icon_box">
      <font-awesome-icon :icon="`fa-solid ${ObjCard.icon}`" class="icon" />
    </div>
    <div v-else class="mb-3">
      <img :src="`${ObjCard.icon}`" alt="">
    </div>
    <h4 v-show="CardTypeFromMain == 'type1'"
    class="py-3 text-white fw-bold">{{ ObjCard.title }}</h4>
    <p v-show="CardTypeFromMain == 'type1'" class="">{{ ObjCard.p1 }}</p>
    <p v-show="CardTypeFromMain == 'type2'">{{ ObjCard.p1 }}</p>
    <p v-show="CardTypeFromMain == 'type2'">{{ ObjCard.p2 }}</p>
    <font-awesome-icon v-if="CardTypeFromMain == 'type1'"
    :icon="`fa-solid ${ObjCard.iconPositioned}`"
    class="icon"
    />
    <font-awesome-icon v-else
    :icon="`fa-solid ${ObjCard.iconPositioned}`"
    class="icon_bot"
    />
  </div>
</template>

<script>
export default {
  name: 'CargoCard',
  props: {
    CardTypeFromMain: String,
    ObjCard: Object,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  .card {
    padding: 2em;
    background-color: darkgray;
    background-color: $bg--card;
    p {
      font-size: 1.1rem;
      color: $color--text1;
    }
    img {
      filter: invert(100%);
      filter: brightness(100);
      width: 40%;
    }
    .icon_box {
      width: fit-content;
      background-color: $primaryTransp;
      padding: 0.3em;
      border-radius: 50%;
      height: fit-content;
      .fa-truck-ramp-box, .fa-temperature-low, .fa-boxes-stacked {
        font-size: 1.8rem;
        padding: 0.3em;
      }
    }
    .icon {
      color: $primary;
    }
    .icon_bot {
      color: #3E3E43;
    }
    .fa-arrow-right {
      position: absolute;
      top: 2em;
      right: 2em;
      font-size: 1.5rem;
      color: $primaryTransp;
    }
    .fa-quote-right {
      position: absolute;
      bottom: 1em;
      right: 1em;
      font-size: 1.8rem;
    }
  }

</style>
