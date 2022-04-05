<!-- teamplate sezioni 'exellent in tranport' e 'get in touch'  -->
<template>
  <section class="" id="section2">
    <div class="container position-relative">
      <div class="row gx-5">
        <div class="col-8 pb-1">
          <small class="pretitle">WHO WE ARE</small>
          <h2 class="title">
            <div class="bg_word d-inline-block">
            <font-awesome-icon icon="fa-regular fa-gem" />
            <span>
              Excellence
            </span>
            </div>
            <span class="text-black">
              in Transport
            </span>
          </h2>
        </div>
        <div class="col-8">
          <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8">
          <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-7 border_start fst-italic mb-3">
          <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laborum magni nihil tempore dolorem culpa rem veritatis.
          </p>
        </div>
        <div class="col-8">
          <p class="fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit ectetur ectetur adipislit
          </p>
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
              <h3 class="pb-4 text-black">Vehicle Types</h3>
              <div class="truck d-flex">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4 class="text-black">Light</h4>
                  <div>Max Weight 1200Kg</div>
                </div>
              </div>
              <div class="truck truck_bordered d-flex">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4 class="text-black">Medium</h4>
                  <div>Max Weight 6000Kg</div>
                </div>
              </div>
              <div class="truck d-flex">
                <img class="truck_img" src="../assets/img/truck-1.png" alt="">
                <div class="ps-3">
                  <h4 class="text-black">Heavy</h4>
                  <div>Max Weight 24000Kg</div>
                </div>
              </div>
            </div>
            <div class="certifications pt-2">
              <h3 class="text-black">Certifications</h3>
              <img class="certificate me-4" src="../assets/img/certificate.png" alt="">
              <img class="certificate" src="../assets/img/certificate.png" alt="">
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
    color: #92979b;
    h4, h3 {
      font-weight: 600;
      margin-bottom: 0;
    }
    .border_start {
      border-left: 5px solid $primaryTransp;
      padding-top: .5rem;
      padding-bottom: .5rem;
      margin-left: calc(var(--bs-gutter-x) * 0.5);
      p {
        font-size: 1rem;
        margin-bottom: .8rem;
        height: 100%;
        display: flex;
        align-items: center;
      }
    }
    ul {
      padding-left: .8rem;
    }
  }
  .col-4.position-absolute {
    top: 0;
    right: 0;
    .truck {
      padding-top: .8rem;
      padding-bottom: .8rem;
    }
    .truck_bordered {
      border-top: 1px solid #a2a5a8;
      border-bottom: 1px solid #a2a5a8;
    }
    .truck_img {
      background-color: #DAECED;
      padding: .4rem;
      width: 30%;
      border-radius: 3px;
      box-shadow: 0px 0px 5px 3px #d3d3d35e;
    }
  }
  .certifications {
    h3 {
      padding-bottom: 1rem;
      padding-top: 2rem;
    }
    img {
      box-shadow: 10px 10px 20px 1px #86868630;
      width: 40%;
    }
  }
</style>
