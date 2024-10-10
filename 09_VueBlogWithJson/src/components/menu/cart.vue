<script setup>
import { useCartStore } from '@/stores/cartStore'; // Pinia cart store import
import { useRouter } from 'vue-router'; // Vue Router import

const CartStore = useCartStore(); // Pinia store 사용
const router = useRouter(); // Router instance 사용

// 다음 버튼 클릭 시 /payment 페이지로 이동
function goToPayment() {
  router.push('/payment');
}
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
              
            </div>
        </div>  
           <!-- 다음 버튼 -->
           <button @click="goToPayment">다음</button>
    </div>
</template>

<style scoped>
.cart {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #5E7153;
  border-top: 1px solid black;
  padding: 1%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  align-items: center;
  overflow-x: scroll;
}

.listBox {
  display: inline-block;
  margin: 0 10px;
}

.itemBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.itemImage {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-bottom: 10px;
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
