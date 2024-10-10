<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // Cart Store 임포트

// JSON 데이터를 직접 선언
const coffeeData = ref([
  {
    id: "1",
    name: "아메리카노",
    price: "4,000",
    img: "https://i.ibb.co/cTvwS49/jpg.png"
  },
  {
    id: "2",
    name: "카페라떼",
    price: "4,500",
    img: "https://i.ibb.co/tzYmcdW/jpg.png"
  },
  {
    id: "3",
    name: "카푸치노",
    price: "4,500",
    img: "https://i.ibb.co/brv61Mw/jpg.png"
  },
  {
    id: "4",
    name: "바닐라라떼",
    price: "4,800",
    img: "https://i.ibb.co/sjdWG8Y/jpg.png"
  },
  {
    id: "5",
    name: "더블 바닐라라떼",
    price: "5,200",
    img: "https://i.ibb.co/WVPJ5cc/jpg.png"
  },
  {
    id: "6",
    name: "연유라떼",
    price: "5,500",
    img: "https://i.ibb.co/VBVzrSj/jpg.png"
  },
  {
    id: "7",
    name: "카라멜 마끼아또",
    price: "5,500",
    img: "https://i.ibb.co/HnpLwBw/jpg.png"
  },
  {
    id: "8",
    name: "콜드브루",
    price: "5,500",
    img: "https://i.ibb.co/qsrY4ks/jpg.png"
  },
  {
    id: "9",
    name: "콜드브루 돌체라떼",
    price: "5,800",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Richard_Stallman_at_LibrePlanet_2019.jpg/220px-Richard_Stallman_at_LibrePlanet_2019.jpg"
  }
]);

// CartStore 사용
const cartStore = useCartStore();

// 장바구니에 아이템 추가하는 함수
function addToCart(coffee) {
  cartStore.addToCart(coffee); // 스토어에 아이템 추가
}
</script>

<template>
  <main>
    
    <div v-for="coffee in coffeeData" :key="coffee.id" class="listBox">
      <div class="itemBox">
        <div>{{ coffee.name }}</div>
        <div>가격 {{ coffee.price }}</div>
        <img :src="coffee.img" class="itemImage" alt="커피 이미지" />
        <button @click="addToCart(coffee)">장바구니 추가</button>
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
