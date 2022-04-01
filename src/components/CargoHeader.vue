<template>
  <!--
header diviso in due parti: -top con i contatti e orari di apertura e navbar con bg trasparente
-->
  <header class="position-relative">
    <div class="header_top">
      <div class="container">
        <div class="row">
          <div class="col-6">
              <div class="open_hours">open hours</div>
          </div>
          <div class="col-6">
            <div class="contacts">telefono email socials</div>
          </div>
        </div>
      </div>
    </div>
    <div class="header_bot d-flex align-items-center">
      <div class="container">
        <div class="row">
          <!-- logo -->
          <div class="col-3">
            <img src="../assets/img/logo-5.png" alt="">
          </div>
          <div class="col-9">
            <!-- navbar -->
            <nav class="d-flex justify-content-end align-items-center h-100">
              <ul class="d-flex align-items-center h-100">
                <!-- link creati dinamicamente -->
                <li v-for="link in arrLinksNav" :key="link.id + link.text"
                class="px-3 h-100">
                  <a class="d-flex align-items-center h-100" href="">{{ link.text }}</a>
                </li>
                <!-- link profile -->
                <li class="h-100 px-3">
                  <a class="d-flex align-items-center h-100" href="">Profile</a>
                </li>
              </ul>
              <button class="btn btn-primary ms-3">GET IN TOUCH</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CargoHeader',
  data() {
    return {
      arrLinksNav: [
        {
          id: '1',
          text: 'HOME',
        },
        {
          id: '2',
          text: 'ABOUT',
        },
        {
          id: '3',
          text: 'SERVICES',
        },
        {
          id: '4',
          text: 'PROCESS',
        },
        {
          id: '5',
          text: 'TESTIMONIAL',
        },
      ],
    };
  },
  methods: {
    // createObjLink(number, string) {
    //   const ObjLinkNav = { id: '', text: '' };
    //   ObjLinkNav.id = number;
    //   ObjLinkNav.text = string;
    //   return ObjLinkNav;
    // },
  },
};
</script>

<style scoped lang="scss">
  header {
    z-index: 100;
    .container {
      width: 1100px;
    }
    .header_top {
      background-color: darkgray;
    }
    .header_bot {
      height: 5rem;
      ul {
        list-style: none;
        margin: 0;
      }
    }
  }
</style>
