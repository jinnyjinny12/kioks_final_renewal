<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // 장바구니 스토어 임포트

// JSON 데이터를 직접 선언
const dessertData = ref([
  {
    id: "1",
    name: "넛츠앤초코 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/4mdp36D/image.png"
  },
  {
    id: "2",
    name: "레드벨벳 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/R6CqR7c/image.png"
  },
  {
    id: "3",
    name: "오레오스모어 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/3ztjmYS/image.png"
  },
  {
    id: "4",
    name: "말차 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/1fZHxt8/image.png"
  },
  {
    id: "5",
    name: "황치즈 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/kqbnWC5/image.png"
  },
  {
    id: "6",
    name: "흑임자인절미 쿠키",
    price: "3,000",
    img: "https://i.ibb.co/pbp9yp2/image.png"
  },
  {
    id: "7",
    name: "녹차브라우니 마카롱",
    price: "2,500",
    img: "https://i.ibb.co/ZgXCkX2/image.png"
  },
  {
    id: "8",
    name: "딸기요거트 마카롱",
    price: "2,500",
    img: "https://i.ibb.co/25WJs89/image.png"
  },
  {
    id: "9",
    name: "블루베리 마카롱",
    price: "2,500",
    img: "https://i.ibb.co/4TnFxTR/jpg.png"
  },
  {
    id: "10",
    name: "바닐라 마카롱",
    price: "2,500",
    img: "https://i.ibb.co/X48TrRz/jpg.png"
  }
]);

// CartStore 사용
const cartStore = useCartStore();

// 장바구니에 아이템 추가하는 함수
function addToCart(dessert) {
  cartStore.addToCart(dessert); // 스토어에 아이템 추가
}
</script>

<template>
    <main>
        <div v-for="dessert in dessertData" :key="dessert.id" class="listBox">
            <div class="itemBox">
                <div>{{ dessert.name }}</div>
                <div>가격 {{ dessert.price }}</div>
                <img :src="dessert.img" class="itemImage" alt="디저트 이미지" />
                <button @click="addToCart(dessert)">장바구니 추가</button>
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
