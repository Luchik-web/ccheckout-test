import { ProductInterface } from 'src/core/domain/product.interface';

/**
 * Product Service Interface
 */
export interface ProductsServiceInterface {
    /**
     * Get list of Product items
     *
     * @param any options
     * @returns Promise<ProductInterface[]>
     */
    getProductList(options?: any): Promise<ProductInterface[]>
}
