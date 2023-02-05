<template>
  <q-layout view="hHh lpR fFf">

    <TopNavComponent />

    <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        bordered
        class="bg-grey-3"
    >

    <ProductShortComponent
        v-for="product in productList"
        :key="product.id"
        :product="product"
    />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
$color: red;
</style>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
// Domain
import { ProductInterface } from 'src/core/domain/product.interface';
// App Services
import { ProductsServiceInstance } from 'src/core/services/products/products.service';
// Components
import TopNavComponent from 'components/TopNavComponent.vue';
import ProductShortComponent from 'components/ProductShortComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink,
    TopNavComponent,
    ProductShortComponent,
  },

  setup () {
    const drawerLeft = ref(true);
    let productList: Ref<ProductInterface[]> = ref([]);

    return {
      drawerLeft,
      toggleLeftDrawer () {
        drawerLeft.value = !drawerLeft.value
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
