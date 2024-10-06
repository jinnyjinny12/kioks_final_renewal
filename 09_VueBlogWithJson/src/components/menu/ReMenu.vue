<script setup>
import { useRouter } from "vue-router";
import { useReMenuStore } from "@/stores/menu"
import { onMounted } from "vue";

const router = useRouter();
const { reMenu } = defineProps(["reMenu"]);

function detailView(id) {
    router.push(`/reMenu/${id}`);
}

const reMenuStore = useReMenuStore();

onMounted(()=>{
    reMenuStore.reMenuHandler();
})
</script>

<template>
  
  <main>
    <div v-for="reMenu in reMenuStore.reMenus" class="listBox">
        <div :key="reMenu.id" :reMenu="reMenu" class="itemBox" @click="detailView(reMenu.id)">
        <div> {{ reMenu.name }}</div>
        <div> 가격 {{ reMenu.price }}</div>
        <img :src="reMenu.img" class="itemImage" />
    </div>
    </div>
  </main>
</template>

<style scoped>
  main{
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

  .listBox{
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