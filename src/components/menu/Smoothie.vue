<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // 장바구니 스토어 임포트

// JSON 데이터를 직접 선언
const smoothieData = ref([
  {
    id: "1",
    name: "오리진 쉐이크",
    price: "5,500",
    img: "https://i.ibb.co/HnpLwBw/jpg.png"
  },
  {
    id: "2",
    name: "딸기 쉐이크",
    price: "5,500",
    img: "https://i.ibb.co/yQV5C01/image.png"
  },
  {
    id: "3",
    name: "초코쿠키 쉐이크",
    price: "5,500",
    img: "https://i.ibb.co/yQV5C01/image.png"
  },
  {
    id: "4",
    name: "딸기쿠키 쉐이크",
    price: "5,800",
    img: "https://i.ibb.co/Sy8KYkr/removebg.png"
  }
]);

// CartStore 사용
const cartStore = useCartStore();

// 장바구니에 아이템 추가하는 함수
function addToCart(smoothie) {
  cartStore.addToCart(smoothie); // 스토어에 아이템 추가
}
</script>

<template>
  <main>
    <!-- 데이터를 반복하여 렌더링 -->
    <div v-for="smoothie in smoothieData" :key="smoothie.id" class="listBox">
      <div class="itemBox">
        <div>{{ smoothie.name }}</div>
        <div>가격 {{ smoothie.price }}</div>
        <img :src="smoothie.img" class="itemImage" alt="스무디 이미지" />
        <button @click="addToCart(smoothie)">장바구니 추가</button>
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
