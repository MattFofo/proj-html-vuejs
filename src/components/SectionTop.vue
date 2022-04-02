<!-- prima sezione subito sotto l'header -->
<template>
  <section>
    <div class="container">
      <div class="row align-content-center">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <div class="col-5">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
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
    color: white;
    position: relative;
    top: ($height--header) * -1;
    left: 0;
    right: 0;
    background-image: linear-gradient(rgba(34, 34, 34, 0.5), rgba(26, 24, 24, 0.5)),
      url(../assets/img/bg-9.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    .row {
      padding-top: ($height--header);
      height: 850px;
    }
    h1 {
      width: min-content;
    }
  }
</style>
