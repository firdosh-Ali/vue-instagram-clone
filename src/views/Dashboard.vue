<template>
    <div>
        <h1>Welcome to Dashboard !</h1>

        <button @click="logout">Logout</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>


<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter  } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const errorMessage = ref('');

    const logout = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('authToken');

        // Send a request to the logout API endpoint with the token in the headers
        await axios.post('http://127.0.0.1:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Remove the token from localStorage
        localStorage.removeItem('authToken');

        // Redirect to the login page
        router.push({ name: 'Login' });
      } catch (error) {
        console.error('Logout failed:', error);
      }
    };

    // Check authentication on component mount
    onMounted(() => {

      const token = localStorage.getItem('authToken');
      console.log(token);
      if (!token) {
        // If no token is found, redirect to the login page
        router.push('/login');
      }else{
        router.push('/dashboard');

      }
    });

    return {
      logout,
      errorMessage
    };
  }
};

</script>