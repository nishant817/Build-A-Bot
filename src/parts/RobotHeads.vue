<template>
<div>
   <h2>Heads</h2>
   Here are the heads
   
   <div v-for="(head, idx) in heads" :key="idx">
      <h4>{{head.title}}</h4>
      <div>{{head.description}}</div>
   </div>
</div>
</template>


<script>
import parts from '../data/parts';

export default {
   name: 'RobotHeads',
   data() {
      return { heads: parts.heads };
   },
}
</script>