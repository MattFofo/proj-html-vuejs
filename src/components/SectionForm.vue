<!-- teamplate sezioni 'exellent in tranport' e 'get in touch'  -->
<template>
  <section class="" id="sectionForm">
    <div class="container position-relative">
      <div class="row gx-5">
        <div class="col-7 pb-1">
          <small class="pretitle">WHO WE ARE</small>
          <h2 class="title">
            <span>
              Get In
            </span>
            <span class="bg_word">
              Touch
            </span>
          </h2>
        </div>
        <div class="col-7 mb-fix">
          <p>We will respond to your message as soon as possible.</p>
        </div>
        <!-- form -->
        <div class="col-7 col-form">
          <form class="row">
            <div class="col-7 w-100">
              <div class="row gx-3 gy-1">
                <div class="col-6">
                  <label for="name" class="form-label w-100">
                    <input type="name" class="form-control" id="name"
                    placeholder="Name"
                    v-model="objFormSubmit.name">
                  </label>
                </div>
                <div class="col-6">
                  <label for="email" class="form-label w-100">
                    <input type="email" class="form-control" id="email"
                    placeholder="Email"
                    v-model="objFormSubmit.email">
                  </label>
                </div>
                <div class="col-6">
                  <label for="phone" class="form-label w-100">
                    <input type="phone" class="form-control" id="number"
                    placeholder="Phone"
                    v-model="objFormSubmit.phone">
                  </label>
                </div>
                <div class="col-6">
                  <label for="inputMoreInfo" class="form-label w-100">
                    <select id="inputMoreInfo" class="form-select"
                    v-model="objFormSubmit.moreInfo">
                      <option selected>More Info</option>
                      <option>...</option>
                    </select>
                  </label>
                </div>
                <div class="col-12">
                  <label for="inputMessage" class="form-label w-100">
                    <textarea type="text" class="form-control w-100" id="inputMessage"
                    placeholder="Message" rows="12" v-model="objFormSubmit.message"></textarea>
                  </label>
                </div>
              </div>
              <div class="col-1">
                <button @click.prevent='formSubmit()'
                type="submit" class="btn btn-primary form_button">
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
        <!-- right content -->
        <div class="col-4 position-absolute">
          <div class="right_content">
            <h3 class="pb-4">Example Inc.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, rupti cupiditate.</p>
            <p>Praseant sit amus sotare consectetur adipisicing elit rupti cupiditate.</p>
            <div class="right_content_contacts pt-3 pb-3">
              <div class="phone d-flex align-items-center mb-2">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                </div>
                <span class="contacts_info">+1 (305) 1234-5678</span>
              </div>
              <div class="mail py-3 d-flex align-items-center mb-2">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </div>
                <span class="contacts_info">hello@example.com</span>
              </div>
              <div class="address d-flex align-items-center mb-2">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                </div>
                <span class="contacts_info">Main Avenue, 987</span>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-primary">VIEW MAP</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionForm',
  data() {
    return {
      objFormSubmit: {
        name: '',
        email: '',
        phone: '',
        moreInfo: 'More Info',
        message: '',
      },
      arrFormData: [],
    };
  },
  methods: {
    formSubmit() {
      this.arrFormData.push(this.objFormSubmit);
      this.objFormSubmit = {
        name: '',
        email: '',
        phone: '',
        moreInfo: 'More Info',
        message: '',
      };
    },
  },
};
</script>

<style scoped lang="scss">
  @import '../assets/styles/partials/variables.scss';
    section {
    padding-bottom: $height--header;
    padding-top: $height--header;
    h4, h3 {
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: $color--text3;
    }
    .col-form {
      width: 64%;
    }
    form {
      height: 25%;
      #inputMessage {
        height: 180px;
      }
      .form_button {
        width: 50px;
      }
      input, textarea, select, option {
        background-color: $bg--form;
        border-color: $bg--form;
      }
      #inputMoreInfo {
        color: #6C6F75;;
        opacity: 1;
      }
    }
  }
  .col-4.position-absolute {
    top: 0;
    right: 0;
    .truck_img {
      background-color: $primary;
      padding: .4rem;
      width: 35%;
    }
    .right_content_contacts {
      .contacts_info {
        font-size: 1.1rem;
      }
      .icon_box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.4rem;
        height: 2.4rem;
        background-color: $primaryTransp;
        border-radius: 20px;
        text-align: center;
        vertical-align: middle;
      }
      .icon {
        vertical-align: middle;
        color: $primary;
        font-size: 1.1rem;
      }
      span {
        color: $primary;
      }
    }
    button {
      color: $primary;
    }
  }

</style>
