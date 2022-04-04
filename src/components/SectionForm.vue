<!-- teamplate sezioni 'exellent in tranport' e 'get in touch'  -->
<template>
  <section class="" id="section2">
    <div class="container position-relative">
      <div class="row gx-5">
        <div class="col-8 pb-3">
          <small class="pretitle">WHO WE ARE</small>
          <h2>
            <span>
              Get In
            </span>
            <span class="bg_word">
              Touch
            </span>
          </h2>
        </div>
        <div class="col-8">
          <p>We will respond to your message as soon as possible.</p>
        </div>
        <!-- form -->
        <form class="row g-3">
          <div class="col-8">
            <div class="row">
              <div class="col-6">
                <label for="name" class="form-label w-100">
                  <input type="name" class="form-control" id="name"
                  placeholder="Name">
                </label>
              </div>
              <div class="col-6">
                <label for="email" class="form-label w-100">
                  <input type="email" class="form-control" id="email"
                  placeholder="Email">
                </label>
              </div>
              <div class="col-6">
                <label for="phone" class="form-label w-100">
                  <input type="phone" class="form-control" id="number"
                  placeholder="Phone">
                </label>
              </div>
              <div class="col-6">
                <label for="inputMoreInfo" class="form-label w-100">
                  <select id="inputMoreInfo" class="form-select">
                    <option selected>More Info</option>
                    <option>...</option>
                  </select>
                </label>
              </div>
              <div class="col-12">
                <label for="inputMessage" class="form-label w-100">
                  <textarea type="text" class="form-control w-100" id="inputMessage"
                  placeholder="Message" rows="12"></textarea>
                </label>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Send</button>
              </div>

            </div>
          </div>
        </form>
        <!-- right content -->
        <div class="col-4 position-absolute">
          <div class="right_content">
            <h3 class="pb-4">Example Inc</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. rupti cupiditate</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. rupti cupiditate</p>
            <div class="right_content_contacts pt-3 pb-3">
              <div class="phone">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                </div>
                <span>+1 (305) 1234-5678</span>
              </div>
              <div class="mail py-3">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                </div>
                <span>hello@example.com</span>
              </div>
              <div class="address">
                <div class="icon_box me-2">
                  <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
                </div>
                <span>Main Avanue, 987</span>
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
      font-size: 1.1rem;
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
      .icon_box {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background-color: aqua;
        border-radius: 20px;
        text-align: center;
        vertical-align: middle;
      }
      .icon {
        vertical-align: middle;
        // padding: .4em;
        // border-radius: 50%;
        // background-color: aqua;
        // color: beige;
      }
    }
    button {
      color: $primary;
    }
  }

</style>
