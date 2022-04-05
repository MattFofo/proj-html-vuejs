<template>
  <section class="bg_light" id="section4">
    <div class="container-fluid">
      <div class="row align-content-center text-center mb-5">
        <div class="col-12">
          <small class="pretitle">HOW IT WORKS IN PRACTICE</small>
          <h2 class="title">
            <div class="bg_word d-inline-block">
              <span>
                Logistical
              </span>
            </div>
            <span class="text-black">
              Procedure
            </span>
          </h2>
        </div>
        <div class="col-5 m-auto">
          <p class="mb-5">
            <!-- eslint-disable-next-line max-len -->
            we work with innovative methodologies to ensure that the entire delivery process is done from start to finish as planned.
          </p>
        </div>
      </div>
      <div class="line_break"></div>
      <!-- cards -->
      <div class="row row_cards position-relative mx-6">
        <div v-for="card in arrCards" :key="card.id" class="col">
          <div class="card position-relative">
            <div class="icon_box">
              {{`0${card.id}`}}
            </div>
            <h4 class="py-3 fw-bold">{{ card.title }}</h4>
            <p class="">{{ card.p }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionType3',
  data() {
    return {
      arrCards: [
        {
          id: 1,
          title: 'Collection of information',
          p: 'Lorem ipsus dolor sit amet consectetur.',
        },
        {
          id: 2,
          title: 'Service Invoice Sending',
          p: 'Lorem ipsus dolor sit amet consectetur.',
        },
        {
          id: 3,
          title: 'Withdrawal of Cargo',
          p: 'Lorem ipsus dolor sit amet consectetur.',
        },
        {
          id: 4,
          title: 'Transport Customer Order',
          p: 'Lorem ipsus dolor sit amet consectetur.',
        },
        {
          id: 5,
          title: 'Successful Delivery',
          p: 'Lorem ipsus dolor sit amet consectetur.',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';

  section {
    padding-top: $height--header;
    padding-bottom: $height--header;
    max-width: 1980px;
    margin: auto;
    .row_cards {
      bottom: calc(calc($height--card-icon-box / 2) - calc($height--line-break / 2) + 3px);
    }
    .line_break {
      height: $height--line-break;
      background-color: $primaryTransp;
      position: absolute;
      left: 0;
      right: 0;
      max-width: 1980px;
      margin: auto;
    }
    .card {
      text-align: center;
      padding: 2em;
      padding-top: 0;
      background-color: transparent;
      border: none;
      .icon_box {
        background-color: #DAECED;
        color: $primary;
        font-weight: 600;
        font-size: 1.4rem;
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
      p {

      }
    }
  }
</style>
