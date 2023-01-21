import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { ComputerVisionClientContext } from "./computerVisionClientContext";
declare class ComputerVisionClient extends ComputerVisionClientContext {
    /**
     * Initializes a new instance of the ComputerVisionClient class.
     * @param endpoint Supported Cognitive Services endpoints.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions);
    /**
     * This operation extracts a rich set of visual features based on the image content.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within
     * your request, there is an optional parameter to allow you to choose which features to return. By
     * default, image categories are returned in the response.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.AnalyzeImageResponse>
     */
    analyzeImage(url: string, options?: Models.ComputerVisionClientAnalyzeImageOptionalParams): Promise<Models.AnalyzeImageResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    analyzeImage(url: string, callback: msRest.ServiceCallback<Models.ImageAnalysis>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    analyzeImage(url: string, options: Models.ComputerVisionClientAnalyzeImageOptionalParams, callback: msRest.ServiceCallback<Models.ImageAnalysis>): void;
    /**
     * This operation generates a description of an image in human readable language with complete
     * sentences. The description is based on a collection of content tags, which are also returned by
     * the operation. More than one description can be generated for each image. Descriptions are
     * ordered by their confidence score. Descriptions may include results from celebrity and landmark
     * domain models, if applicable.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.DescribeImageResponse>
     */
    describeImage(url: string, options?: Models.ComputerVisionClientDescribeImageOptionalParams): Promise<Models.DescribeImageResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    describeImage(url: string, callback: msRest.ServiceCallback<Models.ImageDescription>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    describeImage(url: string, options: Models.ComputerVisionClientDescribeImageOptionalParams, callback: msRest.ServiceCallback<Models.ImageDescription>): void;
    /**
     * Performs object detection on the specified image.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.DetectObjectsResponse>
     */
    detectObjects(url: string, options?: Models.ComputerVisionClientDetectObjectsOptionalParams): Promise<Models.DetectObjectsResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    detectObjects(url: string, callback: msRest.ServiceCallback<Models.DetectResult>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    detectObjects(url: string, options: Models.ComputerVisionClientDetectObjectsOptionalParams, callback: msRest.ServiceCallback<Models.DetectResult>): void;
    /**
     * This operation returns the list of domain-specific models that are supported by the Computer
     * Vision API. Currently, the API supports following domain-specific models: celebrity recognizer,
     * landmark recognizer.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param [options] The optional parameters
     * @returns Promise<Models.ListModelsResponse>
     */
    listModels(options?: msRest.RequestOptionsBase): Promise<Models.ListModelsResponse>;
    /**
     * @param callback The callback
     */
    listModels(callback: msRest.ServiceCallback<Models.ListModelsResult>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    listModels(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListModelsResult>): void;
    /**
     * This operation recognizes content within an image by applying a domain-specific model. The list
     * of domain-specific models that are supported by the Computer Vision API can be retrieved using
     * the /models GET request. Currently, the API provides following domain-specific models:
     * celebrities, landmarks.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON.
     * If the request failed, the response will contain an error code and a message to help understand
     * what went wrong.
     * @param model The domain-specific content to recognize.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.AnalyzeImageByDomainResponse>
     */
    analyzeImageByDomain(model: string, url: string, options?: Models.ComputerVisionClientAnalyzeImageByDomainOptionalParams): Promise<Models.AnalyzeImageByDomainResponse>;
    /**
     * @param model The domain-specific content to recognize.
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    analyzeImageByDomain(model: string, url: string, callback: msRest.ServiceCallback<Models.DomainModelResults>): void;
    /**
     * @param model The domain-specific content to recognize.
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    analyzeImageByDomain(model: string, url: string, options: Models.ComputerVisionClientAnalyzeImageByDomainOptionalParams, callback: msRest.ServiceCallback<Models.DomainModelResults>): void;
    /**
     * Optical Character Recognition (OCR) detects text in an image and extracts the recognized
     * characters into a machine-usable character stream.
     * Upon success, the OCR results will be returned.
     * Upon failure, the error code together with an error message will be returned. The error code can
     * be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,
     * NotSupportedLanguage, or InternalServerError.
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.RecognizePrintedTextResponse>
     */
    recognizePrintedText(detectOrientation: boolean, url: string, options?: Models.ComputerVisionClientRecognizePrintedTextOptionalParams): Promise<Models.RecognizePrintedTextResponse>;
    /**
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    recognizePrintedText(detectOrientation: boolean, url: string, callback: msRest.ServiceCallback<Models.OcrResult>): void;
    /**
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    recognizePrintedText(detectOrientation: boolean, url: string, options: Models.ComputerVisionClientRecognizePrintedTextOptionalParams, callback: msRest.ServiceCallback<Models.OcrResult>): void;
    /**
     * This operation generates a list of words, or tags, that are relevant to the content of the
     * supplied image. The Computer Vision API can return tags based on objects, living beings, scenery
     * or actions found in images. Unlike categories, tags are not organized according to a
     * hierarchical classification system, but correspond to image content. Tags may contain hints to
     * avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the
     * hint "fungus".
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagImageResponse>
     */
    tagImage(url: string, options?: Models.ComputerVisionClientTagImageOptionalParams): Promise<Models.TagImageResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    tagImage(url: string, callback: msRest.ServiceCallback<Models.TagResult>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    tagImage(url: string, options: Models.ComputerVisionClientTagImageOptionalParams, callback: msRest.ServiceCallback<Models.TagResult>): void;
    /**
     * This operation generates a thumbnail image with the user-specified width and height. By default,
     * the service analyzes the image, identifies the region of interest (ROI), and generates smart
     * cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio
     * that differs from that of the input image.
     * A successful response contains the thumbnail image binary. If the request failed, the response
     * contains an error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of
     * InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage,
     * FailedToProcess, Timeout, or InternalServerError.
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.GenerateThumbnailResponse>
     */
    generateThumbnail(width: number, height: number, url: string, options?: Models.ComputerVisionClientGenerateThumbnailOptionalParams): Promise<Models.GenerateThumbnailResponse>;
    /**
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    generateThumbnail(width: number, height: number, url: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    generateThumbnail(width: number, height: number, url: string, options: Models.ComputerVisionClientGenerateThumbnailOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * This operation returns a bounding box around the most important area of the image.
     * A successful response will be returned in JSON. If the request failed, the response contains an
     * error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of
     * InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess,
     * Timeout, or InternalServerError.
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.GetAreaOfInterestResponse>
     */
    getAreaOfInterest(url: string, options?: Models.ComputerVisionClientGetAreaOfInterestOptionalParams): Promise<Models.GetAreaOfInterestResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    getAreaOfInterest(url: string, callback: msRest.ServiceCallback<Models.AreaOfInterestResult>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    getAreaOfInterest(url: string, options: Models.ComputerVisionClientGetAreaOfInterestOptionalParams, callback: msRest.ServiceCallback<Models.AreaOfInterestResult>): void;
    /**
     * Use this interface to get the result of a Read operation, employing the state-of-the-art Optical
     * Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read
     * interface, the response contains a field called 'Operation-Location'. The 'Operation-Location'
     * field contains the URL that you must use for your 'GetReadResult' operation to access OCR
     * results.​
     * @param url Publicly reachable URL of an image.
     * @param [options] The optional parameters
     * @returns Promise<Models.ReadResponse>
     */
    read(url: string, options?: Models.ComputerVisionClientReadOptionalParams): Promise<Models.ReadResponse>;
    /**
     * @param url Publicly reachable URL of an image.
     * @param callback The callback
     */
    read(url: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param url Publicly reachable URL of an image.
     * @param options The optional parameters
     * @param callback The callback
     */
    read(url: string, options: Models.ComputerVisionClientReadOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * This interface is used for getting OCR results of Read operation. The URL to this interface
     * should be retrieved from 'Operation-Location' field returned from Read interface.
     * @param operationId Id of read operation returned in the response of the 'Read' interface.
     * @param [options] The optional parameters
     * @returns Promise<Models.GetReadResultResponse>
     */
    getReadResult(operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetReadResultResponse>;
    /**
     * @param operationId Id of read operation returned in the response of the 'Read' interface.
     * @param callback The callback
     */
    getReadResult(operationId: string, callback: msRest.ServiceCallback<Models.ReadOperationResult>): void;
    /**
     * @param operationId Id of read operation returned in the response of the 'Read' interface.
     * @param options The optional parameters
     * @param callback The callback
     */
    getReadResult(operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ReadOperationResult>): void;
    /**
     * This operation extracts a rich set of visual features based on the image content.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within
     * your request, there is an optional parameter to allow you to choose which features to return. By
     * default, image categories are returned in the response.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.AnalyzeImageInStreamResponse>
     */
    analyzeImageInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientAnalyzeImageInStreamOptionalParams): Promise<Models.AnalyzeImageInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    analyzeImageInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.ImageAnalysis>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    analyzeImageInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientAnalyzeImageInStreamOptionalParams, callback: msRest.ServiceCallback<Models.ImageAnalysis>): void;
    /**
     * This operation returns a bounding box around the most important area of the image.
     * A successful response will be returned in JSON. If the request failed, the response contains an
     * error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of
     * InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess,
     * Timeout, or InternalServerError.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.GetAreaOfInterestInStreamResponse>
     */
    getAreaOfInterestInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientGetAreaOfInterestInStreamOptionalParams): Promise<Models.GetAreaOfInterestInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    getAreaOfInterestInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.AreaOfInterestResult>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    getAreaOfInterestInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientGetAreaOfInterestInStreamOptionalParams, callback: msRest.ServiceCallback<Models.AreaOfInterestResult>): void;
    /**
     * This operation generates a description of an image in human readable language with complete
     * sentences. The description is based on a collection of content tags, which are also returned by
     * the operation. More than one description can be generated for each image. Descriptions are
     * ordered by their confidence score. Descriptions may include results from celebrity and landmark
     * domain models, if applicable.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.DescribeImageInStreamResponse>
     */
    describeImageInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientDescribeImageInStreamOptionalParams): Promise<Models.DescribeImageInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    describeImageInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.ImageDescription>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    describeImageInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientDescribeImageInStreamOptionalParams, callback: msRest.ServiceCallback<Models.ImageDescription>): void;
    /**
     * Performs object detection on the specified image.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.DetectObjectsInStreamResponse>
     */
    detectObjectsInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientDetectObjectsInStreamOptionalParams): Promise<Models.DetectObjectsInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    detectObjectsInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.DetectResult>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    detectObjectsInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientDetectObjectsInStreamOptionalParams, callback: msRest.ServiceCallback<Models.DetectResult>): void;
    /**
     * This operation generates a thumbnail image with the user-specified width and height. By default,
     * the service analyzes the image, identifies the region of interest (ROI), and generates smart
     * cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio
     * that differs from that of the input image.
     * A successful response contains the thumbnail image binary. If the request failed, the response
     * contains an error code and a message to help determine what went wrong.
     * Upon failure, the error code and an error message are returned. The error code could be one of
     * InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage,
     * FailedToProcess, Timeout, or InternalServerError.
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.GenerateThumbnailInStreamResponse>
     */
    generateThumbnailInStream(width: number, height: number, image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientGenerateThumbnailInStreamOptionalParams): Promise<Models.GenerateThumbnailInStreamResponse>;
    /**
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param image An image stream.
     * @param callback The callback
     */
    generateThumbnailInStream(width: number, height: number, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param width Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param height Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended
     * minimum of 50.
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    generateThumbnailInStream(width: number, height: number, image: msRest.HttpRequestBody, options: Models.ComputerVisionClientGenerateThumbnailInStreamOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * This operation recognizes content within an image by applying a domain-specific model. The list
     * of domain-specific models that are supported by the Computer Vision API can be retrieved using
     * the /models GET request. Currently, the API provides following domain-specific models:
     * celebrities, landmarks.
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON.
     * If the request failed, the response will contain an error code and a message to help understand
     * what went wrong.
     * @param model The domain-specific content to recognize.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.AnalyzeImageByDomainInStreamResponse>
     */
    analyzeImageByDomainInStream(model: string, image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientAnalyzeImageByDomainInStreamOptionalParams): Promise<Models.AnalyzeImageByDomainInStreamResponse>;
    /**
     * @param model The domain-specific content to recognize.
     * @param image An image stream.
     * @param callback The callback
     */
    analyzeImageByDomainInStream(model: string, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.DomainModelResults>): void;
    /**
     * @param model The domain-specific content to recognize.
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    analyzeImageByDomainInStream(model: string, image: msRest.HttpRequestBody, options: Models.ComputerVisionClientAnalyzeImageByDomainInStreamOptionalParams, callback: msRest.ServiceCallback<Models.DomainModelResults>): void;
    /**
     * Optical Character Recognition (OCR) detects text in an image and extracts the recognized
     * characters into a machine-usable character stream.
     * Upon success, the OCR results will be returned.
     * Upon failure, the error code together with an error message will be returned. The error code can
     * be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,
     * NotSupportedLanguage, or InternalServerError.
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.RecognizePrintedTextInStreamResponse>
     */
    recognizePrintedTextInStream(detectOrientation: boolean, image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientRecognizePrintedTextInStreamOptionalParams): Promise<Models.RecognizePrintedTextInStreamResponse>;
    /**
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param image An image stream.
     * @param callback The callback
     */
    recognizePrintedTextInStream(detectOrientation: boolean, image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.OcrResult>): void;
    /**
     * @param detectOrientation Whether detect the text orientation in the image. With
     * detectOrientation=true the OCR service tries to detect the image orientation and correct it
     * before further processing (e.g. if it's upside-down).
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    recognizePrintedTextInStream(detectOrientation: boolean, image: msRest.HttpRequestBody, options: Models.ComputerVisionClientRecognizePrintedTextInStreamOptionalParams, callback: msRest.ServiceCallback<Models.OcrResult>): void;
    /**
     * This operation generates a list of words, or tags, that are relevant to the content of the
     * supplied image. The Computer Vision API can return tags based on objects, living beings, scenery
     * or actions found in images. Unlike categories, tags are not organized according to a
     * hierarchical classification system, but correspond to image content. Tags may contain hints to
     * avoid ambiguity or provide context, for example the tag "ascomycete" may be accompanied by the
     * hint "fungus".
     * Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
     * A successful response will be returned in JSON. If the request failed, the response will contain
     * an error code and a message to help understand what went wrong.
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.TagImageInStreamResponse>
     */
    tagImageInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientTagImageInStreamOptionalParams): Promise<Models.TagImageInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    tagImageInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<Models.TagResult>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    tagImageInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientTagImageInStreamOptionalParams, callback: msRest.ServiceCallback<Models.TagResult>): void;
    /**
     * Use this interface to get the result of a Read operation, employing the state-of-the-art Optical
     * Character Recognition (OCR) algorithms optimized for text-heavy documents. When you use the Read
     * interface, the response contains a field called 'Operation-Location'. The 'Operation-Location'
     * field contains the URL that you must use for your 'GetReadResult' operation to access OCR
     * results.​
     * @param image An image stream.
     * @param [options] The optional parameters
     * @returns Promise<Models.ReadInStreamResponse>
     */
    readInStream(image: msRest.HttpRequestBody, options?: Models.ComputerVisionClientReadInStreamOptionalParams): Promise<Models.ReadInStreamResponse>;
    /**
     * @param image An image stream.
     * @param callback The callback
     */
    readInStream(image: msRest.HttpRequestBody, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param image An image stream.
     * @param options The optional parameters
     * @param callback The callback
     */
    readInStream(image: msRest.HttpRequestBody, options: Models.ComputerVisionClientReadInStreamOptionalParams, callback: msRest.ServiceCallback<void>): void;
}
export { ComputerVisionClient, ComputerVisionClientContext, Models as ComputerVisionModels, Mappers as ComputerVisionMappers };
//# sourceMappingURL=computerVisionClient.d.ts.map