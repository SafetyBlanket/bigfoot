import { Address, Phone, Organization } from './contact.model';

export interface OrganizationYears {
    from: Date;
    to: Date;
}

export interface Reference {
    firstName: string;
    lastName: string;
    middle?: string;
    phone: Phone;
    title: string;
    responsibilities: string[];
    relationship: string;
    address: Address;
    email: string;
}

export interface WorkExperience {
    position: string;
    company: Organization;
    description: string;
    duration: OrganizationYears[];
    responsibilities: string[];
    references?: Reference;
}

export const Army: Organization = {
    url: `https://www.goarmy.com/`,
    img: { src: `assets/img/companies/army.png`, alt: 'Army' },
    name: `United States Army`,
    address: [{
        street1: `1736 Waal St; STOP D`,
        city: `Fort Bragg`,
        state: `North Carolina`,
        zip: `28310`,
        county: `Cumberland County`,
        country: `United States`,
        type: `Military`
    }],
    description: ``,
    tags: [``]
}

export const Starside: Organization = {
    url: `http://www.starside.com/`,
    img: { src: `assets/img/companies/starside.gif`, alt: 'Starside Security' },
    name: `Starside Security`,
    address: [],
    description: ``,
    tags: []
}

export const LaserAppSoftware: Organization = {
    url: `http://www.laserapp.com/`,
    img: { src: `assets/img/companies/laserapp.png`, alt: 'LaserApp Software' },
    name: `Laser App Software`,
    address: [{
        street1: `3190 E Shelby St # D`,
        city: `Ontario`,
        state: `California`,
        zip: `91764`,
        county: `Los Angeles`,
        country: `United States`,
        type: `Corporate`
    }],
    description: `Laser App fills your financial industry forms for you, 
    saving you tremendous amounts of time processing your paperwork. With 
    over 70 integrations and over 33,000 forms in the library, we collect 
    the most financial industry forms and fill them out automatically with 
    more client data than any other system.`,
    tags: [`Linux`, `Apache`, `MySQL`, `PHP`, `HTML`, `JavaScript`, `Architecture`]
}

export const FriarTuxShop: Organization = {
    url: `https://www.friartux.com/`,
    img: { src: `assets/img/companies/friartux.png`, alt: `Friar Tux Shop` },
    name: `Friar Tux Shop`,
    address: [{
        street1: `1711 S Claudina Way`,
        city: `Anaheim`,
        state: `California`,
        zip: `92805`,
        county: `Orange County`,
        country: `United States`,
        type: `Corporate`
    }],
    description: ``,
    tags: [`PHP`, `CodeIgniter3`, `IIS`, `AngularJS`, `Ionic2`, `SPA`, `Mobile Responsive`]
}

export const BlackSwanData: Organization = {
    url: `https://www.blackswan.com/`,
    img: { src: `assets/img/companies/blackswan.png`, alt: `Black Swan Data` },
    name: `Black Swan Data`,
    address: [{
        street1: `26170 Enterprise Way`,
        city: `Lake Forest`,
        state: `California`,
        zip: `92630`,
        county: `Orange County`,
        country: `United States`,
        type: `Avionics`
    }],
    description: ``,
    tags: [`JavaScript`, `AngularJS`, `Angular`, `Gulp`, `Express`, `Node`, `Swagger`, `REST`]
}

export const Panasonic: Organization = {
    url: `https://www.panasonic.aero/`,
    img: { src: `assets/img/companies/panasonic.png`, alt: `Panasonic Aero` },
    name: `Panasonic Avionics`,
    address: [{
        street1: `26200 Enterprise Way`,
        city: `Lake Forest`,
        state: `California`,
        zip: `92630`,
        county: `Orange County`,
        country: `United States`,
        type: `Avionics Headquarters`
    }],
    description: ``,
    tags: []
}

export const UnitedHealthcare: Organization = {
    url: `https://www.uhc.com/`,
    img: { src: `assets/img/companies/uhc.jpg`, alt: `United Healthcare` },
    name: `United Healthcare`,
    address: [{
        street1: ``,
        city: ``,
        state: ``,
        zip: ``,
        county: ``,
        country: `United States`
    }],
    description: ``,
    tags: []
}

export const Infosys: Organization = {
    url: `https://www.infosys.com/`,
    img: { src: `assets/img/companies/infosys.jpg`, alt: `InfoSys` },
    name: `InfoSys`,
    address: [{
        street1: ``,
        city: ``,
        state: ``,
        zip: ``,
        county: `Orange County`,
        country: `United States`
    }],
    description: ``,
    tags: []
}

export const Boeing: Organization = {
    url: `https://www.boeing.com/`,
    img: { src: `assets/img/companies/boeing.png`, alt: `Boeing` },
    name: `Boeing`,
    address: [{
        street1: `2201 Seal Beach Blvd`,
        city: `Seal Beach`,
        state: `California`,
        zip: `90740`,
        county: `Orange County`,
        country: `United States`,
        type: `Aerospace`
    }],
    description: ``,
    tags: [`Avionics`, `Aerospace`]
}

export const Companies: Organization[] = [
    Army,
    LaserAppSoftware,
    FriarTuxShop,
    BlackSwanData,
    Panasonic,
    UnitedHealthcare,
    Infosys,
    Boeing
]

export const WorkHistory: WorkExperience[] = [{
    position: `Paratrooper`,
    company: Army,
    description: `Responsible for all aspects of development including 
        gathering requirements, wire framing, development, testing, and 
        deployment.  Routine tasks include database design and 
        administration (keys, foreign keys, indexing, relational, schema, 
        constraints, joins, views, procedures, normalization), website 
        and server maintenance, unit testing, and mobile web application 
        development.  Daily duties also included assisting Dev Ops and 
        interacting with end users for feedback.`,
    duration: [{ from: new Date(2004, 6), to: new Date(2008, 8) }],
    responsibilities: [
        `Managed squad of personnel (10+ members).`,
        `Conducted Nuclear Biological and Chemical (NBC) equipment inspection and repair.`,
        `Set division records in productivity and received accolades for management.`,
        `Supervised technical repair and calibration of equipment.`,
        `Established employee workflows.`
    ]
}, {
    position: `Form Technician`,
    company: LaserAppSoftware,
    description: `Worked on SaaS product where user forms auto populate 
        fields for large database and CRMs.  Daily tasks include scripting user 
        forms to pull information from databases, creating email newsletters, 
        website maintenance, database design and administration, CMS development.`,
    duration: [{ from: new Date(2013, 4), to: new Date(2015, 9) }],
    responsibilities: [
        `Created and maintained websites using HTML, CSS, JavaScript, and PHP on a WAMP stack.`,
        `Created various website components utilizing asynchronous JavaScript (AJAX) to create responsive sites.`,
        `Performed database design and administration using MySQL and efficient relational models.`,
        `Best performing data technician for multiple quarters and became responsible for training and advising in daily operations.`
    ]
}, {
    position: `PHP Developer/Principal Developer`,
    company: FriarTuxShop,
    description: `Responsible for all aspects of development including gathering requirements, 
        wire framing, development, testing, and deployment.  Routine tasks include database design 
        and administration (keys, foreign keys, indexing, relational, schema, constraints, joins, 
        views, procedures, normalization), website and server maintenance, unit testing, and 
        mobile web application development.  Daily duties also included assisting Dev Ops and 
        interacting with end users for feedback.`,
    duration: [{ from: new Date(2015, 9), to: new Date(2017, 7) }],
    responsibilities: [
        `Performs full-stack development within both front and back ends using HTML5, CSS3, Bootstrap, JavaScript, jQuery + plugins, PHP, CodeIgniter, NodeJS + Express, Oracle SQL, Git, GSAP, Ionic.`,
        `Develops secure and mobile first public facing websites, single page applications, and third-party API integrations (UPS, PayPal, Twitter, SMS) and JSON.`,
        `Created a mobile first tablet inventory system that allows users to scan inventory and manage stock using HTML, CSS, Bootstrap, JavaScript, AngularJS, Angular2+, Ionic2,  jQuery, PHP + CodeIgniter, NodeJS + Express, JSON, REST, and Oracle Database SQL.`,
        `Creates mobile first and responsive sites that are sold as end-user software solutions – Sites are responsive and utilize a user account system that customizes the user experience based on access type.  Software is customizable by non-developers and features hook for customization.`
    ]
}, {
    position: `Front End Developer`,
    company: BlackSwanData,
    description: `Frontend developer responsible for development and troubleshooting of customer facing portals.  Develops solutions for and integrates systems to facilitate airline inflight entertainement`,
    duration: [{ from: new Date(2017, 10), to: new Date(2018, 7) }],
    responsibilities: [
    ]
}, {
    position: `Full Stack Developer`,
    company: BlackSwanData,
    description: ``,
    duration: [{ from: new Date(2018, 8), to: new Date(2018, 10) }],
    responsibilities: []
}]

