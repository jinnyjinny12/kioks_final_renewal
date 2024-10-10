<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // 장바구니 스토어 사용
import { useReMenuStore } from "@/stores/menu";

// JSON 데이터를 직접 선언
const reMenuData = ref([
  {
    id: "1",
    name: "딸기듬뿍라떼",
    price: "5,800",
    img: "https://i.ibb.co/MpgHptj/image.png"
  },
  {
    id: "2",
    name: "딸기 아이스크림",
    price: "5,000",
    img: "https://i.ibb.co/G50nb98/removebg.png"
  },
  {
    id: "3",
    name: "라벤더 카페 브레베",
    price: "5,500",
    img: "https://i.ibb.co/zVvbqxh/image.png"
  },
  {
    id: "4",
    name: "그린티라떼",
    price: "4,800",
    img: "https://i.ibb.co/Fhh5DMr/jpg.png"
  },
  {
    id: "5",
    name: "로얄밀크티",
    price: "4,800",
    img: "https://i.ibb.co/k9KSfvP/jpg.png"
  },
  {
    id: "6",
    name: "수박주스",
    price: "6,000",
    img: "https://i.ibb.co/pWsGQBf/image.png"
  },
  {
    id: "7",
    name: "토마토주스",
    price: "6,000",
    img: "https://i.ibb.co/dMCjkXf/image.png"
  },
  {
    id: "8",
    name: "레이어 가나슈 케이크",
    price: "5,000",
    img: "https://i.ibb.co/fXN8Gks/jpg.png"
  },
  {
    id: "9",
    name: "딸기초코 생크림 케이크",
    price: "5,500",
    img: "https://i.ibb.co/x8HP36Y/jpg.png"
  }
]);

// CartStore 사용
const cartStore = useCartStore();

// 장바구니에 아이템 추가하는 함수
function addToCart(reMenu) {
  cartStore.addToCart(reMenu); // 스토어에 아이템 추가
}

</script>

<template>
  <main>
    <!-- 데이터를 반복하여 렌더링 -->
    <div v-for="reMenu in reMenuData" :key="reMenu.id" class="listBox">
      <div class="itemBox">
        <div>{{ reMenu.name }}</div>
        <div>가격 {{ reMenu.price }}</div>
        <img :src="reMenu.img" class="itemImage" alt="추천 메뉴 이미지" />
        <button @click="addToCart(reMenu)">장바구니 추가</button>
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
