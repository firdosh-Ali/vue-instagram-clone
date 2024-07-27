<script setup>
import axios from 'axios';

const logout = async() => {
    try{
        const token = localStorage.getItem('authToken');

        if(!token){
            alert('You are not logged in.');
            return;
        }

        await axios.post(
            'http://127.0.0.1:8000/api/logout',
            {},
            {
                headers: {
                    Authorization: 'Bearer ${token}',
                },
            }
        );

        localStorage.removeItem('authToken');
        alert('logout successfull !');
    }catch(error){
        console.error('Logout error:',error);
        alert('Logout failed. Please try again.');
        
    }
};
</script>


<template>
    <button @click="logout" class="btn logout-btn">Logout</button>
</template>




<style scoped>
.btn{
    padding: 10px 15px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 500px;
}

.btn:hover{
    background-color: #c82333;
}
</style>
