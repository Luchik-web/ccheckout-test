/**
 * @packageDocumentation
 * @module CoreModule.domain
 * @author luchik
 */
/**
 * Base Product interface
 */
export interface CartItemInterface {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board)
    productId: number;
    sku: string;
    type: 'simple' | string;
    parentSku?: string;
    createdAt: Date;
    updatedAt: Date;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): base info to show
    name: string;
    icon: string;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): presence
    isPresent: boolean;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): price/quantity
    qty: number;
    price: number;
    specialPrice: number;
}

