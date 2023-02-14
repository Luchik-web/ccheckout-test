// import { Get } from '../../http';
import { CartInterface } from '@comfy/core/src/domain/cart.interface';
import { RequestAdapterInstance } from 'src/core/infrastructure/request/request.adapter';
import { CartServiceInterface } from '@comfy/core/src/services/cart.service.interface';

/**
 * https://confluence.comfy.ua/pages/viewpage.action?pageId=39911058
 */
class CartService implements CartServiceInterface {
    public ii = 0
    /**
     * Get list of Product items
     *
     * @param any options
     * @returns Promise<CartInterface>
     */
    async getCart(): Promise<CartInterface> {
        this.ii += 1
        console.log(`this.ii = ${this.ii}`)

        return await RequestAdapterInstance.request<CartInterface>('checkout.cart.get')
    }
}

export const CartServiceInstance = new CartService()
