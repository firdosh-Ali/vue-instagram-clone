<template>
    <div class="sidebar">
 
      <img style="height: 40px;"  src="https://thumbs.dreamstime.com/b/print-204012277.jpg" alt="Company Logo" class="logo">
      <br>
         
       <ul>   

        <li @click="navigateTo('home')">
          <i class=" fas fa-home "></i>
          Home
        </li>
        <li @click="navigateTo('search')">
          <i class="fas fa-search"></i>
          Search
        </li>
        <li @click="navigateTo('explore')">
          <i class="fas fa-compass"></i>
          Explore
        </li>
        <li @click="navigateTo('reels')">
          <i class="fas fa-film"></i>
          Reels
        </li>
        <li @click="navigateTo('messages')">
          <i class="fas fa-comment"></i>
          Messages
        </li>
        <li @click="navigateTo('notifications')">
          <i class="fas fa-bell"></i>
          Notifications
        </li>
        <li @click="navigateTo('create')">
          <i class="fas fa-plus"></i>
          Create
        </li>
        <li @click="navigateTo('profile')">
          <i class="fas fa-plus"></i>
          Profile
        </li>

        <li @click="navigateTo('more')">
          <i class="fas fa-ellipsis-h"></i>
          More
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';

  
  export default {
    setup() {
      const router = useRouter();
  
      const navigateTo = (route) => {
        router.push({ name: route });
      };
  
      return { navigateTo };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    width: 200px;
    height: 100%;
    color: white;
    background-color: black;
    padding: 30px;
    border: 1.5px solid white
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  i{
    height: 26px;
    margin-right: 8px;
  }
  li {
    cursor: pointer;
    margin-bottom: 33px;
  }
  li:hover {
    color: #ddd;
   background-color:  #444;
   border-radius: 5px;
  }
  </style>
  