import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TopNavComponent from './src/components/TopNavComponent.vue';

installQuasar();

describe('components/TopNavComponent.vue', () => {
    it('should have component', async () => {
        expect(TopNavComponent).toBeTruthy();
    });

    it('should have phones', async () => {
        const wrapper = mount(TopNavComponent, {});
        expect(wrapper.findAll('.chkt-topnav-info__item')).toHaveLength(2);
    });
});
