<template>
  <div id="app" class="container">
    <Section headline="進行中" :orders="process_orders"/>
    <Section headline="已完成" :orders="complete_orders"/>
  </div>
</template>

<script>
import Section from "./components/Section.vue";

export default {
  name: "App",
  components: {
    Section,
  },
  data(){
    return {

    }
  },
  computed:{
    process_orders(){
      return this.$store.getters.orders.filter(order => order.status.code < 3).sort(function(a, b){return b.date>a.date});
    },
    complete_orders(){
      return this.$store.getters.orders.filter(order => order.status.code > 2);
    }
  },
  mounted() {
    this.$store.dispatch('GET_ORDERS')
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
