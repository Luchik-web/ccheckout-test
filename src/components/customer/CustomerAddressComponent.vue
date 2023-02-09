<script lang="ts">
import { defineComponent, ref } from 'vue';
import InlineSvg from 'vue-inline-svg';

export default defineComponent({
    name: 'AppCustomerAddressComponent',
    components: {
        InlineSvg,
    },
    setup() {
        const iconSrc = ref('./images/ui/icons/location.svg');
        const iconSize = ref('lg');

        return {
            iconSrc,
            iconSize,
        };
    },
});
</script>

<template>
    <section class="chckt-section chckt-section--mb">
        <q-icon name="svguse:location.svg#icon-1"></q-icon>
        <q-avatar
            :size="iconSize"
            color="accent"
            text-color="white"
        >
            <inline-svg :src="iconSrc" />
        </q-avatar>
        Ваше місто
        Дніпро
        <q-btn
            color="primary"
            no-caps
            label="Змiнити"
        />
    </section>
</template>

<style lang="scss">
</style>
