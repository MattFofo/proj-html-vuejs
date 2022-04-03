<template>
  <section id="section4">
    <div class="container-fluid">
      <div class="row align-content-center text-center">
        <div class="col-12">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <div class="col">
          <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <!-- <div class="btn_box col-5">
          <button class="btn btn-outline-primary">SEE ALL</button>
        </div> -->
        <!-- inserire blocco cards al posto dei bottoni -->
        <!-- <div class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div> -->
      </div>
      <div class="line_break"></div>
      <!-- cards -->
      <div class="row row_cards position-relative">
        <!-- <div v-for="i in 3" :key="i" class="col">
          <CargoCard />
        </div> -->
        <div v-for="i in 5" :key="i" class="col">
          <div class="card position-relative">
            <div class="icon_box">
              {{`0${i}`}}
            </div>
            <h4 class="py-3">titolo titolo</h4>
            <p class="">Lorem ipsum dolor sit amet tra tralaal consectetur.</p>
            <!-- <font-awesome-icon icon="fa-solid fa-arrow-right" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionType3',
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  section {
    padding-top: $height--header;
    padding-bottom: $height--header;
    .row_cards {
      bottom: calc(calc($height--card-icon-box / 2) - calc($height--line-break / 2));
    }
    .line_break {
      height: $height--line-break;
      background-color: aqua;
      position: absolute;
      left: 0;
      right: 0;
    }
    .card {
    text-align: center;
    padding: 2em;
    padding-top: 0;
    background-color: transparent;
    border: none;
    .icon_box {
      background-color: aqua;
      border-radius: 50%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1em;
      width: $height--card-icon-box;
      height: $height--card-icon-box;
      margin: auto;
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
  }
</style>
