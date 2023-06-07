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
    "Over 7 years of experience in developing and implementing blockchain solutions for various industries. Mastered various blockchain technologies such as Ethereum, Hyperledger, and Corda. Strong problem-solving skills and ability to work collaboratively in a team environment. Has published 3 research papers on blockchain technology in peer-reviewed journals. Keeps up to date with the latest blockchain trends and technologies with enthusiasm.",
  resumeLink:
    "https://drive.google.com/file/d/1btqIhAgOJPKLo5K5cUmVwGXGh_R_Lyrd/view?usp=drive_link",
};

export const openSource = {
  githubUserName: 'last-dragon',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: 'https://github.com/last-dragon',
  facebook : 'https://www.facebook.com',
  linkedin : 'https://linkedin.com/Jason-Yang'
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
          skillName: 'TypeScript',
          fontAwesomeClassName: 'logos:typescript',
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
          skillName: 'Golang',
          fontAwesomeClassName: 'logos:go',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        // {
        //   skillName: 'Django',
        //   fontAwesomeClassName: 'vscode-icons:file-type-django',
        // },

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
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
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
          skillName: 'Bitcoin',
          fontAwesomeClassName: 'logos:bitcoin',
        },
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Hyperledger Fabric',
          fontAwesomeClassName: 'logos:fabric',
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
        {
          skillName: 'Truffle',
          fontAwesomeClassName: 'logos:truffle',
        },
        {
          skillName: 'Remix',
          fontAwesomeClassName: 'logos:remix',
        },
        {
          skillName: 'Hardhat',
          fontAwesomeClassName: 'logos:hardhat',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '100', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '100',
  },
  {
    Stack: 'Blockchain',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Hong Kong University of Information and Technology',
    subHeader: 'Bachelor of Computer Science, Minor in Computer Science',
    duration: 'March 2012 - April 2016',
    desc: 'Participated in the research of Software Engineer and published 3 papers.',
    grade: 'Grade A',
    // descBullets: [
    //   '',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },
  // {
  //   schoolName: 'University of Massachusettes Lowell',
  //   subHeader: 'Bachelor of Science in Computer Engineering',
  //   duration: 'March 2016 - December 2018',
  //   desc: 'Participated in the research of Artificial Intelligence.',
  //   grade: 'Grade A',
  //   // descBullets: [
  //   //   '',
  //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //   // ],
  // },
];

export const experience: ExperienceType[] = [
  {
    role: 'Blockchain Engineer',
    company: 'Mezzofy',
    companyLogo: '/img/icons/common/Mezzofy.png',
    date: 'May 2021 – May 2023',
    desc: '',
    descBullets: [
    	"Work closely with product and development teams to improve platform efficiency by 25%.",
    	"Built a private blockchain using Hyperledger Fabric, increasing data security and reducing risk by 93%",
      "Developed an efficient and secure back-end infrastructure combining Web3 and FinTech, resulting in a 7% increase in transaction speed and a 5% reduction in processing costs.",
      "Transformed business requirements into technical specifications and developed a scalable and maintainable architecture for an e-commerce website with more than 500,0 registered users and a transaction volume of more than $500,000 per month."
    ],
  },
  {
    role: 'Blockchain Developer',
    company: 'CYBAVO',
    companyLogo: '/img/icons/common/CYBAVO.png',
    date: 'Nov 2018 – Apr 2021',
    desc: '',
    descBullets: [
    	"In the first year of the e-commerce site, I created a custom ERC-20 token to act as a payment method and implemented secure transaction protocols to protect user data, resulting in over $100,000 worth of transactions being processed.",
    	"Working with cross-functional teams, I designed and implemented a blockchain-based decentralized identity solution that resulted in a scalable platform used by more than 50,000 users.",
      "By developing custom smart contracts and integrating them into the front-end UI with Web3.js, I created a user-friendly interface for easy tracking of inventory and shipments, resulting in over 90% customer satisfaction for the site.",
      "Established security measures such as multi-factor authentication and encryption to ensure data privacy and confidentiality, resulting in a secure and trusted platform."
    ],
  },
  {
    role: 'Blockchain Developer Intern',
    company: 'imToken',
    companyLogo: '/img/icons/common/imToken.png',
    date: 'Apr 2018 – Aug 2018',
    desc: '',
    descBullets: [
    	"Designed and developed 2 smart contracts using Solidity and Ethereum.",
    	"Helped improve the stability and reliability of the platform by fixing 5 bugs or issues during the internship.",
      "Involved in developing internal tools and processes to improve efficiency to 3% and productivity."
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Zilingo',
    companyLogo: '/img/icons/common/Zilingo.png',
    date: 'Apr 2016 - Apr 2018',
    desc: '',
    descBullets: [
    	"By designing and implementing custom payment integrations with PayPal and Stripe, I was able to increase the website's successful transactions by 25% and increase customer satisfaction by 15% by ensuring secure transactions.",
    	"Implemented a user-friendly checkout process that resulted in a 5% increase in completed purchases.",
      "Optimized load times for product pages, reducing load times by up to 70% and improving search engine rankings.",
      "Conducted A/B testing of various website features, which resulted in a 15% increase in overall sales."
    ],
  }
];

export const projects: ProjectType[] = [
  {
    name: 'Supply-Chain Management System',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/last-dragon/supply-chain-ethereum',
    link: 'https://supply-chain-dapp-2f007.web.app/',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/last-dragon/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/last-dragon/Django-ecommerce',
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
