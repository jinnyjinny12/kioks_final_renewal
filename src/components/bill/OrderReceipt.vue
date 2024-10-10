<script setup>
import Animation from '../pay/Animation.vue'
</script>

<template>
    <div class="container">
        <br>
        <br>
             <div class="logo1">cafe.js</div>
        <br>

      <div>
        <h1 class="text">주문이 완료되었습니다</h1>
        
      </div>
      <div class="animation-wrapper">
        <Animation />
      </div>
    </div>
</template>

<style>
/* 전역 폰트 설정 */
.container {
    position: relative;
    width: 1080px;
    height: 1920px;
    margin: auto;
    background: linear-gradient(180deg, #5e7153 20%, #af9544 50%, #d7a63c 75%, #ffb834 100%);
}

/* 전역 폰트를 상속받는 텍스트 */
.text {
    font-family: 'BMJUA', sans-serif; /* 전역 폰트 적용 */
    font-size: 30px;
    letter-spacing: 10px;
    background-color: #FFB834;
    color: #783e19;
    padding: 10px;
    border: 2px solid #FFB834;
    text-align: center;
}

/* 특정 폰트를 적용한 부분 */
.logo1 {
    font-family: 'DNFBitBitv2', sans-serif;
    font-size: 60px;
    text-align: center;
    color: #FFB834;
}

.animation-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.receipt {
    position: relative;
    width: 306px;
    height: 124px;
    font-family: 'BMJUA', sans-serif;
    font-size: 120px;
    color: #282808;
}
</style>
