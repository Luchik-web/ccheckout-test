<template>
  <q-page class="row items-center justify-evenly">
    <AppCustomerAddressComponent />
    <AppCartProductListComponent
      title="Products"
      active
      :productList="productList"
      :meta="meta"
    />
  </q-page>
</template>

<script lang="ts">
import {  Meta } from 'components/models';
import { defineComponent, Ref, ref } from 'vue';
// Domain
import { ProductInterface } from 'src/core/domain/product.interface';
// App Services
import { ProductsServiceInstance } from 'src/core/services/products/products.service';
// Components
import AppCustomerAddressComponent from 'components/CustomerAddressComponent.vue';
import AppCartProductListComponent from 'components/CartProductListComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    AppCustomerAddressComponent,
    AppCartProductListComponent,
 },
  setup () {
    let productList: Ref<ProductInterface[]> = ref([]);

    const meta = ref<Meta>({
      totalCount: 1200
    });

    return {
        meta,
        ..._fetchDataProductList(productList),
    };
  },
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
