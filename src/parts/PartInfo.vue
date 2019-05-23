<template>
<div>
   <h1>{{ part.title }}</h1>
   <div>
      {{ part.description }}
   </div>
</div>
</template>


<script>
import parts from '../data/parts';

export default {
   name: 'PartInfo',

   //props: ['partType', 'id'],
   //// props with validation
   props: {
      partType: { type: String },
      id: { 
         type: [Number, String], //// String has been added because router param is passed as string
         validator(value) {
            return Number.isInteger(Number(value));
         } 
      }
   },

   computed: {
      part() {
         //// get from route parameters
         // const partType = this.$route.params.partType;
         // const id = this.$route.params.id;

         //// get from props
         const { partType, id } = this; // use decoupling
         // const partType = this.partType;
         // const id = this.id;

         return parts[partType].find(p => p.id === +id);
      }
   },   
}
</script>

