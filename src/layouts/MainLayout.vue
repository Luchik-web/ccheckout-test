<template>
    <q-layout view="lhh LpR lff" class="chkt-layout bg-grey-3">

        <q-header class="chkt-layout-topnav">
            <q-toolbar >
                <q-toolbar-title>
                    <q-icon :name="icon" />
                </q-toolbar-title>

                <AppTopNavComponent />
            </q-toolbar>
        </q-header>

        <q-drawer
            side="right"
            v-model="drawerRight"
            :width="320"
            :breakpoint="500"
            class="bg-grey-3"
        >
            <q-scroll-area class="fit">
            <div class="q-pa-sm">
                <AppCartSummaryComponent
                    :productList="productList"
                />
            </div>
            </q-scroll-area>
        </q-drawer>

        <q-page-container >
            <router-view/>
        </q-page-container>
    </q-layout>
</template>
<style lang="scss">
.q-toolbar {
    background-color: #fff; //var(--q-primary);
    color: #616161;
}
.q-icon {
    width: auto;
}
.chkt-topnav-info {
    &__item {
        display: inline-block;

        &:not(:last-child):after {
            content: "/";
            padding-left: 4px;
            padding-right: 4px;
        }
    }
}
.chkt-layout-topnav {
    color: #616161 !important;
    background: #fff !important;
}
</style>
<!-- .chkt-layout {
    background: transparent !important;
} -->

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
// Domain
import { ProductInterface } from 'src/core/domain/product.interface';
// App Services
import { ProductsServiceInstance } from 'src/core/services/products/products.service';
// Components
import AppTopNavComponent from 'components/TopNavComponent.vue';
import AppCartSummaryComponent from 'components/cart/CartSummaryComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    AppTopNavComponent,
    AppCartSummaryComponent,
  },

  setup () {
    const drawerLeft = ref(true);
    const drawerRight = ref(true);
    const icon = ref('img:src/assets/logo_main.svg');
    let productList: Ref<ProductInterface[]> = ref([]);

    return {
        icon,
        drawerLeft,
        drawerRight,
        toggleLeftDrawer () {
            drawerLeft.value = !drawerLeft.value
        },
        toggleRightDrawer () {
            drawerRight.value = !drawerRight.value
        },
        ..._fetchDataProductList(productList),
    }
  }
});

function _fetchDataProductList(productList: Ref<ProductInterface[]>) {
    ProductsServiceInstance.getProductList()
        .then((results: ProductInterface[]) => {
            productList.value = results;
            console.log('productList', productList);
        });
    return { productList };
}
</script>
