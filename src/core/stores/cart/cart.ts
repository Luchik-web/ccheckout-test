import { defineStore } from 'pinia';
import { cart as emptyCartInstance } from '@comfy/core/src/domain/cart/mocks/cart.empty';
import { CartInterface } from '@comfy/core/src/domain/cart/cart.interface';
import { CartServiceInstance } from '@comfy/core/src/services/cart.service';

export const useCartStore = defineStore('cart', {
    state: (): {
        counter: number,
        cart: CartInterface,
    } => ({
        counter: 2,
        cart: Object.assign({}, emptyCartInstance)
    }),

    getters: {
        productsCount(state): number {
            return CartServiceInstance.productsCount(state.cart);
        },
        productsPriceSum(state): number {
            return CartServiceInstance.productsPriceSum(state.cart);
        },
        productsPriceTotal(state): number {
            return CartServiceInstance.productsPriceTotal(state.cart);
        },
    },

    actions: {
        increment() {
            this.cart.id = this.cart?.id ? this.cart.id + '1' : '1';
        },
        async init(/*context, ssrContext: Context*/) {
            this.cart = await CartServiceInstance.getCart()
        },
    }
});
