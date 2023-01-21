import * as msRest from "@azure/ms-rest-js";
export declare class ComputerVisionClientContext extends msRest.ServiceClient {
    endpoint: string;
    credentials: msRest.ServiceClientCredentials;
    /**
     * Initializes a new instance of the ComputerVisionClientContext class.
     * @param endpoint Supported Cognitive Services endpoints.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions);
}
//# sourceMappingURL=computerVisionClientContext.d.ts.map