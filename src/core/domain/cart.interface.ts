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
    id?: string;

    ignoredSkus: string[],
    comment: string,
    cityId: number,
    createdAt: Date,
    updatedAt: Date,
    lastRayId: string

    // "customer": {
    //     "id": 1456476,
    //     "ucpId": "some-ucp-id",
    //     "documents": {
    //         "passport": {
    //             "id": 2364765,
    //             "series": "АК",
    //             "issuedBy": "ВЛРС",
    //             "issuedDate": "2023-02-13",
    //             "expireDate": "2023-02-13",
    //             "registeredBy": "АК"
    //         },
    //         "idPassport": {
    //             "id": 2364765,
    //             "series": "АК",
    //             "issuedBy": "ВЛРС",
    //             "issuedDate": "2023-02-13",
    //             "expireDate": "2023-02-13",
    //             "registeredBy": "АК"
    //         }
    //     },
    //     "contact": {
    //         "name": "Петр",
    //         "middleName": "Васильович",
    //         "lastName": "Наливайченко",
    //         "phone": "380661234456",
    //         "email": "user@gmail.com"
    //     }
    // },    // "customer": {
    //     "id": 1456476,
    //     "ucpId": "some-ucp-id",
    //     "documents": {
    //         "passport": {
    //             "id": 2364765,
    //             "series": "АК",
    //             "issuedBy": "ВЛРС",
    //             "issuedDate": "2023-02-13",
    //             "expireDate": "2023-02-13",
    //             "registeredBy": "АК"
    //         },
    //         "idPassport": {
    //             "id": 2364765,
    //             "series": "АК",
    //             "issuedBy": "ВЛРС",
    //             "issuedDate": "2023-02-13",
    //             "expireDate": "2023-02-13",
    //             "registeredBy": "АК"
    //         }
    //     },
    //     "contact": {
    //         "name": "Петр",
    //         "middleName": "Васильович",
    //         "lastName": "Наливайченко",
    //         "phone": "380661234456",
    //         "email": "user@gmail.com"
    //     }
    // },

    //////////////////////////////////////////////////////////////////////////////////////////
    // Entity Base data (always on board): subcarts
    subcarts: Array<SubcartInterface>;

    [x: string]: any;
}
