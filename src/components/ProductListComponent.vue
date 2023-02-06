<template>
  <div>
    <p>{{ title }}</p>
    <q-item
        v-for="product in productList" :key="product.id" @click="increment"
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
            <div class="code">Код: {{ product.id }}</div>
        </q-item-section>

        <q-item-section>
            <q-item-label caption>
                <div v-if="product.discount > 0"><strike>{{ product.price }} ₴</strike></div>
                {{ product.price * (1 - ((product.discount || 0) / 100)) }} ₴
            </q-item-label>
        </q-item-section>
    </q-item>
    <!-- <p>Count: {{ productsCount }} products</p>
    <p>Clicks on products: {{ clickCount }}</p> -->
  </div>
</template>

<style lang="scss">
.code {
    font-size: 70%;
}
</style>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Meta } from './models';
import { ProductInterface } from 'src/core/domain/product.interface';

export default defineComponent({
  name: 'AppProductListComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    productList: {
      type: Array as PropType<ProductInterface[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
  },
  setup (props) {
    return {
        ...useClickCount(),
        ...useDisplayTodo(toRef(props, 'productList'))
    };
  },
});

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(productList: Ref<ProductInterface[]>) {
  const productsCount = computed(() => productList.value.length);
  return { productsCount };
}
</script>
