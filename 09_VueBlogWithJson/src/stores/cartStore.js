import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    // 장바구니 아이템 추가
    function addToCart(item) {
        const existingItem = cartItems.value.find(i => i.name === item.name);

        if (existingItem) {
            // 이미 존재하는 아이템이 있으면 수량을 증가시킴
            existingItem.quantity += 1;
        } else {
            // 존재하지 않으면 새로 추가하면서 수량을 1로 설정
            cartItems.value.push({ ...item, quantity: 1 });
        }
    }

    // 장바구니에서 특정 아이템 제거
    function removeFromCart(item) {
        cartItems.value = cartItems.value.filter(i => i.name !== item.name);
    }

    // 장바구니 아이템 수량 증가
    function increaseQuantity(item) {
        const cartItem = cartItems.value.find(i => i.name === item.name);
        if (cartItem) {
            cartItem.quantity += 1;
        }
    }

    // 장바구니 아이템 수량 감소 (1 이하로는 감소하지 않음)
    function decreaseQuantity(item) {
        const cartItem = cartItems.value.find(i => i.name === item.name);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        }
    }

    // 장바구니 아이템을 반환
    function getCartItems() {
        return cartItems.value;
    }

    // 장바구니 초기화
    function clearCart() {
        cartItems.value = [];
    }

    return {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartItems,
        clearCart
    };
});