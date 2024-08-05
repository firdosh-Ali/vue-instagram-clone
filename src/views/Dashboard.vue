<template>

<div class="dashboard">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
  <br>

</template>


<script>

import {ref , onMounted} from 'vue';
import Sidebar from '../components/Sidebar.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  components: {
    Sidebar,
  },
  setup() {

const user = ref({});
const router = useRouter();


const fetchUserData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/user', { 
      headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
    });
    console.log(response.data)
    user.value = response.data
  } catch (error) {
    router.push('/login');
  }
};
  
  onMounted(() => {
      fetchUserData();
    
    });
      return {
      user,
      fetchUserData

    };
  },
}


</script>

<style scoped>

.dashboard {
  height: 100%;
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