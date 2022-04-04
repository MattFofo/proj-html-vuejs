<!-- teamplate sezioni 'exellent in tranport' e 'get in touch'  -->
<template>
  <section class="" id="section2">
    <div class="container position-relative">
      <div class="row gx-5">
        <div class="col-8 pb-3">
          <small class="pretitle">WHO WE ARE</small>
          <h2>
            <div class="bg_word d-inline-block">
            <font-awesome-icon icon="fa-regular fa-gem" />
            <span>
              Excellence
            </span>
            </div>
            <span>
              in Transport
            </span>
          </h2>
        </div>
        <div class="col-8">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8 border-start">
          <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit ectetur ectetur adipislit</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
            <li>Lorem ipsum dolor sit amet consectetur </li>
          </ul>
        </div>
        <div class="col-4 position-absolute">
          <div class="right_content">
            <div class="vehicle_types">
              <h3 class="pb-4">vehicle types</h3>
              <div class="truck d-flex py-3">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4>Light</h4>
                  <div>Max Weight 1200Kg</div>
                </div>
              </div>
              <div class="truck d-flex border-top border-bottom py-3">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4>Medium</h4>
                  <div>Max Weight 6000Kg</div>
                </div>
              </div>
              <div class="truck d-flex py-3">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4>Heavy</h4>
                  <div>Max Weight 24000Kg</div>
                </div>
              </div>
            </div>
            <div class="certifications">
              <h3>certifications</h3>
              <img class="certificate w-50" src="../assets/img/certificate.png" alt="">
              <img class="certificate w-50" src="../assets/img/certificate.png" alt="">
            </div>
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
    section {
    padding-bottom: $height--header;
    h4, h3 {
      font-weight: 600;
    }
    p {
      font-size: 1.1rem;
    }
  }
  .col-4.position-absolute {
    top: 0;
    right: 0;
    .truck_img {
      background-color: $primary;
      padding: .4rem;
      width: 35%;
    }
  }
  .certifications {
    img {
      padding: 1rem;
    }
  }
</style>
