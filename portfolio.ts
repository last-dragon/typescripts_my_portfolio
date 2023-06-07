import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Jason Yang',
  title: "Hello Everyone, I'm Jason",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Hyperledger Fabric Framework.",
  resumeLink:
    "https://drive.google.com/file/d/1iUnLmsgaVtoJnrnxA4Zf9k_IR95VnD0a/view?usp=drive_link",
};

export const openSource = {
  githubUserName: 'last-dragon',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: 'https://github.com',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       fontAwesomeClassName: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       fontAwesomeClassName: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       fontAwesomeClassName: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       fontAwesomeClassName: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       fontAwesomeClassName: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       fontAwesomeClassName: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       fontAwesomeClassName: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       fontAwesomeClassName: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       fontAwesomeClassName: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       fontAwesomeClassName: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Northern Colorado',
    subHeader: 'Bachelor of Science in Software Engineering, Minor in Computer Science',
    duration: 'March 2010 - April 2016',
    desc: 'Participated in the research of Software Engineer and published 3 papers.',
    grade: 'Grade A',
    // descBullets: [
    //   '',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  {
    schoolName: 'University of Massachusettes Lowell',
    subHeader: 'Bachelor of Science in Computer Engineering',
    duration: 'March 2016 - December 2018',
    desc: 'Participated in the research of Artificial Intelligence.',
    grade: 'Grade A',
    // descBullets: [
    //   '',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Blockchain Developer',
    company: 'BITOWFI',
    companyLogo: '/img/icons/common/',
    date: 'Jan 2019 – Dec 2022',
    desc: 'I worked as blockchain developer in BitowFi to develop smart contract in Ethereum blockchain and chaincode in Hyperledger Fabric blockchain. ',
    descBullets: [
    	"Closely collaborated with the product and dev teams to improve the efficiency of the platform by 25%",
    	"Participated in 5+ open source community projects, met with stakeholders, and mentored and tutored 3 junior developers",
      "Built 5 reusable cross-chain libraries",
      "Participated in the development of 3 new tools and integrated them into the platform"
    ],
  },
  {
    role: 'AI Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Feb 2016 – Dec 2018',
    desc: 'I worked as AI Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions.',
    descBullets: [
    	"Design and execute well-engineered, easy-to-maintain, reliable, and bug-free code for company to increase user by 6 billions",
    	"Design, test, and deploy new artificial intelligence functionalities for 8 major projects of the company worth $5M in total",
      "Author sophisticated and optimized codes For different games to boost the reusability of standard modules"
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'March 2013 - Jen 2016',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
    descBullets: [
    	"Supervised and lead a team of 5 junior software engineers during the development of a robust upgrade version of the company's software applications, resulting in improved user experience and a 33% revenue increase within 8 months",
    	"Proficiently troubleshot simple and complex technological issues for different assigned projects, achieving over 95% customer satisfaction rate",
      "Enhanced the application's features to effectively fix the bugs and optimize the overall performance, reliability, and efficiency"
    ],
  }
];

export const projects: ProjectType[] = [
  {
    name: 'EHR-Blockchain',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'You showed incredible leadership instincts in your work on that project. I would love to work with you to develop those skills. Amazing work.',
  },
  {
    name: 'Jemmy Crystophe',
    feedback:
      'You have all the qualities we look for in a leader. I hope you might consider taking them to the next level by leading our next big project in this area.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Software Engineer',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Jason',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: '',
  keywords: [
    'Jason',
    'Jason Yang',
    'edwardnelson2en@gmail.come'
  ],
};
