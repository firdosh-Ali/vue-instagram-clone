<script setup>
import {ref, reactive, computed} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const form = reactive({

 name : '',
 contact : '',
 email : '',
 password : '',
});

const errors = reactive({
  name : '',
  contact : '',
  email : '',
  password : ''
});

const router = useRouter();
const signupSuccess = ref('');
const signupError = ref('');

const validateForm = () => {
    let isValid = true;

    Object.keys(errors).forEach((key) => (errors[key]= ''));

    if(!form.name){
        errors.name = 'Name field is required.';
        isValid= false;
    }

    if(!form.contact){
        errors.contact = 'Contact field required';
        isValid = false;
    }

    if(!form.email){
        errors.email= 'Email field is required';
        isValid = false;
    }else{
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(form.email)) {
        errors.email = 'Valid email is required.';
        isValid = false;
      }
    }
     
    if (!form.password) {
        errors.password = 'Password is required.';
        isValid = false;
      }
      
      return isValid;
};

const signup = async () => {

        signupError.value = '';
        signupSuccess.value = '';

        if(!validateForm()){
            return;
        }

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name: form.name,
            contact: form.contact,
            email: form.email,
            password: form.password,
        });

  signupSuccess.value = response.data.message;

  setTimeout(() => {
    router.push('/login');
  },1000)

    }catch (error){
       if(error.response && error.response.status === 422){
        const responseErrors = error.response.data.errors;
        Object.keys(responseErrors).forEach((key) => {
            errors[key] = responseErrors[key][0];
        });
       }else{
        signupError.value ="An error occured. Please try again later";
       }
    }
};

</script>


<template>
<div class="form-container">
    <h1>Signup</h1>

    <form @submit.prevent="signup">

        <div class="form-group">
            <label for="name">Name: </label>
            <input type="text" v-model="form.name" id="name" placeholder="Enter your name" >
            <span v-if="errors.name">{{ errors.name }}</span>
        </div>
<br>
        
        <div class="form-group">
            <label for="contact">Contact: </label>
            <input type="text" v-model="form.contact" id="contact" placeholder="Enter your contact" >
            <span v-if="errors.contact">{{ errors.contact }}</span>
        </div>
<br>

        <div class="form-group">
            <label for="email">Email: </label>
            <input type="text" v-model="form.email" id="email" placeholder="Enter your email" >
            <span v-if="errors.email">{{ errors.email }}</span>
        </div>
<br>

        <div class="form-group">
            <label for="password">Password: </label>
            <input type="password" v-model="form.password" id="password" placeholder="Enter your password">
            <span v-if="errors.password">{{ errors.password }}</span>
        </div>
<br>
         <button type="submit" class="btn">Sign Up</button>
         <br>
         <br>

         <div v-if="signupError" class="error-message">
        {{ signupError }}
      </div>
      <div v-if="signupSuccess" class="success-message">
        {{ signupSuccess }}
      </div>

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

span {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
    display: block;
}
</style>