export interface Organization {
    url: string;
    img: string;
    name: string;
    email?: string;
    address: Array<Address>;
    description?: string;
    tags?: Array<string>;
}

export interface Address {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
    county?: string;
    country: string;
    type?: string;
}

export interface Phone {
    type: string;
    countryCode: string;
    areaCode: string;
    prefix: string;
    lineNumber: string;
}
