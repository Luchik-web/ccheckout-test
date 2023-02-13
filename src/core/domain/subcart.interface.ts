/**
 * @packageDocumentation
 * @module CoreModule.domain
 * @author luchik
 */

import { CartItemInterface } from './cart-item.interface'

/**
 * Base Product interface
 */
export interface SubcartInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    id: number;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): items
    items: Array<CartItemInterface>;

}
