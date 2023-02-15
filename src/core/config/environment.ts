/**
 * @packageDocumentation
 * @module Checkout.Config
 * @author luchik
 */
import { environment as _environment } from '@comfy/core/src/config/environment';
import { EnvironmentInterface as CoreEnvironmentInterface } from '@comfy/core/src/config/environment';

export interface EnvironmentInterface extends CoreEnvironmentInterface {
    apiUrl: string;
}
/**
 * Redefine environment to use proper settings
 */
export const environment: EnvironmentInterface = Object.assign(_environment, {
};
