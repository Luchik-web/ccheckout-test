// import { Get } from '../../http';
import { ProductInterface } from 'src/core/domain/product.interface';
import { RequestAdapterInstance } from 'src/core/infrastructure/request/request.adapter';
import { ProductsServiceInterface } from './products.service.interface';

/**
 * https://confluence.comfy.ua/pages/viewpage.action?pageId=39911058
 */
class ProductsService implements ProductsServiceInterface {
    public ii = 0;
    /**
     * Get list of Product items
     *
     * @param any options
     * @returns Promise<ProductInterface[]>
     */
    async getProductList(): Promise<ProductInterface[]> {
        this.ii += 1;
        console.log(`this.ii = ${this.ii}`);

        return await RequestAdapterInstance.request<ProductInterface[]>('checkout.products.fetch');
    }
}

export const ProductsServiceInstance = new ProductsService();
