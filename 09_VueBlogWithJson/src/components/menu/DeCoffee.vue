<script setup>
import { useRouter } from "vue-router";
import { useDeCoffeeStore } from "@/stores/menu";
import { onMounted } from "vue";

const router = useRouter();
const { deCoffee } = defineProps(["deCoffee"]);

function detailView(id) {
    router.push(`/deCoffee/${id}`);
}

const deCoffeeStore = useDeCoffeeStore();

onMounted(() => {
    deCoffeeStore.deCoffeeHandler();
})
</script>

<template>

    <main>
        <h1>디카페인</h1>
        <div v-for="deCoffee in deCoffeeStore.deCoffees" class="listBox">
            <div :key="deCoffee.id" :deCoffee="deCoffee" @click="detailView(deCoffee.id)" class="itemBox">
                <div> {{ deCoffee.name }}</div>
                <div> 가격 {{ deCoffee.price }}</div>
                <img :src="deCoffee.img" class="itemImage" />
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