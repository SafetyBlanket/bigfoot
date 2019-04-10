import { Organization } from './contact.model';
import { image, action} from './common.model';

export interface yearsAttended {
    from: Date;
    to: Date;
}

export interface Institution extends Organization {
    logo: image;
    degrees: Array<string>;
    accolades?: Array<string>;
    gpa?: string;
    attended: Array<yearsAttended>;
    actions?: Array<action>
}

export const Education: Array<Institution> = [{
    url: `http://www.barstow.edu/`,
    logo: { 
        src: `assets/img/schools/bcc.jpg`, 
        alt: 'bcc logo' 
    },
    img: {
        src: `assets/img/schools/bcc.jpg`,
        alt: `BCC logo`,
        height: `200`
    },
    name: `Barstow College`,
    degrees: [`Associate of Applied Science in Computer Science`],
    attended: [{
        from: new Date(2010, 6, 1),
        to: new Date(2012, 10, 16)
    }],
    address: [{
        street1: `2700 Barstow Rd`,
        city: `Barstow`,
        state: `California`,
        zip: `92311`,
        county: `San Bernardino`,
        country: `United States`
    }],
    description: ``,
    tags: [
        `Hardware Architecture`,
        `Software Programming`,
        `Database Design and Administration`
    ],
    actions: [{
        name: `Website`,
        url: `http://www.barstow.edu/`
    }]
}, {
    url: `https://get-started.devry.edu`,
    logo: { src: `assets/img/schools/devry.jpg`, alt: 'devry logo' },
    img: {
        src: `assets/img/schools/devry.jpg`,
        alt: `Devry logo`,
        height: `200`
    },
    name: `Devry University`,
    degrees: [`Bachelor of Science in Game and Simulation Programming`],
    attended: [{
        from: new Date(2003, 8),
        to: new Date(2004, 4)
    }, {
        from: new Date(2008, 12),
        to: new Date(2009, 12)
    }],
    address: [{
        street1: `901 Corporate Center Dr`,
        city: `Pomona`,
        state: `California`,
        zip: `91768`,
        county: `Los Angeles County`,
        country: `United States`
    }],
    description: ``,
    tags: [
        `Software Engineering`,
        `Design Patterns`,
        `Software Engine Design`,
        `Artificial Intelligence`
    ],
    actions: [{
        name: `Website`,
        url: `https://get-started.devry.edu`
    }]
}]