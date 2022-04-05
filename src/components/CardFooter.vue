<!-- card dinamiche per sezione 'main services' 'trusted feedback' e footer  -->
<template>
  <div class="card position-relative" :class="[ObjCard.bg, ObjCard.pd]">
    <div v-if="ObjCard.title == null" class="logo_box">
      <span class="logo logo_highlighted">NEX </span>
      <span class="logo">GEN</span>
    </div>
    <h4 v-else class="py-3">{{ ObjCard.title }}</h4>
    <p v-if="ObjCard.p1 != null" class="pt-3">{{ ObjCard.p1 }}</p>
    <ul v-if="ObjCard.links != null">
      <li v-for="link in ObjCard.links" :key="link.id">
        <font-awesome-icon icon="fa-solid fa-chevron-right" />
        <a href="#!">{{ link.text }}</a>
      </li>
    </ul>
    <div v-else class="right_content_contacts pt-3 pb-3">
      <div class="phone">
        <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
        <span class="ms-2">+1 (305) 1234-5678</span>
      </div>
      <div class="mail py-3">
        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
        <span class="ms-2">hello@example.com</span>
      </div>
      <div class="address">
        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
        <span class="ms-2">Main Avanue, 987</span>
      </div>
    </div>
    <button v-show="ObjCard.button" class="btn btn-outline-primary mt-3">GET IN TOUCH</button>
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
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  .bg_none {
    background-color: transparent;
  }
  .bg_card {
    background-color: $bg--card;
  }
  .card {
    padding: 2em;
    border: 0;
    p {
      font-size: 1.1rem;
      color: $color--text1;
    }
    h4 {
      color: white;
      font-size: 1.6rem;
      font-weight: 700;
    }
    ul {
      list-style: none;
      padding: 0;
      .fa-chevron-right {
        padding-right: .8rem;
      }
      li {
        padding-bottom: .4rem;
      }
    }
    a {
      color: $color--text1;
      text-decoration: none;
    }
    button {
      align-self: baseline;
    }
  }

</style>
