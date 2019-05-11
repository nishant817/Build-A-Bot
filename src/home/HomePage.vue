<template>
  <div class="home">
    <div>
      <!-- <RobotBuilder/> -->
      <img class="robot" src='..\assets\robot-home.png' />
    </div>
    <div class="getStarted">
      <router-link to="/build">Get Started</router-link>
      Building your first Robot!
    </div>
    
  </div>
</template>

<script>
import RobotBuilder from '../build/RobotBuilder.vue';
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  components: {
    RobotBuilder,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
