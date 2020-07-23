<template>
  <div class="row pt-3 pb-3">
    <div class="col-3 d-flex justify-content-center align-items-center">
      <img :src="order.logo" alt="" width="70px">
    </div>
    <div class="col-7 d-flex justify-content-start align-items-start">
      <div class="product">
        <div class="row">
          <div class="state mr-3" :class="isComplete ? '' : 'green'">{{order.status.type}}</div>
          <div class="eta" v-if="order.status.code < 3">預計出貨:{{order.date}}</div>
        </div>
        <div class="row">
          <div class="description">{{order.name}}</div>
        </div>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-center align-items-center">></div>
  </div>
</template>

<script>
export default {
  name: "ProductCell",
  // data() {
  //   return {
  //     state: "處理中",
  //     eta: "107/10/10",
  //     product_name: "BLABLABAL",
  //   };
  // },
  computed:{
    isComplete(){
      if(this.order.status.code<3) {
        return false
      }
      return true
    }
  },
  props:{
    order:Object,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumbnail {
  width: 60px;
  height: 60px;
}
.thumbnail.green {
  background-color: rgb(0, 159, 73);
}

.thumbnail > p {
  position: absolute;
  color: white;
  margin: 20px 5px;
  font-size: 12px;
}

.state {
  font-weight: 600;
}

.state.green{
  color:rgb(0, 159, 73);
}

</style>
