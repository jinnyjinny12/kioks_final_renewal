<script setup>
import { useCartStore } from '@/stores/cartStore';

const CartStore = useCartStore();

</script>

<template>
    <div class="cart">

        <div v-if="CartStore.cartItems.length === 0">
        
            장바구니가 비었습니다.
        </div>

        <div v-else>
            <div v-for="item in CartStore.getCartItems()" :key="item.id" class="listBox">
                <div class="itemBox">
                <div>{{ item.name }}</div>
                <div>가격: {{ item.price }}</div>
                <img :src="item.img" class="itemImage" alt="장바구니 항목 이미지" />
                </div>

            </div>
        </div>  
    </div>

</template>



<style scoped>
.cart {
  position: fixed; /* 장바구니를 고정 위치에 놓기 위해 사용 */
  bottom: 0; /* 화면 하단에 위치 */
  width: 100%; /* 장바구니가 화면 너비 전체를 차지하도록 */
  background-color: #5E7153;
  border-top: 1px solid black; /* 상단에 경계를 추가 */
  padding: 1%; /* 패딩을 추가하여 내용물에 여유 */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 상단 그림자를 추가 */
  z-index: 10; /* 다른 요소들보다 위에 배치되도록 설정 */
  display: flex; /* 플렉스 박스를 사용하여 내부 요소를 정렬 */
  align-items: center; /* 내부 요소를 세로로 중앙 정렬 */
  overflow-x: scroll; /* 카드들이 넘칠 경우 스크롤 가능하게 */
}

.listBox {
  display: inline-block; /* 카드들이 옆으로 배치되도록 설정 */
  margin: 0 10px; /* 각 카드 간격 */
}

.itemBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px; /* 카드의 너비 */
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 카드에 그림자 추가 */
}

.itemImage {
  width: 80px; /* 이미지 크기를 줄임 */
  height: 80px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.itemDetails {
  text-align: center;
}

@media (max-width: 600px) {
  /* 모바일 뷰에서 카드 크기 조정 */
  .itemBox {
    width: 120px;
  }
  .itemImage {
    width: 60px;
    height: 60px;
  }
}
</style>