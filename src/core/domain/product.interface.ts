/**
 * @packageDocumentation
 * @module CoreModule.domain
 * @author luchik
 */
/**
 * Base Product interface
 */
export interface ProductInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity System fields (non backend, related to Frontend only)

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    id: number;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): price
    price: number;
    discount: number;
}