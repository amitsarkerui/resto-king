<template>
  <div>
    <Navbar></Navbar>
    <h1>Update Restaurant</h1>
    <form>
      <input v-model="name" class="input-from" type="text" />
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
      <button @click="updateRestaurant" class="btn">Update Restaurant</button>
    </form>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
export default {
  name: "UpdateRestaurant",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
    };
  },
  methods: {
    async updateRestaurant(e) {
      e.preventDefault();
      const result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        {
          name: this.name,
          address: this.address,
          phone: this.phone,
        }
      );
      console.log(result);
      if (result.status == 200) {
        // window.alert("Updated Successfully");
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  components: {
    Navbar,
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      `http://localhost:3000/restaurants/${this.$route.params.id}`
    );
    // console.log(result);
    this.name = result.data.name;
    this.address = result.data.address;
    this.phone = result.data.phone;
  },
};
</script>

<style scoped></style>
