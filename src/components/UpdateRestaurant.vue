<template>
  <div>
    <Navbar></Navbar>
    <h1>Update Restaurant</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
// import axios from "axios";
export default {
  name: "UpdateRestaurant",
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped></style>
