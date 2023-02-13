/**
 * Base Request adapter
 */
import axios, { /*AxiosResponse,*/ CancelToken, CancelTokenSource } from 'axios';
// import https from 'https';
import { AppiEndpointsType, AppiEndpointsConfig, AppiEndpointsInterface } from '../../config/api-endpoint.config';
// import { environment } from '../config/environment';

export type ApiOptions = {
    baseUrl: string;
    rayId: string;
    sessionId: string;
    trace?: Map<string, number>;
    headers?: {
        [key: string]: string;
    };
};

export type RequestData = {
    path: string;
    method: string;
    data?: any;
    cancelToken: CancelTokenSource;
    time: number;
};

class RequestAdapter {
    private _requests: Array<RequestData> = []

    public request<T>(apiEndpointAlias: AppiEndpointsType): Promise<T> {
        if (!AppiEndpointsConfig.has(apiEndpointAlias)) {
            throw new Error('Config not found')
        }
        const config: AppiEndpointsInterface | undefined = AppiEndpointsConfig.get(apiEndpointAlias)
        if (!config) {
            throw new Error('Config not found')
        }

        return this._request<T>(config.method, config.api_route)
    }

    private _request<T>(
        method: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'DELETE',
        url: string,
        data?: any,
        options?: ApiOptions
        // requestType: RequestType = RequestType.Default
    ): Promise<T> {
        // const started = Date.now()

        let cancelToken: CancelToken | undefined

        return new Promise((resolve, reject) => {
            axios({
                method,
                url,
                // environment.request_timeout_default_ms,
                headers: this.__getHeaders(options),
                data,
                withCredentials: true,
                // httpsAgent: new https.Agent({
                //     rejectUnauthorized: false
                // }),
                cancelToken,
            })
                .then((response: any) => {
                    if (response.status >= 200 && response.status < 300) {
                        return resolve(<T>response.data)
                    } else {
                        throw response.data
                    }
                })
                .catch((e: Error) => {
                    if (axios.isCancel(e)) {
                        console.warn('Request canceled', e.message)
                    } else {
                        console.warn('Request failed')
                        // logExternalError(method, url, started, null, e, options)
                    }

                    return reject(e)
                })
            // .finally(() => {
            //     singleRequest.requestCompleted(method, url, started)
            // })
        })
    }

    private __getHeaders(options?: ApiOptions): any {
        const headers: any = {
            'Content-Type': 'application/json',
        }

        if (options) {
            headers['X-Ray-Id'] = options.rayId
            headers['X-Session-Id'] = options.sessionId
        }

        if (!options?.headers) {
            return headers
        }

        for (const prop in options.headers) {
            if (!Object.getOwnPropertyDescriptor(options.headers, prop) || !options.headers[prop]) {
                continue
            }
            headers[prop] = options.headers[prop]
        }

        return headers
    }
}

export const RequestAdapterInstance = new RequestAdapter()
