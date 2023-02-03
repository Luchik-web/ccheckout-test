/**
 * @packageDocumentation
 * @module CoreModule.config
 * @author luchik
 */

import { environment } from '@app-core/config/environment';

interface AppiEndpointsInterface {
    name: string,
    method: 'POST' | 'GET',
    api_route: string,
}

export const AppiEndpointsConfig: Array<AppiEndpointsInterface> = [
    // sso
    {
        name: 'current_user.sso_doitorg.get_external_user',
        method: 'POST',
        api_route: environment.apiUrl + '/api/v3/doit/claim_doitorg_account',
    },
];
