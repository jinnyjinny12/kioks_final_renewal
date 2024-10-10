<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore';

// JSON 데이터를 직접 선언
const deCoffeeData = ref([
  { id: "1", name: "(디카페인) 아메리카노", price: "4,300", img: "https://i.ibb.co/qsrY4ks/jpg.png" },
  { id: "2", name: "(디카페인) 카페라떼", price: "4,800", img: "https://i.ibb.co/tzYmcdW/jpg.png" },
  { id: "3", name: "(디카페인) 카푸치노", price: "4,800", img: "https://i.ibb.co/brv61Mw/jpg.png" },
  { id: "4", name: "(디카페인) 바닐라라떼", price: "5,100", img: "https://i.ibb.co/sjdWG8Y/jpg.png" },
  { id: "5", name: "(디카페인) 더블 바닐라라떼", price: "5,500", img: "https://i.ibb.co/WVPJ5cc/jpg.png" },
  { id: "6", name: "(디카페인) 연유라떼", price: "5,800", img: "https://i.ibb.co/VBVzrSj/jpg.png" },
  { id: "7", name: "(디카페인) 카라멜 마끼아또", price: "5,800", img: "https://i.ibb.co/HnpLwBw/jpg.png" }
]);

// CartStore 사용
const cartStore = useCartStore();
function addToCart(deCoffee) {
    cartStore.addToCart(deCoffee);
}

</script>

<template>
  <main>
    <!-- 데이터를 반복하여 렌더링 -->
    <div v-for="deCoffee in deCoffeeData" :key="deCoffee.id" class="listBox">
      <div class="itemBox">
        <div> {{ deCoffee.name }} </div>
        <div> 가격 {{ deCoffee.price }} </div>
        <img :src="deCoffee.img" class="itemImage" alt="디카페인 커피 이미지" />
        <button @click="addToCart(deCoffee)">장바구니 추가</button>
        </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  height: auto;
  margin-top: 1.5%;
  margin-left: auto;
  margin-right: auto;
  border: 1px dotted;
}

.listBox {
  width: 30%;
  height: auto;
}

.itemBox {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

.itemImage {
  width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

label {
  margin-left: 1%;
}


a {
  margin-left: 10px;
  font-size: 20px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #5E7153;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3D4B33;
}
</style>
