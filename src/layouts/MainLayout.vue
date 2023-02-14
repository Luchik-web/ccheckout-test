<script lang="ts">
import { defineComponent, ref, computed, ComputedRef } from 'vue';
// Domain
import { CartInterface } from '@comfy/core/src/core/domain/cart.interface';
// App Services
import { useCounterStore } from 'src/core/stores/cart/cart';
// Components
import AppTopNavComponent from 'components/TopNavComponent.vue';
import AppCartSummaryComponent from 'components/cart/CartSummaryComponent.vue';

export default defineComponent({
    name: 'MainLayout',

    components: {
        AppTopNavComponent,
        AppCartSummaryComponent,
    },

    setup() {
        const store = useCounterStore();
        const cart: ComputedRef<CartInterface> = computed(() => store.cart);

        const drawerLeft = ref(true);
        const drawerRight = ref(true);
        const icon = ref('img:./images/ui/logos/logo_main.svg');

        setTimeout(()  => {
            void store.init();
        }, 2000)

        return {
            icon,
            drawerLeft,
            drawerRight,
            cart,
            toggleLeftDrawer() {
                drawerLeft.value = !drawerLeft.value;
            },
            toggleRightDrawer() {
                drawerRight.value = !drawerRight.value;
            },
        };
    },
});

</script>

<template>
    <q-layout view="lhh LpR lff" class="chkt-layout bg-grey-3">
        <q-header class="chkt-layout-topnav">
            <q-toolbar>
                <q-toolbar-title>
                    <q-icon :name="icon" />
                </q-toolbar-title>

                <AppTopNavComponent />
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="drawerRight"
            side="right"
            :width="320"
            :breakpoint="500"
            class="bg-grey-3"
        >
            <q-scroll-area class="fit">
                <div class="q-pa-sm">
                    <AppCartSummaryComponent :cart="cart" />
                </div>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<!-- .chkt-layout {
    background: transparent !important;
} -->

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
            content: '/';
            padding-left: 4px;
            padding-right: 4px;
        }
    }
}
.chkt-layout-topnav {
    color: #616161 !important;
    background: #fff !important;
}
</style>
