<script setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const name = ref('');
const contact = ref('');
const email = ref('');
const password = ref();
const router = useRouter();

const signup = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name: name.value,
            contact: contact.value,
            email: email.value,
            password: password.value,
        });

if (response.status === 201){
    router.push('/login');
}

    }catch (error){
        console.log('Signup failed', error.response.data);
    }
};

</script>


<template>
<div class="form-container">
    <h1>Signup</h1>

    <form @submit.prevent="signup">

        <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" v-model="name" id="name" required placeholder="Enter your name" >
        </div>
<br>
        
        <div class="form-group">
            <label for="contact">Contact: </label>
            <input type="text" v-model="contact" id="contact" required placeholder="Enter your contact" >
        </div>
<br>

        <div class="form-group">
            <label for="email">Email: </label>
            <input type="email" v-model="email" id="email" required placeholder="Enter your email" >
        </div>
<br>

        <div class="form-group">
            <label for="password">Password: </label>
            <input type="password" v-model="password" id="password" required placeholder="Enter your password">
        </div>
<br>
         <button type="submit" class="btn">Sign Up</button>
    </form> 
</div>
</template>



<style scoped>

.form-container{
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px  rgba(0,0,0,0.1);
    background-color: #f9f9f9;
}

.form-group{
    margin-bottom:15px;
}

label {
    display : block;
    margin-bottom: 5px;
    font-weight:bold;
}

input[type="text"],
input[type="email"],
input[type="password"]{
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1.5px solid black;
}

.btn{
    width: 100px;
    height: 40px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: 1px solid black;
    border-radius: 8px;
    cursor:pointer;
    font-size: 17px;
}
.btn:hover {
    background-color: #0056b3;
}

.success-message{
    margin-top: 10px;
    color: #28a745;
    font-weight: bold;
}

.error-message{
margin-top: 10px;
color:#dc3545;
font-weight: bold;
}
</style>