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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  HistoryAdd,
  ResponseHistory,
  ResponseSetting,
  ResponseUser,
  Setting,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    HistoryAddFromJSON,
    HistoryAddToJSON,
    ResponseHistoryFromJSON,
    ResponseHistoryToJSON,
    ResponseSettingFromJSON,
    ResponseSettingToJSON,
    ResponseUserFromJSON,
    ResponseUserToJSON,
    SettingFromJSON,
    SettingToJSON,
} from '../models';

export interface AddHistoryHistoryAddClassNamePostRequest {
    className: string;
    total: number;
    change: number;
    product: string;
}

export interface GetHistoryHistoryClassNameGetRequest {
    className: string;
}

export interface GetSettingSettingClassNameGetRequest {
    className: string;
}

export interface SetSettingSettingSetClassNamePostRequest {
    className: string;
    goal: number;
    reserve: number;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Add History
     */
    async addHistoryHistoryAddClassNamePostRaw(requestParameters: AddHistoryHistoryAddClassNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HistoryAdd>> {
        if (requestParameters.className === null || requestParameters.className === undefined) {
            throw new runtime.RequiredError('className','Required parameter requestParameters.className was null or undefined when calling addHistoryHistoryAddClassNamePost.');
        }

        if (requestParameters.total === null || requestParameters.total === undefined) {
            throw new runtime.RequiredError('total','Required parameter requestParameters.total was null or undefined when calling addHistoryHistoryAddClassNamePost.');
        }

        if (requestParameters.change === null || requestParameters.change === undefined) {
            throw new runtime.RequiredError('change','Required parameter requestParameters.change was null or undefined when calling addHistoryHistoryAddClassNamePost.');
        }

        if (requestParameters.product === null || requestParameters.product === undefined) {
            throw new runtime.RequiredError('product','Required parameter requestParameters.product was null or undefined when calling addHistoryHistoryAddClassNamePost.');
        }

        const queryParameters: any = {};

        if (requestParameters.total !== undefined) {
            queryParameters['total'] = requestParameters.total;
        }

        if (requestParameters.change !== undefined) {
            queryParameters['change'] = requestParameters.change;
        }

        if (requestParameters.product !== undefined) {
            queryParameters['product'] = requestParameters.product;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/history/add/{class_name}`.replace(`{${"class_name"}}`, encodeURIComponent(String(requestParameters.className))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HistoryAddFromJSON(jsonValue));
    }

    /**
     * Add History
     */
    async addHistory(requestParameters: AddHistoryHistoryAddClassNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HistoryAdd> {
        const response = await this.addHistoryHistoryAddClassNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get History
     */
    async getHistoryHistoryClassNameGetRaw(requestParameters: GetHistoryHistoryClassNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ResponseHistory>>> {
        if (requestParameters.className === null || requestParameters.className === undefined) {
            throw new runtime.RequiredError('className','Required parameter requestParameters.className was null or undefined when calling getHistoryHistoryClassNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/history/{class_name}`.replace(`{${"class_name"}}`, encodeURIComponent(String(requestParameters.className))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ResponseHistoryFromJSON));
    }

    /**
     * Get History
     */
    async getHistory(requestParameters: GetHistoryHistoryClassNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ResponseHistory>> {
        const response = await this.getHistoryHistoryClassNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Islogin
     */
    async getIsloginAuthGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/auth`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Get Islogin
     */
    async getIslogin(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getIsloginAuthGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get Setting
     */
    async getSettingSettingClassNameGetRaw(requestParameters: GetSettingSettingClassNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseSetting>> {
        if (requestParameters.className === null || requestParameters.className === undefined) {
            throw new runtime.RequiredError('className','Required parameter requestParameters.className was null or undefined when calling getSettingSettingClassNameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/setting/{class_name}`.replace(`{${"class_name"}}`, encodeURIComponent(String(requestParameters.className))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseSettingFromJSON(jsonValue));
    }

    /**
     * Get Setting
     */
    async getStoreSetting(requestParameters: GetSettingSettingClassNameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseSetting> {
        const response = await this.getSettingSettingClassNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Userinfo
     */
    async getUserinfoUserGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ResponseUser>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseUserFromJSON(jsonValue));
    }

    /**
     * Get Userinfo
     */
    async getUserinfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ResponseUser> {
        const response = await this.getUserinfoUserGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Index
     */
    async indexGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Index
     */
    async indexGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.indexGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Set Setting
     */
    async setSettingSettingSetClassNamePostRaw(requestParameters: SetSettingSettingSetClassNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Setting>> {
        if (requestParameters.className === null || requestParameters.className === undefined) {
            throw new runtime.RequiredError('className','Required parameter requestParameters.className was null or undefined when calling setSettingSettingSetClassNamePost.');
        }

        if (requestParameters.goal === null || requestParameters.goal === undefined) {
            throw new runtime.RequiredError('goal','Required parameter requestParameters.goal was null or undefined when calling setSettingSettingSetClassNamePost.');
        }

        if (requestParameters.reserve === null || requestParameters.reserve === undefined) {
            throw new runtime.RequiredError('reserve','Required parameter requestParameters.reserve was null or undefined when calling setSettingSettingSetClassNamePost.');
        }

        const queryParameters: any = {};

        if (requestParameters.goal !== undefined) {
            queryParameters['goal'] = requestParameters.goal;
        }

        if (requestParameters.reserve !== undefined) {
            queryParameters['reserve'] = requestParameters.reserve;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/setting/set/{class_name}`.replace(`{${"class_name"}}`, encodeURIComponent(String(requestParameters.className))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingFromJSON(jsonValue));
    }

    /**
     * Set Setting
     */
    async setStoreSetting(requestParameters: SetSettingSettingSetClassNamePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Setting> {
        const response = await this.setSettingSettingSetClassNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
