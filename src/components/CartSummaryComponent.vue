<template>

    <section class="chckt-section chckt-section--mb">
        <div class="checkout-title">
            Разом:
        </div>
        <div data-component-init="totals">

            <div class="totals-step__totals">
                <div class="totals-row">
                    <div class="totals-row__title">{{ productsCount }} товари на суму: </div>

                    <div class="totals-row__price">
                        <div class="ogg-price _normal">
                            <span class="ogg-price__value">{{productsPriceSum}}</span>

                            <span class="ogg-price__currency">₴</span>
                        </div>
                    </div>
                </div>

                <div class="totals-row" data-bonus="" style="display: none;">
                    <div class="totals-row__title">Використано бонусів</div>
                    <div class="totals-row__price">
                        <div class="ogg-price _normal">
                            <span class="ogg-price__value" data-bonus-value="">0</span>
                            <span class="ogg-price__currency">₴</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grand-total">
                <div class="grand-total__label">
                    До сплати:
                </div>

                <div class="grand-total__price">
                    <div class="ogg-price-container">
                        <div class="ogg-price ogg-price-old" v-if="productsPriceTotal !== productsPriceSum">
                            <span class="ogg-price__value">{{productsPriceTotal}}</span>
                            <span class="ogg-price__currency">₴</span>
                        </div>

                        <div class="ogg-price">
                            <span class="ogg-price__value" data-total="56675">{{ productsPriceTotal }}</span>
                            <span class="ogg-price__currency">₴</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
    >
    </q-item> -->
    <!-- <q-item
        clickable
        tag="div"
    >
        <q-item-section
            v-if="product.icon"
            avatar
        >
            <q-img
                :src="product.icon"
            />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ product.name }}</q-item-label>
            <q-item-label caption>{{ product.price }}₴</q-item-label>
        </q-item-section>
    </q-item> -->
</template>

<style lang="scss">
.checkout-title {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 500;
    color: #000;
}
.checkout-cart-products__error {
    background: #000;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 1rem;
    text-align: left;
    position: relative;
    color: #fff;
}
.totals-step__totals {
    padding-bottom: 1.2rem;
    border-bottom: 0.1rem solid #e5e5e5;
}
</style>

<script lang="ts">
import {
computed,
  defineComponent,
  PropType,
  ref,
  Ref,
  toRef,
} from 'vue';
import { ProductInterface } from 'src/core/domain/product.interface';

export default defineComponent({
  name: 'AppCartSummaryComponent',
  props: {
    productList: {
      type: Array as PropType<ProductInterface[]>,
      default: () => null,
    },
  },
  setup (props) {
    return {
        ...fetchDataProductListRelated(toRef(props, 'productList')),
    };
  },
});

function fetchDataProductListRelated(productList: Ref<ProductInterface[]>) {
    const productsCount = computed(() => productList.value.length);
    let productsPriceSum = ref(0);
    let productsPriceTotal = ref(0);
    productList.value.forEach((product: ProductInterface) => {
        productsPriceSum.value += product.price;
        productsPriceTotal.value += product.price * (1 - (product.discount || 0) / 100);
    });
    console.log(productsPriceSum.value)
    return {
        productsCount,
        productsPriceSum,
        productsPriceTotal,
    };
}
</script>
