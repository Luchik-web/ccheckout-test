import { ProductInterface } from 'src/core/domain/product.interface';

/**
 * Product Service Interface
 */
export interface ProductsServiceInterface {
    getProductList(): Promise<ProductInterface>
}
