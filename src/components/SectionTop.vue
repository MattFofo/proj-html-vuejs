<template>
<!-- prima sezione subito sotto l'header -->
  <section></section>
</template>

<script>
export default {
  name: 'SectionTop',
};
</script>

<style scoped lang="scss">
  section {
    position: relative;
    top: -104px; //sostituire con -altezza header
    left: 0;
    right: 0;
    height: 850px;
    background-image: linear-gradient(rgba(34, 34, 34, 0.5), rgba(26, 24, 24, 0.5)),url(http://localhost:8080/img/bg-9.16d4a518.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
