<template>
    <!-- <q-item
        clickable
        tag="a"
        target="_blank"
        :href="link"
    >
    </q-item> -->
    <q-item
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
    </q-item>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRef,
} from 'vue';
import { ProductInterface } from 'src/core/domain/product.interface';

export default defineComponent({
  name: 'ProductShortComponent',
  props: {
    product: {
      type: Object as PropType<ProductInterface>,
      default: () => null,
    },
  },
  setup (props) {
    return {
        ...toRef(props, 'product'),
    };
  },
});
</script>
