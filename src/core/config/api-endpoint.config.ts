/**
 * @packageDocumentation
 * @module CoreModule.config
 * @author luchik
 */

import { environment } from 'src/core/config/environment';

export type AppiEndpointsType = 'checkout.products.fetch'
    | 'checkout.cart.get';

export interface AppiEndpointsInterface {
    name: string;
    method: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'DELETE';
    api_route: string;
}

export const AppiEndpointsConfig: Map<AppiEndpointsType, AppiEndpointsInterface> = new Map<
    AppiEndpointsType,
    AppiEndpointsInterface
>([
    [
        'checkout.products.fetch',
        {
            name: 'Get list of all products avaliable in checkout',
            method: 'POST',
            api_route: environment.apiUrl + '/json/products.json',
        },
    ],
    [
        'checkout.cart.get',
        {
            name: 'Get Cart',
            method: 'GET',
            api_route: environment.apiUrl + '/json/cart.json',
        },
    ],
]);
