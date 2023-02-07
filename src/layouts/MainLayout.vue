<template>
    <q-layout view="lhh LpR lff" class="bg-transparent">

        <q-header class="text-white bg-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-icon :name="icon" />
                </q-toolbar-title>

                <AppTopNavComponent />
            </q-toolbar>
        </q-header>

        <q-drawer
            side="right"
            v-model="drawerRight"
            bordered
            :width="200"
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARzSURBVHgBxVkxbBRHFH1/YyWBIjKhNfGSgkhpbKVyqpwdKQVyEymgdCFIAaeyQSkjY1DoouRIA7ggdhcRJBpDgQQ+JCTosBsKGha4EvDJhU3DDf/t7Nzu2ue7nb3DPGns2Z2Zm3fvz//zZ05QEmZqqII3wQgCqejjKAwGIVriRjS0HmktgjGrCJo1uVSvoQTEp7OZCQex0ZzWYTMtMsUR6SfUIMFZuRRFRQcVIhgT22yeiYn1BWahKNGuBM3JcFrNNFdCsW6g+edk/tlip07Smdxnf/dPtZ0mMVUleWqn5rYErUnNda1WsDtYwR4Zl2rU2NoQtO2+aZaxe+SI0USQbdhG0JpVB+w+KuZEPHcOORObXw4cQxD8i/cJY07pmqy6xxZBMxWG2kjThiiD/UO2EBvrQP0RSqKh6/GgW48DrdfNpoYSCeGDvZ8AE8dtYT2Ll3Xg8QNgqWrrxcHNQGMuYs+OFUzUe+LzKfj6B+DIbEqMJJ4/ss8sQ1/a91Tz/3PA/Wvwwh7ZRxWtgla94oOp2NFZW3cq8X8WNPfkjP0iP/2pEyrpO1dQGBtNxt85q+DJYaoXFhrIic/fs3USW0rWM1U7NJauP/4nSJKFz+cP+5i7IZef7hM1byVxjmKgGlSFJlv8zb6joiSRXYdZ8lPzGri+syr/9SMKQ96MB2reSuEBNBPJOQIEn48ma5EEnKlJmMSJG0lfrsutztQJzWA00LU3UnjAgWTh0xmcqSaTrfrqOasOC52C+PZ4vj/JfTqEwhBUuJOE8MXmelp3sW/1Vvpu5Va+jXBfyEdByEig2W9YuL8jlp3YBWRnTsItg+eZYO1FrIXBAa8870U9JcgJ6Zm3r1jHoTm/GLPtLga6sML+7p3fDjMY+PSOFXROMJaoRG/mmqMJSYKFxK9mgvOhhDjHbqzDBwPJAae4ilxfnJCKOYWoIouLg6/qeSLOkXx3E42F6sVoeA3hJJycZsuuO4IKZYM0wT7sS4V9CRpENPGK16DN9TSMUJn9HcKG2+6IpSq8IeaperHchS+oBNWio/w6v3O/0/+lAdzfvFRwJdCc2k9BB25zzjGOzG5v5ztnWrcl+oIH/pjoieG1UsdKkvv9pq1n916XIBB/HC6bvEaaLBy06VYgFzRhOANfcGKqwzg4mTmdujrbymfWNf6xCh7TY+ZHZg1l4XK+LEiuzLpzEE379eYhDtSywPzfXEBZZFOvfpADFty1SHpoooofatrfyxWHCzl+Z5CtUA4y4Qi2trpYxQ/kLHoBifVGjv6Qu1TK7cVyMar2ZOqeofc0F6PcZVL7u5mp4WUNkhXsLh5qWPlq68v22cxr+R4oGcDLYVmPmRPtGrpdv6nJZRrvDoZLSi7vfP3WMR/UgXrVKz8jvr7tMwzWNA843Ykc0TVhVY/S61oZ151mEf0BVatir3wu81HXFMfvEp1XJPYW4hsUP2yZ5G9DQ8g/+BjVdheVfSGYm5UHfp6pRX+KgAnjw1f6M8SaTYSFjnZX66tqiRpK4C34N7myeKUE2QAAAABJRU5ErkJggg==" alt="">

            <q-btn color="primary" no-caps label="Змiнити" />

            <q-btn color="accent" no-caps label="Продовжити оформлення" />

            <router-view />
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
.text-white {
    color: #616161 !important;
}
.bg-white {
    background: #fff !important;
}
.bg-transparent {
    background: transparent !important;
}
</style>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
// Domain
import { ProductInterface } from 'src/core/domain/product.interface';
// App Services
import { ProductsServiceInstance } from 'src/core/services/products/products.service';
// Components
import AppTopNavComponent from 'components/TopNavComponent.vue';
import AppCartSummaryComponent from 'components/CartSummaryComponent.vue';

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
