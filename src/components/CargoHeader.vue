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
                <font-awesome-icon icon="fa-solid fa-clock" class="pe-1" />
                Open Hours: Mon - Sat - 9:00 - 18:00
              </div>
          </div>
          <div class="col-6">
            <div class="contacts d-flex align-items-center justify-content-between">
              <div class="phone d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-phone" class="pe-2" />
                <span>+1 (305) 1234-5678</span>
              </div>
              <div class="mail d-flex align-items-center">
                <font-awesome-icon icon="fa-solid fa-envelope" class="pe-2" />
                <span>hello@example.com</span>
              </div>
              <div class="socials d-flex justify-content-between align-items-center">
                <font-awesome-icon icon="fa-brands fa-facebook-f" class="pe-2" />
                <font-awesome-icon icon="fa-brands fa-twitter" class="pe-2" />
                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="pe-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header_bot d-flex align-items-center">
      <div class="container h-100">
        <div class="row h-100">
          <!-- logo -->
          <div class="col-3">
            <div class="logo_box h-100">
              <span class="logo logo_highlighted">NEX </span>
              <span class="logo">GEN</span>
            </div>
          </div>
          <div class="col-9 h-100">
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
              <button @click="scroll" class="btn btn-primary ms-3">GET IN TOUCH</button>
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
          id: '6',
          text: '',
          icon: 'fa-user',
        },
      ],
    };
  },
  methods: {
    scroll() {
      const element = document.getElementById('sectionForm');
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
  @import '../assets/styles/partials/utility.scss';

  header {
    z-index: 100;
    color: $color--text1;
    button {
      flex-shrink: 0;
      padding-left: .8rem;
      padding-right: .8rem;
    }
    .header_top {
      background-color: $bg--header;
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
      color: $color--text2;
    }
    .socials {
      width: 20%;
    }
  }
</style>
