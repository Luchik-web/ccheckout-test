/**
 * @packageDocumentation
 * @module CoreModule.config
 * @author luchik
 */

const locationOrigin = 'undefined' === typeof window ? '' : window.location.origin;
const locationHost = 'undefined' === typeof window ? '' : window.location.host;

const apiUrl = locationOrigin;

export interface EnvironmentInterface {
    locationOrigin: string;
    locationHost: string;
    apiUrl: string;
    request_timeout_default_ms: number;
}
/**
 * Redefine environment to use proper settings
 */
export const environment: EnvironmentInterface = {
    locationOrigin: locationOrigin,
    locationHost: locationHost,
    apiUrl: apiUrl,
    request_timeout_default_ms: 60000,
};
