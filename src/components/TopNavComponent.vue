<template>
    <div class="chkt-topnav-info">
        <div class="chkt-topnav-info__item">
            {{ $t('free_in_ukraine') }}:
            <a href="tel:0-800-303-505">0-800-303-505</a>
        </div>
        <div class="chkt-topnav-info__item">
            {{ $t('free_in_kiev') }}:
            <a href="tel:044-39-39-505">044-39-39-505</a>
        </div>
    </div>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppTopNavComponent',
});
</script>
