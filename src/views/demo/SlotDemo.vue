<template>
  <HelloWorld :plist="myList">
    <template v-slot:title> new title </template>
  </HelloWorld>
</template>

<script>
import HelloWorld from '@/views/demo/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      myList: [{name:'Jack',age:22}]
    };
  },
};
</script>

<style>
.box {
  color: blue;
}
</style>
