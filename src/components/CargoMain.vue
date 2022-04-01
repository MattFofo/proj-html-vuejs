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
  </main>
</template>

<script>
import SectionTop from './SectionTop.vue';

export default {
  name: 'CargoMain',
  components: {
    SectionTop,
  },
};
</script>

<style>

</style>
