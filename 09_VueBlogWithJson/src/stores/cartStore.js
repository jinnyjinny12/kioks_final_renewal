import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    //장바구니 아이템 추가
    function addToCart(item) {
        cartItems.value.push(item);
    }

    // 장바구니 아이템을 반환
    function getCartItems() {
        return cartItems.value;
    }

    return {
        cartItems,
        addToCart,
        getCartItems,
    };
});