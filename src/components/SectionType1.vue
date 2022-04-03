<!-- teamplate sezioni 'exellent in tranport' e 'get in touch'  -->
<template>
  <section class="pb-5" id="section2">
    <div class="container position-relative">
      <div class="row">
        <div class="col-7">
          <small>pretitolo</small>
          <h1>TITOLO TITOLO</h1>
        </div>
        <div class="col-7">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-7">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-7 border-start">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-7">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ectetur ectetur adipislit</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
          </ul>
        </div>
      </div>
      <div class="col-4 position-absolute">
        <div class="right_content">
          <div class="vehicle_types">
            <h4>vehicle types</h4>
            <div class="truck d-flex">
              <img class="truck_img w-25" src="../assets/img/truck-1.png" alt="">
              <div>
                <div>light</div>
                <div>max weight 19999</div>
              </div>
            </div>
            <div class="truck d-flex border-top border-bottom">
              <img class="truck_img w-25" src="../assets/img/truck-1.png" alt="">
              <div>
                <div>mrdium</div>
                <div>max weight 19999</div>
              </div>
            </div>
            <div class="truck d-flex">
              <img class="truck_img w-25" src="../assets/img/truck-1.png" alt="">
              <div>
                <div>heavy</div>
                <div>max weight 19999</div>
              </div>
            </div>
          </div>
          <div class="certifications">
            <h4>certifications</h4>
            <img class="certificate w-25" src="../assets/img/certificate.png" alt="">
            <img class="certificate w-25" src="../assets/img/certificate.png" alt="">
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionType1',
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  .col-4.position-absolute {
    top: 0;
    right: 0;
    .truck_img {
      background-color: $primary;
    }
  }
</style>
