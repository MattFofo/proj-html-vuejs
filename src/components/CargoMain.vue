<template>
<!-- parte principale pagina con dentro le sezioni.
Conterrà anche i dati per creare i due tipi principali di sezioni dinamicamente e le cards-->
  <main>
    <SectionTop />
    <SectionType1 />
    <SectionType2 :section-version-from-main="'V1'" :card-type-from-main="'type1'" />
    <SectionType3 />
    <SectionType4 />
    <SectionType2 :section-version-from-main="'V2'" :card-type-from-main="'type2'" />
    <SectionForm />
    <!-- <CargoSectionPrototype v-for="section in arrSections" :key="section.id"
    :sections-data="section"
    /> -->
  </main>
</template>

<script>
import SectionTop from './SectionTop.vue';
import SectionType1 from './SectionType1.vue';
import SectionType2 from './SectionType2.vue';
import SectionType3 from './SectionType3.vue';
import SectionType4 from './SectionType4.vue';
import SectionForm from './SectionForm.vue';

// import CargoSectionPrototype from './CargoSectionPrototype.vue';

export default {
  name: 'CargoMain',
  components: {
    SectionTop,
    SectionType1,
    SectionType2,
    SectionType3,
    SectionType4,
    SectionForm,

    // CargoSectionPrototype,
  },
  data() {
    return {
      sectionType2V1: {
        title: '',
        pretitle: '',
        p: '',
      },
      sectionType2V2: {
        title: '',
        pretitle: '',
        p: '',
      },
    };
  },
};
</script>

<style>

</style>
