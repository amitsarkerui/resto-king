<template>
  <RouterView></RouterView>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;
}
body {
  font-family: "PT Sans", Arial, Verdana;
  background-color: #eee;
}
.container {
  max-width: 1170px;
  margin: 0 auto;
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
.btn-update {
  width: 100%;
  padding: 10px 10px;
  background-color: #2c3e50;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
