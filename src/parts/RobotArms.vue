<template>
<div>
   <h2>Arms</h2>
   The arms are how your robot will interact with the world.

   <div v-for="(arm, idx) in arms" :key="idx">
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
   </div>
</div>
</template>


<script>
//import parts from '../data/parts';

export default {
  name: 'RobotArms',
  data() {
    var parts = this.$store.state.parts;
    return { arms: parts.arms };
  },
};
</script>
