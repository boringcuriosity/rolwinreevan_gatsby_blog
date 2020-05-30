module.exports = {
  pathPrefix: '',
  siteUrl: 'https://rolwinreevan.com',
  siteTitle: 'Shaheer Ahmed - Digital creator',
  siteDescription: 'Logbook of a digital creator, Author and founder, Shaheer Ahmed.',
  author: 'Rolwin Reevan',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/boringcuriosity',
    facebook: 'https://www.facebook.com/rolwin.monteiro',
    twitter: 'https://twitter.com/boringcuriosity',
    instagram: 'https://www.instagram.com/boringcuriosity/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/8d829f9f-76c5-431c-a75b-0aff2b810655',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    photos: {
      name: 'photos',
      description: 'A tag where I share my favorite photos and their details..',
      color: '#dd3431',
    },
    work: {
      name: 'work',
      description: 'Here is my selected work and their case studies. Feel free to share and care.',
      color: '#43ace0',
    },
    personal: {
      name: 'personal',
      description: 'A general personal tag where I share feelings and thoughts.',
      color: '#f9c646',
    },

  },
};  
  
