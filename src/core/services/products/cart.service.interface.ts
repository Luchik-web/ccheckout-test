import { CartInterface } from '@comfy/core/src/domain/cart.interface';

/**
 * Product Service Interface
 */
export interface CartServiceInterface {
    /**
     * Get list of Product items
     *
     * @param any options
     * @returns Promise<CartInterface>
     */
    getCart(options?: any): Promise<CartInterface>;
}
