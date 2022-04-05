<template>
  <section class="text-white">
    <div class="container">
      <div class="row align-content-center text-center">
        <div class="col-12">
          <small class="pretitle">WHAT ARE WE DOING</small>
          <h2 class="title">
            <div class="bg_word d-inline-block">
              <span class="text-white">
                Results
              </span>
            </div>
            <span class="text-white">
              in Numbers
            </span>
          </h2>
        </div>
      </div>
      <div class="row row_cards position-relative">
        <div v-for="card in arrCards" :key="card.id" class="col">
          <div class="card position-relative text-center">
            <div class="icon_box m-auto">
              <h3>{{ card.title }}</h3>
            </div>
            <h4 class="py-1">{{ card.p }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionType4',
  data() {
    return {
      arrCards: [
        {
          id: 1,
          title: '128',
          p: 'Certifications',
        },
        {
          id: 2,
          title: '230',
          p: 'Employees',
        },
        {
          id: 3,
          title: '517',
          p: 'Customers',
        },
        {
          id: 4,
          title: '94',
          p: 'Countries Served',
        },
      ],
    };
  },
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
    h2{
      margin-bottom: 7rem;
    }
  }
  .card {
    border: none;
    background-color: transparent;
    h3 {
      color: $primary;
      font-size: 2rem;
      font-weight: 700;
    }
  }
</style>
