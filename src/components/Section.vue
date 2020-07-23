<template>
  <div class="section">
    <div class="header">
      <p class="headline">{{ headline }}</p>
    </div>

    <ProductCell :key="order" :order="order" v-for="order in orders" />
  </div>
</template>

<script>
import ProductCell from "./ProductCell.vue";
export default {
  name: "Section",
  components: {
    ProductCell,
  },
  data() {
    return {
      order: {
        name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 3,
          type: "已取消",
        },
        date: "107/6/12",
      },
    };
  },
  props: {
    orders: Array,
    headline: {
      type: String,
      require: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  background-color: rgb(243, 243, 243);
}
.header{
  padding-left:30px;
  border: 1px solid #e6e6e6;
}
.headline {
  margin-top: 10px;
  font-size: 22px;
  border-left: 3px solid rgb(0, 159, 73);
  padding-left: 20px;
}

.green-block {
  display: inline-block;
  background-color: rgb(0, 159, 73);
  width: 10px;
  height: 25px;
  line-height: 40px;
  margin: 20px 0 0 20px;
}
</style>
