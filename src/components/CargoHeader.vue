<template>
  <!--
header diviso in due parti: -top con i contatti e orari di apertura e navbar con bg trasparente
-->
  <header class="position-relative">
    <div class="header_top">
      <div class="container">
        <div class="row">
          <div class="col-6">
              <div class="open_hours">
                <font-awesome-icon icon="fa-solid fa-clock" />
                Open Hours: Mon - Sat - 9:00 - 18:00
              </div>
          </div>
          <div class="col-6">
            <div class="contacts d-flex align-items-center justify-content-between">
              <div class="phone d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-phone" />
                +1 (305) 1234-5678
              </div>
              <div class="mail d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-envelope" />
                hello@example.com
              </div>
              <div class="socials d-flex justify-content-between align-items-center">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header_bot d-flex align-items-center">
      <div class="container">
        <div class="row">
          <!-- logo -->
          <div class="col-3">
            <div class="logo_box">
              <span class="logo logo_highlighted">NEX </span>
              <span>GEN</span>
            </div>
            <!-- <img src="../assets/img/logo-5.png" alt=""> -->
          </div>
          <div class="col-9">
            <!-- navbar -->
            <nav class="d-flex justify-content-end align-items-center h-100">
              <ul class="d-flex align-items-center h-100">
                <!-- link creati dinamicamente -->
                <li v-for="link in arrLinksNav" :key="link.id + link.text"
                class="px-3 h-100">
                  <a class="d-flex align-items-center h-100"
                  :href="`#section${link.id}`">
                  {{ link.text }}
                  <!-- link profile -->
                  <font-awesome-icon v-if="link.icon != null" :icon="`fa-regular ${link.icon}`" />
                  </a>
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
          icon: null,
        },
        {
          id: '2',
          text: 'ABOUT',
          icon: null,
        },
        {
          id: '3',
          text: 'SERVICES',
          icon: null,
        },
        {
          id: '4',
          text: 'PROCESS',
          icon: null,
        },
        {
          id: '5',
          text: 'TESTIMONIAL',
          icon: null,
        },
        {
          id: '5',
          text: '',
          icon: 'fa-user',
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
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  header {
    z-index: 100;
    button {
      flex-shrink: 0;
    }
    .header_top {
      background-color: darkgray;
      height: $height--top_header;
      display: flex;
      align-items: center;
    }
    .header_bot {
      height: $height--bot_header;
      ul {
        list-style: none;
        margin: 0;
      }
    }
    a {
      text-decoration: none;
      color: white;
    }
    .socials {
      width: 20%;
    }
  }
  .logo_box {
    display: flex;
    align-items: center;
    color: white;
    font-weight: 600;
  }
  .logo_highlighted {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: .5em;
    padding-left: 1.5em;
    background-color: rgba(0, 255, 255, .2);
    margin-right: .2em;
  }
</style>
