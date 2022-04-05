<template>
  <section class="text-white">
    <div class="container">
      <div class="row align-content-center text-center">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
      </div>
      <div class="row row_cards position-relative">
        <div v-for="i in 4" :key="i" class="col">
          <div class="card position-relative text-center">
            <div class="icon_box m-auto">
              <h3>234</h3>
            </div>
            <h4 class="py-3">titolo titolo</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionType4',
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  section {
    background-image: url(../assets/img/bg-10.jpg);
    background-size: cover;
    background-position: center;
    padding-top: $height--header;
    padding-bottom: $height--header;
    max-width: 1980px;
    margin: auto;
  }
  .card {
    border: none;
    background-color: transparent;

  }
</style>
