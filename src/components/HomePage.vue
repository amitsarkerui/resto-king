<template>
  <div>
    <Navbar></Navbar>
    <div class="cards container">
      <div
        class="card"
        style="display: flex; flex-direction: column"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <h4>{{ restaurant.name }}</h4>
        <p>Address : {{ restaurant.address }}</p>
        <p>Call : {{ restaurant.phone }}</p>
        <p style="flex-grow: 1"></p>
        <router-link :to="'/Update-Restaurant/' + restaurant.id"
          ><button style="margin-top: 20px" class="btn-update">
            Update
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      restaurants: [],
    };
  },
  components: {
    Navbar,
  },
  async mounted() {
    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get("http://localhost:3000/restaurants");
    // console.log(result);
    this.restaurants = result.data;
    console.log("res", this.restaurants);
  },
};
</script>

<style scoped>
.cards {
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.card {
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 10px;
}
</style>
