export interface CompanyAddress {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
    county?: string;
    country: string;
    type?: string;
}

export interface CompanyPhone {
    type: string;
    countryCode: string;
    areaCode: string;
    prefix: string;
    lineNumber: string;
}

export interface CompanyYears {
    from: Date;
    to: Date;
}

export interface Company {
    url: string;
    img: string;
    name: string;
    email?: string;
    address: CompanyAddress[];
    description?: string;
    tags?: string[];
}

export interface Reference {
    firstName: string;
    lastName: string;
    middle?: string;
    phone: CompanyPhone;
    title: string;
    responsibilities: string[];
    relationship: string;
    address: CompanyAddress;
    email: string;
}

export interface WorkExperience {
    position: string;
    company: Company;
    description: string;
    duration: CompanyYears[];
    responsibilities: string[];
    references?: Reference;
}

export const LaserAppSoftware: Company = {
    url: `http://www.laserapp.com/`,
    img: `assets/img/companies/laserapp.png`,
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
    tags: ['Linux', 'Apache', 'MySQL', 'PHP', 'HTML', 'JavaScript', 'Architecture']
}

export const FriarTuxShop: Company = {
    url: `https://www.friartux.com/`,
    img: `assets/img/companies/friartux.png`,
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

export const BlackSwanData: Company = {
    url: `https://www.blackswan.com/`,
    img: `assets/img/companies/blackswan.png`,
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

export const Panasonic: Company = {
    url: `https://www.panasonic.aero/`,
    img: `assets/img/companies/panasonic.png`,
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

export const UnitedHealthcare: Company = {
    url: `https://www.uhc.com/`,
    img: `assets/img/companies/uhc.jpg`,
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

export const Infosys: Company = {
    url: `https://www.infosys.com/`,
    img: `assets/img/companies/infosys.jpg`,
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

export const Boeing: Company = {
    url: `https://www.boeing.com/`,
    img: `assets/img/companies/boeing.png`,
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
    tags: ['Avionics', 'Aerospace']
}

export const Companies: Company[] = [
    LaserAppSoftware,
    FriarTuxShop,
    BlackSwanData,
    Panasonic,
    UnitedHealthcare,
    Infosys,
    Boeing
]

export const WorkHistory: WorkExperience[] = [{
    position: 'Form Technician',
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
    position: 'PHP Developer/Principal Developer',
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
    position: 'Front End Developer',
    company: BlackSwanData,
    description: 'Frontend developer responsible for development and troubleshooting of customer facing portals.  Develops solutions for and integrates systems to facilitate airline inflight entertainement',
    duration: [{ from: new Date(2017, 10), to: new Date(2018, 7) }],
    responsibilities: []
}, {
    position: 'Full Stack Developer',
    company: BlackSwanData,
    description: '',
    duration: [{ from: new Date(2018, 8), to: new Date(2018, 10) }],
    responsibilities: []
}]