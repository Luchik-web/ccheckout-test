/**
 * @packageDocumentation
 * @module Checkout.Config
 * @author luchik
 */
import { environment as _environment } from '@comfy/core/src/config/environment';
import { EnvironmentInterface as CoreEnvironmentInterface } from '@comfy/core/src/config/environment';

export type EnvironmentInterface = CoreEnvironmentInterface;
/**
 * Redefine environment to use proper settings
 */
export const environment: EnvironmentInterface = Object.assign(_environment, {});
