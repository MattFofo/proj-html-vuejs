<!-- prima sezione subito sotto l'header -->
<template>
  <section>
    <div class="container">
      <div class="row align-content-center">
        <div class="col-12">
          <small class="pretitle">LOGISTIC SERVICES</small>
          <h1 class="text-white">CARGO TRANSPORT</h1>
        </div>
        <div class="col-6 py-4">
          <p class="">
          <!-- eslint-disable-next-line max-len -->
            Fractional or exclusive road cargo tranportation to all regions, with small medium and large vehicles.
          </p>
        </div>
        <div class="col-8">
          <button class="btn btn-primary me-4">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTop',
  props: {
    sectionsData: Array,
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  section {
    color: $color--text1;
    position: relative;
    top: ($height--header) * -1;
    left: 0;
    right: 0;
    background-image: linear-gradient(rgba(34, 34, 34, 0.64), rgba(0, 0, 0, 0.64)),
      url(../assets/img/bg-9.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    .row {
      // padding-top: ($height--header);
      height: 850px;
    }
    h1 {
      width: min-content;
      font-size: 5rem;
      font-weight: 800;
    }
  }
</style>
