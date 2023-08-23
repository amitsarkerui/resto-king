<template>
  <div class="login-container">
    <img class="logo" src="../assets/logo/res-logo.png" alt="" />
    <h1>Login Please</h1>
    <form>
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
        placeholder="Password"
        required
      />
      <button @click="login" class="btn">Login</button>
    </form>
    <router-link to="/sign-up"
      ><button class="btn btn-line">
        Create Account (Sign Up)
      </button></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      console.log(this.email, this.password);
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("userInfo", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      } else {
        window.alert("Wrong Password or Email");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
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
