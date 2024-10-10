<script setup>
import { useCartStore } from '@/stores/cartStore'; // cartStore import
import { computed } from 'vue';
import ButtonHome from './ButtonHome.vue';

const cartStore = useCartStore(); // Pinia store 사용

// 총 결제금액 계산
const totalAmount = computed(() => {
  return cartStore.cartItems.reduce((total, item) => {
    // price에 쉼표가 있을 경우 제거하고 숫자로 변환
    const price = Number(item.price.toString().replace(/,/g, '')) || 0;
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0).toLocaleString() + '원'; // 원화 형식으로 변환
});

// 각 아이템별 수량 * 가격 계산
const cartDetails = computed(() => {
  return cartStore.cartItems.map(item => ({
    name: item.name,
    quantity: item.quantity || 1,
    totalPrice: ((Number(item.price.toString().replace(/,/g, '')) || 0) * (item.quantity || 1)).toLocaleString() + '원'
  }));
});
</script>

<template>
    <header>
      <!-- 헤더 영역 -->
      <h1 class="custom-font">Cafe.js</h1>
      <div class="payment-select">결제수단을 선택해주세요</div>
      
      <!-- 총 결제금액 표시 -->
      <div class="total-amount">총 결제금액 <span>{{ totalAmount }}</span></div>
      
      <!-- 장바구니에 담긴 각 메뉴별 수량과 가격 표시 -->
      <div v-for="item in cartDetails" :key="item.name" class="menu-item">
        {{ item.name }}: {{ item.quantity }}개  :  {{ item.totalPrice }}
      </div>
      
      <br>
      <br>
      <div class="payment-method-container">
        <div class="payment-method">결제수단</div>
      </div>
    </header>
    
    <main>
        <ButtonHome/>
    </main>
</template>

<style scoped>
@font-face{
  font-family:'DNFBitBitv2';
  font-style: normal; 
  font-weight:400; 
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype');
}

@font-face {
  font-family: 'BMJUA';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

/* 모든 텍스트에 기본 폰트 적용 */
* {
  font-family: 'BMJUA', sans-serif;
}

.custom-font{
  font-family: 'DNFBitBitv2', sans-serif;
  color: #FFB834;
  text-shadow: 4px 4px 0 #783E19; /* X, Y, blur-radius, color */   
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  text-align: center;
}

/* 결제수단을 선택해주세요 */
.payment-select {
  background-color: #FFB834;
  color: #783E19;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px; 
  font-family: 'DNFBitBitv2', sans-serif;
  text-shadow: 
    -1px -1px 0 #FFEA28,
    1px -1px 0 #FFEA28,
    -1px 1px 0 #FFEA28,
    1px 1px 0 #FFEA28,
    -2px -2px 0 #FFEA28,
    2px -2px 0 #FFEA28,
    -2px 2px 0 #FFEA28,
    2px 2px 0 #FFEA28;
}

/* 총결제금액 */
.total-amount {
  background-color: #f9ecc9;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  color: #783E19; 
}

.total-amount span {
  margin-left: 100px; /* 총 결제금액과 28,000원 사이의 간격 조정 */
}

/* 메뉴별 수량*가격 */
.menu-item {
  background-color: #f2f2f2;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
}

/* 결제수단 */
.payment-method {
  display: inline-block;
  padding: 10px 20px; /* 내부 여백 */
  background-color: #f9ecc9; /* 배경색 */
  border: 2px solid #ccc; /* 테두리 */
  border-radius: 25px; /* 타원 모양을 만들기 위한 테두리 둥글기 */
  font-size: 0.8em; /* 글자 크기 */
  margin-top: 20px; /* 상단 여백 */
}

.payment-method-container {
  margin-right: 200px;
  width: auto;
}
</style>
