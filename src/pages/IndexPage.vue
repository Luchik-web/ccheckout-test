<script lang="ts">
import { Meta } from 'components/models';
import { computed, defineComponent, Ref, ref } from 'vue';
// import { useStore } from 'src/store';
// Domain
import { ProductInterface } from 'src/core/domain/product.interface';
// App Services
import { ProductsServiceInstance } from 'src/core/services/products/products.service';
// Components
import AppCustomerAddressComponent from 'components/customer/CustomerAddressComponent.vue';
import AppCartProductListComponent from 'components/cart/CartProductListComponent.vue';

export default defineComponent({
    name: 'IndexPage',
    components: {
        AppCustomerAddressComponent,
        AppCartProductListComponent,
    },
    setup() {
        // const $store = useStore()
        // console.log('$store', $store)

        const drawerState = computed(() => {
            return { id: 1 }//$store.state.cart.cart
        })
        let productList: Ref<ProductInterface[]> = ref([])

        const meta = ref<Meta>({
            totalCount: 1200
        })

        return {
            drawerState,
            meta,
            ..._fetchDataProductList(productList),
        }
    },
})

function _fetchDataProductList(productList: Ref<ProductInterface[]>) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    ProductsServiceInstance.getProductList().then(
        (results: ProductInterface[]) => {
            productList.value = results
        }
    )

    return { productList }
}
</script>

<template>
    <q-page class="row items-center justify-evenly">
        {{ drawerState?.id }}
        <AppCustomerAddressComponent />
        <AppCartProductListComponent
            title="Products"
            active
            :product-list="productList"
            :meta="meta"
        />
    </q-page>
</template>
