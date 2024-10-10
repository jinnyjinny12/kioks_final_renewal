<script setup>
import { useCartStore } from '@/stores/cartStore'; // Pinia cart store import
import { useRouter } from 'vue-router'; // Vue Router import
import { computed } from 'vue';

const CartStore = useCartStore(); // Pinia store 사용
const router = useRouter(); // Router instance 사용

// 다음 버튼 클릭 시 /payment 페이지로 이동
function goToPayment() {
  router.push('/payment');
}

// 전체 장바구니의 총 가격 계산
const totalCartPrice = computed(() => {
  const total = CartStore.cartItems.reduce((sum, item) => {
    // 쉼표를 제거하고 숫자로 변환
    const price = Number(item.price.toString().replace(/,/g, '')) || 0; 
    const quantity = item.quantity || 1; // quantity가 undefined인 경우 기본값 1로 처리

    // console.log로 item의 price와 quantity를 출력
    console.log(`Item: ${item.name}, Price: ${price}, Quantity: ${quantity}, Subtotal: ${price * quantity}`);

    return sum + (price * quantity);
  }, 0);

  // 최종 total 값을 출력
  console.log(`Total Cart Price: ${total}`);

  return total.toLocaleString() + '원'; // 원화 형식으로 표시
});

</script>

<template>
    <div class="cart">
        <!-- 장바구니가 비었을 때 표시할 내용 -->
        <div v-if="CartStore.cartItems.length === 0">
            장바구니가 비었습니다.
        </div>

        <!-- 장바구니에 아이템이 있을 때 표시할 내용 -->
        <div v-else>
            <div v-for="item in CartStore.getCartItems()" :key="item.name" class="listBox">
                <div class="itemBox">
                    <div>{{ item.name }}</div>
                    <div>가격: {{ item.price }}원</div>
                    
                    <img :src="item.img" class="itemImage" alt="장바구니 항목 이미지" />

                    <!-- 수량 조정 버튼 -->
                    <div class="quantity-controls">
                        <button @click="CartStore.decreaseQuantity(item)">-</button>
                        <span>{{ item.quantity }}</span>
                        <button @click="CartStore.increaseQuantity(item)">+</button>
                    </div>

                    <!-- 아이템 삭제 버튼 -->
                    <button @click="CartStore.removeFromCart(item)" class="remove-btn">
                        삭제
                    </button>
                </div>
                <div class="subtotal">합계: {{ (Number(item.price.toString().replace(/,/g, '')) || 0) * (item.quantity || 1) }}원</div> <!-- NaN 방지를 위해 기본값 설정 -->
              
            </div>
        </div>  
           <!-- 전체 장바구니 총 가격 표시 -->
           <div class="total-price">
                총 가격: {{ totalCartPrice }}
            </div>
           <!-- 다음 버튼 -->
           <button @click="goToPayment">다음</button>
    </div>
</template>

<style scoped>

@import "@/assets/css/font.css"; /* font.css를 import하여 전역에 적용 */

.cart {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #5E7153;
  border-top: 1px solid black;
  padding: 20px; /* padding 증가 */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: scroll;
  font-family: 'BMJUA', sans-serif;
}

.listBox {
  display: inline-block;
  margin: 20px 10px; /* 카드 간격 증가 */
}

.itemBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* 카드 너비 증가 */
  padding: 20px; /* padding 증가 */
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.itemImage {
  width: 100px; /* 이미지 크기 증가 */
  height: 100px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.item-name {
  font-size: 18px; /* 아이템 이름 글자 크기 */
  font-weight: bold;
  margin-bottom: 5px;
}

.item-price {
  font-size: 16px;
  color: #783E19;
  margin-bottom: 10px;
}

.subtotal {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  margin-top: 10px;
}

.quantity-controls button {
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: #ffb834;
  color: white;
  border-radius: 5px;
}

.remove-btn {
  margin-top: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #ff3333;
}

.total-price {
  font-size: 20px;
  font-weight: bold;
  color: #FFB834;
  margin-top: 20px;
}

.next-button {
  padding: 10px 20px;
  background-color: #FFB834;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.next-button:hover {
  background-color: #FF9933;
}

@media (max-width: 600px) {
  .itemBox {
    width: 120px;
  }
  .itemImage {
    width: 60px;
    height: 60px;
  }
}
</style>
