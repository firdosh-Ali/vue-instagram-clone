<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';


const form = reactive({
   email:'',
   password:'',
});

const errors = reactive({
    email: '',
    password: '',
});

const loginError = ref('');
const router = useRouter();

const validateForm = () => {
    let isValid = true;

    Object.keys(errors).forEach((key) => (errors[key]= ''));

    if(!form.email){
        errors.email = 'Email field is required';
    isValid = false;
    }
    
    if(!form.password){
        errors.password = 'Password field is required';
    isValid = false;
    }

    return isValid;
};


const login = async () => {
    loginError.value = '';

    if(!validateForm()){
        return;
    }

    try{
errors.email = '';
errors.password = '';
loginError.value = '';
        
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: form.email,
            password: form.password,
        });

        if(response.status=== 200){
            localStorage.setItem('authToken', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            router.push('/dashboard');
        }
        
    
    }catch(error){
if(error.response && error.response.status === 401) {
    loginError.value = 'Invalid email or password';
}else{
    loginError.value = 'An error occured, please try again.';
}
}
};
</script>

<template>
<div class="form-container">

    <h1>Login</h1>

    <form @submit.prevent="login">

        <div class="form-group">
            <label for="email">Email: </label>
            <input type="email" v-model="form.email" id="email" placeholder="Enter Your Email">
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>
<br>

        <div class="form-group">

            <label for="password">Password: </label>
            <input type="password" v-model="form.password" id="password" placeholder="Enter Your Password">
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>
<br>
         <button type="submit" class="btn">Log In</button>
<br>
<br>

<div v-if="loginError" class="error-message">
    {{ loginError }}
</div>
    </form>
</div>

<br>

<div class="form-container second">
    <h3>Dont have an account ?</h3>
    <h4 class="btn2"><router-link to="/signup" style="color: white;">Sign up</router-link></h4>
</div>
<br>
</template>



<style scoped>

.second{
    height: 50px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}

.error-message{
    color: red;
    font-size: 0.9rem;
    margin-top: 5px;
    display: block;
}
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
  width:66px;
  padding: 10px;
  background-color: #007bff;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  margin-right: 60px ;

}
.btn2:hover{
    background-color: #0056b3;
}

</style>