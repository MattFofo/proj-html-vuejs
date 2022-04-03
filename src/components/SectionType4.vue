<template>
  <section class="text-white">
    <div class="container">
      <div class="row align-content-center text-center">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <!-- <div class="col">
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div> -->
        <!-- <div class="btn_box col-5">
          <button class="btn btn-outline-primary">SEE ALL</button>
        </div> -->
        <!-- inserire blocco cards al posto dei bottoni -->
        <!-- <div class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div> -->
      </div>
      <!-- <div class="line_break"></div> -->
      <!-- cards -->
      <div class="row row_cards position-relative">
        <!-- <div v-for="i in 3" :key="i" class="col">
          <CargoCard />
        </div> -->
        <div v-for="i in 4" :key="i" class="col">
          <div class="card position-relative text-center">
            <div class="icon_box m-auto">
              <h3>234</h3>
            </div>
            <h4 class="py-3">titolo titolo</h4>
            <!-- <p class="">Lorem ipsum dolor sit amet tra tralaal consectetur.</p> -->
            <!-- <font-awesome-icon icon="fa-solid fa-arrow-right" /> -->
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
  }
  .card {
    border: none;
    background-color: transparent;

  }
</style>
