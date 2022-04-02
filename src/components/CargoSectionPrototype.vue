<template>
  <section :class="sectionType == 'type2' ? 'bg-dark text-white' : 'bg-light'
  " class="position-relative"
  >
    <div class="container position-relative">
      <div class="row">
        <div class="col-12">
          <small>{{ sectionsData.text.pretitle }}</small>
          <h1>{{ sectionsData.text.title }}</h1>
        </div>
        <div :class="sectionType == 'type2' ? 'col-7' : 'col-5'">
          <p class="">{{ sectionsData.text.p1 }}</p>
        </div>
        <div v-show="sectionType == 'type2'" class="col-7">
          <p class="">{{ sectionsData.text.p2 }}</p>
        </div>
        <div v-show="sectionsData.sectionTop == true" class="col-8">
          <button class="btn btn-primary">GET IN TOUCH</button>
          <button class="btn btn-outline-primary">READ MORE</button>
        </div>
        <div class="col-6">
          <p></p>
        </div>
        <!-- right content -->
        <div class="col-3 right_content">
            <div class="vehicle_types">
              <div class="truck">
                <img class="truck_img img-fluid" src="../assets/img/truck-1.png" alt="">
                <div>
                  <div>light</div>
                  <div></div>
                </div>
              </div>
              <div class="truck">
                <img class="truck_img img-fluid" src="../assets/img/truck-1.png" alt="">
                <div>
                  <div>mrdium</div>
                  <div></div>
                </div>
              </div>
              <div class="truck">
                <img class="truck_img img-fluid" src="../assets/img/truck-1.png" alt="">
                <div>
                  <div>heavy</div>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="certifications"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CargoSectionPrototype',
  props: {
    sectionsData: Object,
  },
  data() {
    return {
      sectionType: '',
    };
  },
  methods: {
    setPropertiesBySectionType() {
      if (this.sectionsData.sectionType === 'type1') {
        this.sectionType = 'type1';
      } if (this.sectionsData.sectionType === 'type2') {
        this.sectionType = 'type2';
      }
    },
  },
  created() {
    this.setPropertiesBySectionType();
  },
};
</script>

<style scoped lang="scss">
  .right_content {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
