<template>
    <div>
        {{ product?.id }} - {{ product?.price }}
    </div>
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
