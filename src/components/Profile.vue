<template>
  <div class="profile-container">
    <div class="profile-header" v-if="user">
      <div class="profile-picture">
      <img :src="user.profilePicture" alt="Profile Picture" v-if="user.profilePicture">
      </div>
      <div class="profile-info">
        <div class="profile-buttons">
        <input type="file" @change="uploadPhoto" ref="fileInput">
        <button @click="triggerFileInput">Upload Photo</button>
        <button @click="deletePhoto">Delete Photo</button>
      </div>
      <br>
      <br>
        <h2>{{ user.name }}{{ user.id }}</h2>
        <h3>{{ user.name }}</h3>
        <h4>{{ user.email }}</h4>
        <h5>{{ user.contact }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const user = ref({});
    const router = useRouter();
    const fileInput = ref(null);

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

    const uploadPhoto = async (event) => {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      formData.append('user_id', user.value.id );

try{
  await axios.post('http://127.0.0.1:8000/api/photos/upload', formData, {
    headers: {
      'content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
  });

  fetchUserData();
}catch (error){
  console.log('error uploading photo:', error);
}
    };

    const deletePhoto = async () => {
      try{
        console.log(user.value.profile_image)
        await axios.delete('http://127.0.0.1:8000/api/photos' + user.value.profilePictureId, {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
        });
        user.value.profilePicture = null; 
        fetchUserData();
      }catch (error){
        console.error('error deleting photos', error);
      }
    };

    const triggerFileInput = ()=> {
      fileInput.value.Click();
    };

    onMounted(() => {
      fetchUserData();
    
    });
      return {
      user,
      fileInput,
      uploadPhoto,
      deletePhoto,
      triggerFileInput,
    };
  },
    };

</script>


<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 30px auto;
  color: white;
}

.profile-header {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 100px;
}

.profile-picture {
  width: 165px;
  height: 165px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid #ddd;
  position: relative;
}

.profile-picture img {
  width: 135%;
  height: 135%;
  object-fit: cover;
}


.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-info h2 {
  font-size: 25px;
  font-weight: 500;
  margin: 0;
}

.profile-info h3 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 50px;
  margin-bottom: 4%;
}

.profile-info h4 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 0%;
  margin-bottom: 4%;
}
.profile-info h5 {
  font-size: 20px;
  font-weight: 400;
  margin-top: 0%;
}

.profile-info .profile-id {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

</style>