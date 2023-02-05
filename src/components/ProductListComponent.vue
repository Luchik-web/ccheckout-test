<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="product in productList" :key="product.id" @click="increment">
        {{ product.id }} - {{ product.price }}
      </li>
    </ul>
    <p>Count: {{ productsCount }} products</p>
    <p>Clicks on products: {{ clickCount }}</p>
  </div>
</template>

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
