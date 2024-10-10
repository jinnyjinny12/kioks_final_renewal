import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const cartItems = ref([]);

    // 브라우저의 localStorage에서 장바구니 데이터를 불러오기
    function loadCart() {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            cartItems.value = JSON.parse(storedCart);
        }
    }

    // 장바구니 데이터를 localStorage에 저장
    function saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
    }

    function addToCart(item) {
        console.log('Adding to cart:', item);  // 추가된 아이템 로그
        const existingItem = cartItems.value.find(i => i.name === item.name);
    
        if (existingItem) {
            // 이미 존재하는 아이템이 있으면 수량을 증가시킴
            existingItem.quantity += 1;
        } else {
            // 존재하지 않으면 새로 추가하면서 price와 quantity 기본값 설정
            cartItems.value.push({ 
                ...item, 
                quantity: item.quantity || 1, // quantity가 없으면 기본값 1
                price: item.price || 0 // price가 없으면 기본값 0
            });
            console.log(`Added item: ${item.name}, Price: ${item.price || 0}`);  // 추가된 아이템의 price 로그
        }
    }

    // 장바구니에서 특정 아이템 제거
    function removeFromCart(item) {
        cartItems.value = cartItems.value.filter(i => i.name !== item.name);
        saveCart(); // 아이템 제거 후 장바구니를 저장
    }

    // 장바구니 아이템 수량 증가
    function increaseQuantity(item) {
        const cartItem = cartItems.value.find(i => i.name === item.name);
        if (cartItem) {
            cartItem.quantity += 1;
            saveCart(); // 수량 증가 후 장바구니를 저장
        }
    }

    // 장바구니 아이템 수량 감소 (1 이하로는 감소하지 않음)
    function decreaseQuantity(item) {
        const cartItem = cartItems.value.find(i => i.name === item.name);
        if (cartItem && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            saveCart(); // 수량 감소 후 장바구니를 저장
        }
    }

    // 장바구니 아이템을 반환
    function getCartItems() {
        return cartItems.value;
    }

    // 장바구니 초기화
    function clearCart() {
        cartItems.value = [];
        saveCart(); // 장바구니 초기화 후 저장
    }

    // Pinia 스토어가 처음 로드될 때 localStorage에서 장바구니 데이터를 불러옴
    loadCart();

    return {
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartItems,
        clearCart,
        saveCart,
        loadCart
    };
});
