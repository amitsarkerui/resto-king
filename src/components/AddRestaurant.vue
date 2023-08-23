<template>
  <div>
    <Navbar></Navbar>
    <h1>Add Restaurant</h1>
    <form>
      <input v-model="name" class="input-from" placeholder="Name" type="text" />
      <input
        v-model="address"
        class="input-from"
        placeholder="Address"
        type="text"
      />
      <input
        v-model="phone"
        class="input-from"
        placeholder="Phone"
        type="text"
      />
      <button @click="addRestaurant" class="btn">Add Restaurant</button>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
export default {
  name: "AddRestaurant",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async addRestaurant(e) {
      e.preventDefault();
      // console.log(this.name, this.address, this.phone);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.name,
        address: this.address,
        phone: this.phone,
      });
      // console.log("After adding", result);
      if (result.status === 201) {
        this.$router.push({ name: "HomePage" });
      }
    },
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
