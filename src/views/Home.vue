<template>

<nav class="navbar">
<img src="https://thumbs.dreamstime.com/b/instagram-141049465.jpg" alt="Instagram Logo" class="logo" />
<img src="https://static.vecteezy.com/system/resources/previews/006/991/723/non_2x/arabic-calligraphy-free-vector.jpg" alt="Islam Logo" class="logo" />
<ul class="navbar-links">

    <div class="login">
    <li><router-link to="/login" style="color: white;">Log in</router-link></li>
    </div>
    <div class="signup">
    <li><router-link to="/signup" style="color: white;">Sign up</router-link></li>
    </div>
</ul>
</nav>
<br>

<Login />

</template>

<script setup>
import Login from '../views/Login.vue';
</script>


<style scoped>

.signup{
    width: 80px;
    padding: 10px;
    background-color: #007bff;
    border: 1.5px solid black;
    border-radius: 10px;
    cursor:pointer;
    font-size: 25px;
}
.signup:hover{
    background-color: #0056b3;
}

.login{
    width: 80px;
  padding: 10px;
  background-color: #007bff;
  border: 1.5px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
}
.login:hover{
    background-color: #0056b3;
}

img {
    height: 100px;
}
.navbar{
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #fafafa;
  border-bottom: 1.5px solid #dbdbdb;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.navbar-links a {
  text-decoration: none;
  color: #262626;
  font-weight: 500;
}

</style>