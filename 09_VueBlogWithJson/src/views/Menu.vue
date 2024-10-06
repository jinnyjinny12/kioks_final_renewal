<script setup>
import { useRouter } from "vue-router";
import { useCoffeeStore } from "@/stores/menu";
import { onMounted } from "vue";
// 컴포넌트들 import
import ReMenu from '@/components/menu/ReMenu.vue';
import Coffee from '@/components/menu/Coffee.vue';
import DeCoffee from '@/components/menu/DeCoffee.vue';
import Smoothie from '@/components/menu/Smoothie.vue';
import TeaAde from '@/components/menu/TeaAde.vue';
import Dessert from '@/components/menu/Dessert.vue';

// 현재 선택된 메뉴를 저장하는 상태
import { ref } from 'vue';
const selectedMenu = ref(''); // 기본적으로 아무 메뉴도 선택되지 않음

// 각 메뉴를 클릭할 때 호출하는 함수
function selectMenu(menu) {
  selectedMenu.value = menu;
}


</script>

<template>
    <nav class="navbar">
        <a href="#" @click="selectMenu('remenu')">추천메뉴</a>
        <a href="#" @click="selectMenu('coffee')">커피</a>
        <a href="#" @click="selectMenu('decoffee')">디카페인</a>
        <a href="#" @click="selectMenu('smoothie')">스무디</a>
        <a href="#" @click="selectMenu('tea-ade')">티, 에이드</a>
        <a href="#" @click="selectMenu('dessert')">디저트</a>
    </nav>
    
        <main>
            <!-- 추천메뉴 컴포넌트 렌더링 -->
            <ReMenu v-if="selectedMenu === 'remenu'" />

            <!-- 커피 컴포넌트 렌더링 -->
            <Coffee v-if="selectedMenu === 'coffee'" />

            <!-- 디카페인 컴포넌트 렌더링 -->
            <DeCoffee v-if="selectedMenu === 'decoffee'" />

            <!-- 스무디 컴포넌트 렌더링 -->
            <Smoothie v-if="selectedMenu === 'smoothie'" />

            <!-- 티/에이드 컴포넌트 렌더링 -->
            <TeaAde v-if="selectedMenu === 'tea-ade'" />

            <!-- 디저트 컴포넌트 렌더링 -->
            <Dessert v-if="selectedMenu === 'dessert'" />
        </main>


</template>

<style scoped>

/* 네비게이션바 */
.navbar {
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  background-color: #5E7153; /* 네비게이션 배경색 */
  padding: 15px;
  border-radius: 10px; /* 둥근 모서리 */
}

.navbar a {
  text-decoration: none; /* 밑줄 제거 */
  color: #FFFFFF; /* 흰색 텍스트 */
  background-color: #FFB834; /* 오렌지 버튼 색상 */
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease; /* 부드러운 색상 전환 */
}

.navbar a:hover {
  background-color: #3D4B33; /* 마우스 오버 시 진한 그린 */
}

.navbar a:active {
  background-color: #FF9933; /* 클릭 시 조금 더 진한 오렌지 */
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
  }

  .navbar a {
    margin: 10px 0;
  }
}

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

button {
    margin-right: 1%;
}
a{
  margin-left: 10px;
  font-size: 20px;
}
</style>