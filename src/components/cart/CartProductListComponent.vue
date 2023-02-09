<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { ProductInterface } from 'src/core/domain/product.interface';

export default defineComponent({
    name: 'AppCartProductListComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        productList: {
            type: Array as PropType<ProductInterface[]>,
            default: () => [],
        },
    },
    setup(props) {
        return {
            ...useClickCount(),
            ...useDisplayTodo(toRef(props, 'productList')),
        };
    },
});

function useClickCount() {
    const clickCount = ref(0);
    function increment() {
        clickCount.value += 1;

        return clickCount.value;
    }

    return { clickCount, increment };
}

function useDisplayTodo(productList: Ref<ProductInterface[]>) {
    const productsCount = computed(() => productList.value.length);

    return { productsCount };
}
</script>

<template>
    <section class="chckt-section chckt-section--mb">
        <p>
            {{ title }}
        </p>
        <q-item
            v-for="product in productList"
            :key="product.id"
            tag="div"
            clickable
            @click="increment"
        >
            <q-item-section v-if="product.icon" avatar>
                <q-img :src="product.icon" />
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    {{ product.name }}
                </q-item-label>
                <div class="code">
                    Код: {{ product.id }}
                </div>
            </q-item-section>

            <q-item-section>
                <q-item-label caption>
                    <div v-if="product.discount > 0">
                        <strike>
                            {{ product.price }} ₴
                        </strike>
                    </div>
                    {{ product.price * (1 - (product.discount || 0) / 100) }} ₴
                </q-item-label>
            </q-item-section>
        </q-item>

        <q-btn
            color="primary"
            no-caps
            label="Змiнити"
        />
        <q-btn
            color="accent"
            no-caps
            label="Продовжити оформлення"
        />
        <!-- <p>Count: {{ productsCount }} products</p>
    <p>Clicks on products: {{ clickCount }}</p> -->
    </section>
</template>

<style lang="scss">
.code {
    font-size: 70%;
}
</style>
