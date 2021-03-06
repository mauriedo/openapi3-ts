// Typed interfaces for OpenAPI 3.0.0-RC
// see https://github.com/OAI/OpenAPI-Specification/blob/3.0.0-rc0/versions/3.0.md

import { ISpecificationExtension } from "./SpecificationExtension";

export interface OpenAPIObject extends ISpecificationExtension {
    openapi: string;
    info: InfoObject;
    servers?: ServerObject[];
    paths: {[path: string]: PathObject };
    components: ComponentsObject;
    security?: SecurityRequirementObject;
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
}
export interface InfoObject extends ISpecificationExtension {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
    version?: string;
}
export interface ContactObject extends ISpecificationExtension {
    name: string;
    url: string;
    email: string;
}
export interface LicenseObject extends ISpecificationExtension {
    name: string;
    url: string;
}
export interface ServerObject extends ISpecificationExtension {
    url: string;
    description?: string;
    variables: { [v: string]: ServerVariableObject };
}
export interface ServerVariableObject extends ISpecificationExtension {
    enum?: string[] | boolean[] | number[];
    default: string | boolean | number;
    description?: string;
}
export interface ComponentsObject extends ISpecificationExtension {
    schemas: { [schema: string]: SchemaObject };
    responses: { [response: string]: ResponseObject };
    parameters: { [parameter: string]: ParameterObject };
    examples: { [example: string]: ExampleObject };
    requestBodies: { [request: string]: RequestBodyObject };
    headers: { [heaer: string]: HeaderObject };
    securitySchemes: { [securityScheme: string]: SecuritySchemeObject };
    links: { [link: string]: LinkObject };
    callbacks: { [callback: string]: CallbackObject };
}
export interface PathObject extends ISpecificationExtension {
    // [path: string]: PathItemObject;
    [path: string]: PathItemObject | any;   // Hack for allowing ISpecificationExtension
}
export interface PathItemObject extends ISpecificationExtension {
    $ref?: string;
    summary?: string;
    description?: string;
    get?: OperationObject;
    put?: OperationObject;
    post?: OperationObject;
    delete?: OperationObject;
    options?: OperationObject;
    head?: OperationObject;
    patch?: OperationObject;
    trace?: OperationObject;
    servers?: ServerObject;
    parameters?: { [param: string]: ParameterObject };
}
export interface OperationObject extends ISpecificationExtension {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    parameters?: [ ParameterObject | ReferenceObject ];
    requestBody?: [ RequestBodyObject | ReferenceObject ];
    responses: ResponsesObject;
    callbacks?: CallbacksObject;
    deprecated?: boolean;
    security?: SecurityRequirementObject;
    servers?: ServerObject;
}
export interface ExternalDocumentationObject extends ISpecificationExtension {
    url: string;
    description: string;
}
export interface ParameterObject extends ISpecificationExtension {
    name: string;
    in: string; // "query" | "header" | "path" | "cookie";
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;

    style?: string; // "matrix" | "label" | "form" | "simple" | "spaceDelimited" | "pipeDelimited" | "deepObject";
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject | ReferenceObject;
    examples?: [ ExampleObject | ReferenceObject ];
    example?: ExampleObject | ReferenceObject;
    content?: ContentObject;
}
export interface RequestBodyObject extends ISpecificationExtension {
    description?: string;
    content?: ContentObject;
    required?: boolean;
}
export interface ContentObject {
    [mediatype: string]: MediaTypeObject;
}
export interface MediaTypeObject extends ISpecificationExtension {
    schema?: SchemaObject | ReferenceObject;
    examples?: [ ExampleObject | ReferenceObject ];
    example?: ExampleObject | ReferenceObject;
    encoding?: EncodingObject;
}
export interface EncodingObject extends ISpecificationExtension {
    // [property: string]: EncodingPropertyObject;
    [property: string]: EncodingPropertyObject | any;   // Hack for allowing ISpecificationExtension
}
export interface EncodingPropertyObject {
    contentType: string;
    Headers: any;
    style: string;
    explode: boolean;
}
export interface ResponsesObject extends ISpecificationExtension {
    default: ResponseObject | ReferenceObject;

    // [statuscode: string]: ResponseObject | ReferenceObject;
    [statuscode: string]: ResponseObject | ResponseObject | any;   // Hack for allowing ISpecificationExtension
}
export interface ResponseObject extends ISpecificationExtension {
    description?: string;
    headers?: HeadersObject;
    content?: ContentObject;
    links?: LinksObject;
}
export interface CallbacksObject extends ISpecificationExtension {
    // [name: string]: CallbackObject | ReferenceObject;
    [name: string]: CallbackObject | ReferenceObject | any;   // Hack for allowing ISpecificationExtension
}
export interface CallbackObject extends ISpecificationExtension {
    // [name: string]: PathItemObject;
    [name: string]: PathItemObject | any;   // Hack for allowing ISpecificationExtension
}
export interface HeadersObject {
    [name: string]: HeaderObject | ReferenceObject;
}
export interface ExampleObject {
    [property: string]: any;
}
export interface LinksObject {
    [name: string]: LinkObject | ReferenceObject;
}
export interface LinkObject extends ISpecificationExtension {
    href?: string;
    operationId?: string;
    parameters?: LinkParametersObject;
    headers?: HeadersObject;
    description?: string;
}
export interface LinkParametersObject {
    [name: string]: any;
}
export interface HeaderObject extends ParameterObject {
}
export interface TagObject extends ISpecificationExtension {
    name: string;
    description: string;
    externalDocs?: ExternalDocumentationObject;
}
export interface ExamplesObject {
    [name: string]: any;
}
export interface ReferenceObject {
    $ref: string;
}
export interface SchemaObject extends ISpecificationExtension {
    nullable?: boolean;
    discriminator?: string;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: XmlObject;
    externalDocs?: ExternalDocumentationObject;
    example?: any;
    examples?: any[];
    deprecated?: boolean;

    type?: string;
    allOf?: SchemaObject | ReferenceObject;
    oneOf?: SchemaObject | ReferenceObject;
    anyOf?: SchemaObject | ReferenceObject;
    not?: SchemaObject | ReferenceObject;
    items?: SchemaObject | ReferenceObject;
    properties?: SchemaObject | ReferenceObject;
    additionalProperties?: SchemaObject | ReferenceObject;
    description?: string;
    format?: string;
    default?: any;
}

export interface XmlObject extends ISpecificationExtension {
    name: string;
    namespace: string;
    prefix: string;
    attribute: boolean;
    wrapped: boolean;
}
export interface SecuritySchemeObject extends ISpecificationExtension {
    type: string;
    name?: string;
    in?: string;
    description?: string;
    scheme?: string;
    bearerFormat?: string;
    flow?: OAuthFlowObject;
    openIdConnectUrl?: string;
}
export interface OAuthFlowsObject extends ISpecificationExtension {
    implicit: OAuthFlowObject;
    password: OAuthFlowObject;
    clientCredentials: OAuthFlowObject;
    authorizationCode: OAuthFlowObject;
}
export interface OAuthFlowObject extends ISpecificationExtension {
    authorizationUrl: string;
    tokenUrl: string;
    refreshUrl: string;
    scopes: ScopesObject;
}
export interface ScopesObject extends ISpecificationExtension {
    // [scope: string]: string;
    [scope: string]: string | any; // Hack for allowing ISpecificationExtension
}
export interface SecurityRequirementObject {
    [name: string]: [string];
}

