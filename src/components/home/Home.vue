<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
<template>
    <div id="first-container">
        <p class="font">cafe.js</p>

        <!-- 첫 번째 비디오: 페이지가 로드되면 자동으로 재생되고, 음소거 상태이며, 플레이어 인터페이스 없이 재생됨 -->
        <video id="first-video" src="../../assets/video/KakaoTalk_20240612_100738326.mp4" autoplay muted loop></video>

        <p>
            <button class="font1" @click="$router.push('/Menu');"> 주문하기</button>
        </p>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'DNFBitBitv2';
    font-style: normal;
    font-weight: 400;
    src: url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf') format('opentype');
}

.font {
    font-family: 'DNFBitBitv2', sans-serif;
    color: #FFB834;
    text-shadow: 2px 4px 4px #783E19;
    font-size: 100px;
    /*글자의 크기를 조절하여 박스 안에 맞추기*/
    line-height: 175px;
    /* 글자의 높이를 설정하여 박스 중앙에 맞추기 */
    width: 473px;
    /*고정너비*/
    height: 175px;
    /*고정 높이*/
    display: block;
    /* 요소를 블록으로 설정하여 크기 조정 */
    margin: 50px auto 0;
    /* 중앙 정렬을 위해 자동 여백 설정,하단 여백 추가 */
    text-align: center;
    /*텍스트를 중앙 정렬*/
}

.font1 {
    font-family: 'BMJUA';
}

body {
    background-color: #BA9470;
    margin: 0;
    /* 기본 여백 제거 */
    display: flex;
    /* 플렉스 박스 레이아웃 설정 */
    flex-direction: column;
    /* 수직 방향으로 정렬 */
    align-items: center;
    /* 가로 방향 중앙 정렬 */
    justify-content: flex-start;
    /* 세로 방향 상단 정렬 */
    height: 100vh;
    /* 뷰포트 높이 설정 */
    overflow: hidden;
    /* 스크롤바 숨기기 */
}

#first-container {
    background-color: #5e7153;
    /* 카키색 */
    padding: 20px;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    background-size: 1080px 1920px;
    /*배경 크기설정*/
}

button {
    background-color: #ffffff;
    /* 버튼 배경색 */
    color: #5e7153;
    /* 버튼 글자색 */
    border: 2px solid #37442f;
    /*  테두리색상 */
    padding: 0;
    /* 여백 초기화 */
    width: 500px;
    /* 너비 자동 설정 */
    height: 200px;
    /* 높이 자동 설정 */
    font-size: 90px;
    /* 텍스트 크기 조정 */
    cursor: pointer;
    /* 커서 모양 */
    border-radius: 0;
    /* 직사각형 모양 */
    box-shadow: none;
    /* 그림자 제거 */
    font-family: 'BMJUA';
    /* 여기서 글꼴을 설정 */
    display: inline-block;
    /* 텍스트 크기에 따라 버튼 크기가 조정되도록 인라인 블록 요소로 설정 */
    line-height: 100px;
    /* 텍스트 세로 중앙 정렬을 위해 버튼의 높이와 동일한 값으로 설정 */
    border-width: 9px;
    /* 테두리 굵기 설정 */
    margin-top: 50px;
    /* 주문 버튼과 비디오 사이 간격 */
}

button:hover {
    background-color: #e2a217;
    /* 호버 시 배경색 */
}

video {
    margin-top: 50px;
    /*비디오 상단 여백 조정*/
    width: 1260px;
    height: 2000px;
    /*비디오 높이 조정*/
    /* margin-botton: 50px; 비디오와 주문 버튼 사이 간격 */
}
</style>