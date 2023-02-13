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
    id: string;

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): items
    items: Array<CartItemInterface>;
    //     "source": "site",
    //     "orderId": "789987565",
    //     "actionsCalculatedAt": "2023-02-13T15:57:18.257Z",
    //     "deliveriesCalculatedAt": "2023-02-13T15:57:18.257Z",
    //     "state": {
    //         "active": true,
    //         "needCall": true
    //     },
    //     "delivery": {
    //         "id": "pickup",
    //         "method": "carry_carry",
    //         "warehouseId": 300,
    //         "pickupPoint": "455",
    //         "pickupDate": "2022-02-02",
    //         "amount": 99,
    //         "contact": {
    //             "name": "Петр",
    //             "middleName": "Васильович",
    //             "lastName": "Наливайченко",
    //             "phone": "380661234456",
    //             "email": "user@gmail.com"
    //         },
    //         "address": {
    //             "city": "Дніпро",
    //             "street": "Виноградська",
    //             "house": 34,
    //             "flat": 45,
    //             "floor": 5,
    //             "elevator": true
    //         },
    //         "options": {
    //             "pickup": [
    //                 {
    //                     "id": 484,
    //                     "closestDate": "2023-02-13"
    //                 }
    //             ],
    //             "post": [
    //                 {
    //                     "id": "484",
    //                     "groupId": "ПО",
    //                     "closestDate": "2023-02-13",
    //                     "amount": 99
    //                 }
    //             ]
    //         }
    //     },
    //     "payment": {
    //         "method": "checkmo",
    //         "credit": {
    //             "name": "Плата частями",
    //             "bank": {
    //                 "id": 4545,
    //                 "name": "Якась назва"
    //             },
    //             "period": 8,
    //             "monthlyPayment": 2999,
    //             "dateIssued": "2023-02-13",
    //             "initialPayment": 55,
    //             "isVerified": true,
    //             "verificationCode": "6547685",
    //             "creditItemId": "IM Р5-5",
    //             "creditAmount": 54323,
    //             "isCreditBroker": true
    //         }
    //     },
    //     "coupons": [
    //         {
    //             "code": "DAY"
    //         }
    //     ],
    //     "bonuses": {
    //         "cardNumber": "29499900099944",
    //         "amountUsed": 100
    //     }

    [x: string]: any;
}
