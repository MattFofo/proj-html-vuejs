<template>
<!-- parte principale pagina con dentro le sezioni.
Conterrà anche i dati per creare i due tipi principali di sezioni dinamicamente e le cards-->
  <main>
    <!-- prima sezione in alto -->
    <!-- sezione tipo 1 -->
    <!-- sezione tipo 2 -->
    <!-- sezione tipo da definire -->
    <!-- sezione tipo da definire -->
    <!-- sezione tipo 2 -->
    <!-- sezione tipo 1 -->
    <SectionTop />
    <SectionType1 />
    <SectionType2 :section-version-from-main="'V1'" :card-type-from-main="'type1'" />
    <SectionType3 />
    <SectionType4 />
    <SectionType2 :section-version-from-main="'V2'" :card-type-from-main="'type2'" />

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

// import CargoSectionPrototype from './CargoSectionPrototype.vue';

export default {
  name: 'CargoMain',
  components: {
    SectionTop,
    SectionType1,
    SectionType2,
    SectionType3,
    SectionType4,

    // CargoSectionPrototype,
  },
  data() {
    return {
      arrSections: [
        {
          id: 1,
          sectionTop: true,
          sectionType: 'type1',
          text: {
            title: 'Excellence in Transport',
            pretitle: 'WHO WE ARE',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: '',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 2,
          sectionTop: false,
          sectionType: 'type2',
          text: {
            title: 'Main Services',
            pretitle: 'ROAD TRANPORT',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 3,
          sectionTop: false,
          sectionType: 'type1',
          text: {
            title: 'Logistic Procedures',
            pretitle: 'ROAD TRANPORT ',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 4,
          sectionTop: false,
          sectionType: 'type1',
          text: {
            title: 'Logistic Procedures',
            pretitle: 'ROAD TRANPORT ',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 5,
          sectionTop: false,
          sectionType: 'type1',
          text: {
            title: 'Logistic Procedures',
            pretitle: 'ROAD TRANPORT ',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 6,
          sectionTop: false,
          sectionType: 'type1',
          text: {
            title: 'Logistic Procedures',
            pretitle: 'ROAD TRANPORT ',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
        {
          id: 7,
          sectionTop: false,
          sectionType: 'type1',
          text: {
            title: 'Logistic Procedures',
            pretitle: 'ROAD TRANPORT ',
            p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
            p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum magni nihil tempore dolorem culpa rem veritatis.',
          },
          bg: {
            bgColor: 'bg-white',
            bgImage: '',
          },
          layout: {

          },
        },
      ],
    };
  },
};
</script>

<style>

</style>
