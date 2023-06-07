/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ResponseHistory
 */
export interface ResponseHistory {
    /**
     * 
     * @type {string}
     * @memberof ResponseHistory
     */
    paymentId: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseHistory
     */
    paidClass: string;
    /**
     * 
     * @type {Date}
     * @memberof ResponseHistory
     */
    timestamp: Date;
    /**
     * 
     * @type {number}
     * @memberof ResponseHistory
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof ResponseHistory
     */
    change: number;
    /**
     * 
     * @type {string}
     * @memberof ResponseHistory
     */
    product: string;
}

/**
 * Check if a given object implements the ResponseHistory interface.
 */
export function instanceOfResponseHistory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "paymentId" in value;
    isInstance = isInstance && "paidClass" in value;
    isInstance = isInstance && "timestamp" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "change" in value;
    isInstance = isInstance && "product" in value;

    return isInstance;
}

export function ResponseHistoryFromJSON(json: any): ResponseHistory {
    return ResponseHistoryFromJSONTyped(json, false);
}

export function ResponseHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentId': json['payment_id'],
        'paidClass': json['paid_class'],
        'timestamp': (new Date(json['timestamp'])),
        'total': json['total'],
        'change': json['change'],
        'product': json['product'],
    };
}

export function ResponseHistoryToJSON(value?: ResponseHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_id': value.paymentId,
        'paid_class': value.paidClass,
        'timestamp': (value.timestamp.toISOString()),
        'total': value.total,
        'change': value.change,
        'product': value.product,
    };
}
