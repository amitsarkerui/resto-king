<template>
  <div class="signup-container">
    <img class="logo" src="../assets/logo/res-logo.png" alt="" />
    <h1>Sign Up</h1>
    <form>
      <input
        v-model="name"
        class="input-from"
        type="text"
        placeholder="Name"
        required
      />
      <input
        v-model="email"
        class="input-from"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="password"
        class="input-from"
        type="password"
        placeholder="Name"
        required
      />
      <button @click="createAccount" class="btn">Create</button>
    </form>

    <router-link to="/login"
      ><button class="btn btn-line">
        Already have account ? (Login)
      </button></router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async createAccount(e) {
      e.preventDefault();
      try {
        let result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          name: this.name,
          password: this.password,
        });
        console.log(result);
        if (result.status == 201) {
          localStorage.setItem("userInfo", JSON.stringify(result.data));
          this.$router.push({ name: "HomePage" });
        }
      } catch (error) {
        console.error("Axios Error:", error);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style scoped>
.signup-container {
  margin-top: 150px;
}
.logo {
  height: 200px;
}
.input-from {
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #cacdd1;
  display: block;
  margin: 0 auto;
  width: 350px;
  margin-bottom: 15px;
}
.btn {
  width: 364px;
  padding: 10px 10px;
  background-color: #2a100e;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.btn-line {
  margin-top: 10px;
  background-color: #fff3e2;
  color: #2a100e;
}
</style>
