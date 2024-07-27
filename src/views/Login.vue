<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: email.value,
            password: password.value,
        });

        if(response.status=== 200){
            localStorage.setItem('authToken', response.data.token);
            router.push('/dashboard');
        }
        
    
    }catch(error){
        console.error('Login failed:', error.response.data);
    }
};
</script>


<template>
<div class="form-container">

    <h1>Login</h1>

    <form @submit.prevent="login">

        <div class="form-group">
            <label for="email">Email: </label>
            <input type="email" v-model="email" id="email" required placeholder="Enter Your Email">
        </div>
<br>

        <div class="form-group">

            <label for="password">Pasword: </label>
            <input type="password" v-model="password" id="password" required placeholder="Enter Your Password">
        </div>
<br>
         <button type="submit" class="btn">Log In</button>

    </form>
</div>

<br>

<div class="form-container">
    <h3>Dont have an account ?</h3>
    <h4 class="btn2"><router-link to="/signup" style="color: white;">Sign up</router-link></h4>

</div>
<br>
</template>



<style scoped>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius:10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    background-color: #f9f9f9;
}
.form-group{
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
input[type="email"],
input[type="password"]{
    width:90%;
    padding: 10px;
    border: 1.5px solid black;
    border-radius: 6px;
    box-sizing: border-box;
}
.btn {
  width: 100px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
}
.btn:hover{
    background-color: #0056b3;
}
.btn2{
    width: 60px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  margin-left: 240px;

}
.btn2:hover{
    background-color: #0056b3;
}

</style>