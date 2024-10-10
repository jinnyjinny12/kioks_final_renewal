<script setup>
import { ref, onMounted } from 'vue';
import { useCartStore } from '@/stores/cartStore'; // 장바구니 스토어 임포트

// JSON 데이터를 직접 선언
const teaAdeData = ref([
  {
    id: "1",
    name: "유자차",
    price: "4,500",
    img: "https://i.ibb.co/PgTQ2cS/jpg.png"
  },
  {
    id: "2",
    name: "페퍼민트 티",
    price: "4,000",
    img: "https://i.ibb.co/ZxxQcQP/image.png"
  },
  {
    id: "3",
    name: "보성녹차",
    price: "4,000",
    img: "https://i.ibb.co/WWcX8jx/image.png"
  },
  {
    id: "4",
    name: "캐모마일 블랜드티",
    price: "4,300",
    img: "https://i.ibb.co/dBtbrFb/jpg.png"
  },
  {
    id: "5",
    name: "자두에이드",
    price: "5,000",
    img: "https://i.ibb.co/Gs9XQVH/jpg.png"
  },
  {
    id: "6",
    name: "자몽에이드",
    price: "5,000",
    img: "https://i.ibb.co/NyBf2Ws/image.png"
  },
  {
    id: "7",
    name: "자몽허니블랙에이드",
    price: "5,300",
    img: "https://i.ibb.co/Fww39nZ/feat-jpg.png"
  },
  {
    id: "8",
    name: "청포도에이드",
    price: "5,000",
    img: "https://i.ibb.co/b2FZX2G/image.png"
  },
  {
    id: "9",
    name: "레몬에이드",
    price: "5,000",
    img: "https://i.ibb.co/BK4BWGP/image.png"
  }
]);

// CartStore 사용
const cartStore = useCartStore();

// 장바구니에 아이템 추가하는 함수
function addToCart(teaAde) {
  cartStore.addToCart(teaAde); // 스토어에 아이템 추가
}
</script>

<template>
    <main>
        <div v-for="teaAde in teaAdeData" :key="teaAde.id" class="listBox">
            <div class="itemBox">
                <div>{{ teaAde.name }}</div>
                <div>가격 {{ teaAde.price }}</div>
                <img :src="teaAde.img" class="itemImage" alt="티/에이드 이미지" />
                <button @click="addToCart(teaAde)">장바구니 추가</button>
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
