/**
 * @packageDocumentation
 * @module CoreModule.domain
 * @author luchik
 */

import { SubcartInterface } from './subcart.interface';

/**
 * Base Product interface
 */
export interface CartInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity System fields (non backend, related to Frontend only)

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    id?: number;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): subcarts
    subcarts: Array<SubcartInterface>;
}
