<template>
    <q-header elevated>
        <q-toolbar>
            <q-toolbar-title>
                <q-icon :name="icon" />
            </q-toolbar-title>

            <div class=".chapp-topnav-info">
                <div class="chapp-topnav-info__item">Безкоштовно по Україні:
                    <a href="tel:0-800-303-505">0-800-303-505</a>
                </div>
                <div class="chapp-topnav-info__item">Безкоштовно по Києву:
                    <a href="tel:044-39-39-505">044-39-39-505</a>
                </div>
            </div>
        </q-toolbar>
    </q-header>
</template>

<style lang="scss">
.q-toolbar {
    background-color: #fff; //var(--q-primary);
    color: #616161;
}
.q-icon {
    width: auto;
}
.chapp-topnav-info {
    &__item {
        display: inline-block;

        &:not(:last-child):after {
            content: "/";
            padding-left: 4px;
            padding-right: 4px;
        }
    }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNavComponent',
  props: {
    icon: {
      type: String,
      default: 'img:src/assets/logo_main.svg'
    }
  },
});
</script>
