<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { CartItemInterface } from '@comfy/core/src/domain/cart-item.interface';

export default defineComponent({
    name: 'AppCartItemListComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        cartItemList: {
            type: Array as PropType<CartItemInterface[]>,
            default: () => [],
        },
    },
    setup(props) {
        return {
            ...useClickCount(),
            ...useDisplayTodo(toRef(props, 'cartItemList')),
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

function useDisplayTodo(cartItemList: Ref<CartItemInterface[]>) {
    const cartItemsCount = computed(() => cartItemList.value.length);

    return { cartItemsCount };
}
</script>

<template>
    <section class="chckt-section chckt-section--mb">
        <p>
            {{ title }}
        </p>
        <q-item
            v-for="item in cartItemList"
            :key="item.productId"
            tag="div"
            clickable
            @click="increment"
        >
            <q-item-section v-if="item.icon" avatar>
                <q-img :src="item.icon" />
            </q-item-section>

            <q-item-section>
                <q-item-label>
                    {{ item.name }}
                </q-item-label>
                <div class="code">
                    Код: {{ item.sku }}
                </div>
            </q-item-section>

            <q-item-section>
                <q-item-label caption>
                    <div v-if="item.specialPrice">
                        <strike>
                            {{ item.price }} ₴
                        </strike>
                        {{ item.specialPrice }} ₴
                    </div>
                    <div v-else>
                        {{ item.price }} ₴
                    </div>
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
        <!-- <p>Count: {{ cartItemsCount }} cartItems</p>
    <p>Clicks on cartItems: {{ clickCount }}</p> -->
    </section>
</template>

<style lang="scss">
.code {
    font-size: 70%;
}
</style>
