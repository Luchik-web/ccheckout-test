import { defineStore } from 'pinia';
import { CartInterface } from 'src/core/domain/cart.interface';
import { CartServiceInstance } from 'src/core/services/products/cart.service';

export const useCounterStore = defineStore('counter', {
    state: (): {
        counter: number,
        cart: CartInterface,
    } => ({
        counter: 2,
        cart: {
            subcarts: [],
        }
    }),

    getters: {
        // cart(state): CartInterface {
        //     console.log('state', state);

        //     return state.cart;
        // }
    },

    actions: {
        increment() {
            this.cart.id = this.cart?.id ? this.cart.id + 1 : 1;
        },
        async init(/*context, ssrContext: Context*/) {
            // const options = getApiOptions(ServiceKey.CATEGORIES, context.rootState.base, ssrContext)
            // const { storeId } = context.rootState.base

            this.cart = await CartServiceInstance.getCart()
        },
    }
});
