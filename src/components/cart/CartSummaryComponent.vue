<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
// Domain
// App Services
import { useCartStore } from 'src/core/stores/cart/cart';

export default defineComponent({
    name: 'AppCartSummaryComponent',
    setup() {
        const store = useCartStore();
        const productsCount: ComputedRef<number> = computed(() => store.productsCount);
        const productsPriceSum: ComputedRef<number> = computed(() => store.productsPriceSum);
        const productsPriceTotal: ComputedRef<number> = computed(() => store.productsPriceTotal);

        return {
            productsCount,
            productsPriceSum,
            productsPriceTotal,
        };
    },
});
</script>

<template>
    <section class="chckt-section chckt-section--mb">
        <div class="chkt-title">
            Разом:
        </div>
        <div data-component-init="totals">
            <div class="totals-step__totals">
                <div class="totals-row">
                    <div class="totals-row__title">
                        {{ productsCount }} товари на суму:
                    </div>

                    <div class="totals-row__price">
                        <div class="ogg-price _normal">
                            <span class="ogg-price__value">
                                {{ productsPriceSum }}
                            </span>

                            <span class="ogg-price__currency">
                                ₴
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    class="totals-row"
                    style="display: none"
                >
                    <div class="totals-row__title">
                        Використано бонусів
                    </div>
                    <div class="totals-row__price">
                        <div class="ogg-price _normal">
                            <span class="ogg-price__value">
                                0
                            </span>
                            <span class="ogg-price__currency">
                                ₴
                            </span>
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
                        <div
                            v-if="productsPriceTotal !== productsPriceSum"
                            class="ogg-price ogg-price-old"
                        >
                            <strike>
                                {{ productsPriceSum }} ₴
                            </strike>
                        </div>

                        <div class="ogg-price">
                            <span class="ogg-price__value">
                                {{ productsPriceTotal }}
                            </span>
                            <span class="ogg-price__currency">
                                ₴
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.chkt-title {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 500;
    color: #000;
}
.chkt-cart-products__error {
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
