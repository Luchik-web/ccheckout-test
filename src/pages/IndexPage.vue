<script lang="ts">
import { Meta } from 'components/models';
import { computed, ComputedRef, defineComponent, ref } from 'vue';
// import { useStore } from 'src/store';
// Domain
import { CartInterface } from '@comfy/core/src/domain/cart/cart.interface';
// App Services
import { useCartStore } from 'src/core/stores/cart/cart';
// Components
import AppCustomerAddressComponent from 'components/customer/CustomerAddressComponent.vue';
import AppCartItemListComponent from 'components/cart/CartItemListComponent.vue';

export default defineComponent({
    name: 'IndexPage',
    components: {
        AppCustomerAddressComponent,
        AppCartItemListComponent,
    },
    setup() {
        const store = useCartStore();
        const cart: ComputedRef<CartInterface> = computed(() => store.cart);

        const meta = ref<Meta>({
            totalCount: 1200
        })

        return {
            cart,
            meta,
        }
    },
})
</script>

<template>
    <q-page class="row items-center justify-evenly">
        <AppCustomerAddressComponent />
        <AppCartItemListComponent
            v-for="subcart in cart.subcarts"
            :key="subcart.id"
            :cart-item-list="subcart.items"
            :meta="meta"
            title="Products"
            active
        />
    </q-page>
</template>
