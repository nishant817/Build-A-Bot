<template>
<div>
   <h2>Bases</h2>
   Here are the bases

   <div v-for="(base, idx) in bases" :key="idx">
      <h4>{{base.title}}</h4>
      <div>{{base.description}}</div>
   </div>
</div>
</template>


<script>
//import parts from '../data/parts';

export default {
  name: 'RobotBases',
  data() {
    var parts = this.$store.state.parts;
    return { bases: parts.bases };
  },
};
</script>
