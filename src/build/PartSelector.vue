<template>
<div class="part">
  <!-- Use click event -->
  <!-- <img :src="selectedPart.src" @click="showPartInfo()" title="head"/> -->

  <!-- Use Router-Link instead of click event -->
  <router-link :to="{name: 'Parts', params: {id: this.selectedPart.id, partType: this.selectedPart.type } }">
    <img :src="selectedPart.src" @click="showPartInfo()" title="head"/>
  </router-link>
  <button v-on:click="selectPreviousPart()" class="prev-selector">&#9668;</button>
  <button v-on:click="selectNextPart()" class="next-selector">&#9658;</button>
  <span v-pin2="{top: '5px', right: rightSide+'px', backgroundColor: 'red', position: 'absolute', color: 'blue'}"
        @click="rightSide = rightSide + 2; console.log(rightSide);"
        v-show="selectedPart.onSale">Sale!</span>
  <span v-pin1:position.bottom.right class="sale">{{selectedPart.cost | currency('$')}}</span>
</div>
</template>


<script>
import pin1Directive from '../shared/pin1-directive.js';

function getNextValidIndex(index, length) {
  const nextIndex = index + 1;
  return nextIndex > length - 1 ? 0 : nextIndex;
}

function getPrevValidIndex(index, length) {
  const prevIndex = index - 1;
  return prevIndex < 0 ? length - 1 : prevIndex;
}

export default {
  name: 'PartSelector',

  props: [
    'parts',
  ],

  data() {
    return {
      selectedPartIndex: 0,
      rightSide: 5,
    };
  },

  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },

  methods: {
    selectPreviousPart() {
      this.selectedPartIndex = getPrevValidIndex(this.selectedPartIndex, this.parts.length);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(this.selectedPartIndex, this.parts.length);
    },
    showPartInfo() {
      // this.$router.push('/parts');
      this.$router.push({ name: 'Parts', params: { id: this.selectedPart.id, partType: this.selectedPart.type } });
    },
  },

  directives: {
    pin1: pin1Directive,
  },
};
</script>


<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
  cursor: pointer;
}
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale {

  padding: 3px;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right:30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
</style>
