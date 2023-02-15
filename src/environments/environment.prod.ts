/**
 * @packageDocumentation
 * @module Checkout.Environments
 * @author luchik
 */
import { environment as _environment } from '@comfy/core/src/environments/environment.prod';
import { EnvironmentInterface } from './environment.interface';

export const environment: EnvironmentInterface = Object.assign(_environment, {
});
