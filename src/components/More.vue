<template>
  <div class="more">
    <div class="content">
      <router-view></router-view>
    </div>
  <br>
  <img src="https://png.pngtree.com/thumb_back/fh260/background/20220104/pngtree-thank-you-appreciation-greeting-black-photo-image_4807988.jpg" alt="image">
  <div>
        <button @click="logout">Logout</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>
  
  <script>
  import { ref, onMounted, defineComponent } from 'vue';
  import axios from 'axios';
  import { useRouter  } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const errorMessage = ref('');
  
      const logout = async () => {
        try {
  
          const token = localStorage.getItem('authToken');
  
  
          await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
       
          localStorage.removeItem('authToken');
  
          router.push({ name: 'Login' });
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };
  
      return {
        logout,
        errorMessage,
      };
    },
  
    setup() {
      const router = useRouter();
      const errorMessage = ref('');
  
      const logout = async () => {
        try {
  
          const token = localStorage.getItem('authToken');
  
  
          await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
       
          localStorage.removeItem('authToken');
  
          router.push({ name: 'Login' });
        } catch (error) {
          console.error('Logout failed:', error);
        }
      };
  
      return {
        logout,
        errorMessage,
      };
    }
  };
  
  </script>

<style scoped>

img{
  width: 700px;
  height: 500px;
  margin-right: 200px;
}


button{
  width: 120px;
  padding: 10px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
  margin-bottom:50px;
  margin-left: 50px;

  position: absolute;
  left: 50%;
  transform: translateX(400%);
}

.more {
  height: 1000px;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;


}
.content {
  flex: 1;
  padding: 20px;
}
</style>
  

  