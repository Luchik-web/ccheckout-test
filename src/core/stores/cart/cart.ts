import { defineStore } from 'pinia';
import { CartItemInterface } from '@comfy/core/src/domain/cart-item.interface';
import { CartInterface } from '@comfy/core/src/domain/cart.interface';
import { SubcartInterface } from '@comfy/core/src/domain/subcart.interface';
import { CartServiceInstance } from 'src/core/services/products/cart.service';

export const useCartStore = defineStore('counter', {
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
        productsCount(state): number {
            console.log('state', state);
            if (!state.cart) {
                return 0;
            }
            if (!state.cart.subcarts || !state.cart.subcarts.length) {
                return 0;
            }

            let summ: number = 0;
            state.cart.subcarts.forEach((subcart: SubcartInterface) => {
                summ += (subcart.items?.length || 0);
            });

            return summ;
        },
        productsPriceSum(state): number {
            console.log('state', state);
            if (!state.cart) {
                return 0;
            }
            if (!state.cart.subcarts || !state.cart.subcarts.length) {
                return 0;
            }

            let summ: number = 0;
            state.cart.subcarts.forEach((subcart: SubcartInterface) => {
                if (!subcart.items?.length) {
                    return;
                }

                subcart.items.forEach((item: CartItemInterface) => {
                    summ += item.price;
                });
            });

            return summ;
        },
        productsPriceTotal(state): number {
            console.log('state', state);
            if (!state.cart) {
                return 0;
            }
            if (!state.cart.subcarts || !state.cart.subcarts.length) {
                return 0;
            }

            let summ: number = 0;
            state.cart.subcarts.forEach((subcart: SubcartInterface) => {
                if (!subcart.items?.length) {
                    return;
                }

                subcart.items.forEach((item: CartItemInterface) => {
                    summ += (item.specialPrice || item.price);
                });
            });

            return summ;
        },
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
