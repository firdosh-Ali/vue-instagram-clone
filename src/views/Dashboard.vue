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


import Sidebar from '../components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  };

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