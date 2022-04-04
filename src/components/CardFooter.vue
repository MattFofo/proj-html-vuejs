<!-- card dinamiche per sezione 'main services' 'trusted feedback' e footer  -->
<template>
  <div class="card position-relative">
    <div v-if="ObjCard.title == null" class="logo_box">
      <span class="logo logo_highlighted">NEX </span>
      <span>GEN</span>
    </div>
    <h4 v-else class="py-3">{{ ObjCard.title }}</h4>
    <p v-if="ObjCard.p1 != null" class="">{{ ObjCard.p1 }}</p>
    <ul v-if="ObjCard.links != null">
      <li v-for="link in ObjCard.links" :key="link.id">
        <a href="">{{ link.text }}</a>
      </li>
    </ul>
    <div v-else class="right_content_contacts pt-3 pb-3">
      <div class="phone">
        <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
        <span>+1 (305) 1234-5678</span>
      </div>
      <div class="mail py-3">
        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
        <span>hello@example.com</span>
      </div>
      <div class="address">
        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
        <span>Main Avanue, 987</span>
      </div>
    </div>
    <button v-show="ObjCard.button" class="btn btn-primary">GET IN TOUCH</button>
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
