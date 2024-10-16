import { FileBadge2, SearchCheck, Handshake, Brain, Link, Package, FileBadge, FileSymlink } from "lucide-react";

export const footer =[
    {
        title: "Main Links",
        links: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about-us" },
        { title: "Features and Pricing", url: "/pricing" },
        { title: "Login/Sign up", url: "/sign-in" },
        ],
    },
    {
        title: "Legal & Support",
        links: [
        { title: "Terms of Use", url: "/terms" },
        { title: "Privacy Policy", url: "/privacy" },
        { title: "Accessibility", url: "/accessibility" },
        { title: "Contact us", url: "/contact-us" },
        { title: "Help Center", url: "/support" },
        ],
    },

]

export const headerLinks = [
  {
    name: "Home",
    path: '/'
  },
  {
    name: "Features and Pricing",
    path: '/pricing'
  },
  {
    name: "Contact us",
    path: '/contact-us'
  }
]
export const termsLinks = [
  {
    name: "Terms of Use",
    path: '/terms'
  },
  {
    name: "Privacy Policy",
    path: '/privacy'
  },
  {
    name: "Accessability",
    path: '/accessibility'
  }
]

export const boxData = [
    {
      title: 'All in one platform',
      description: 'Easily design, edit, approve and issue certificates.',
      icon: FileBadge2,
    },
    {
      title: 'User-friendly Interface',
      description: 'Feature rich and is easy to use.',
      icon: SearchCheck,
    },
    {
      title: 'Real time Collaboration',
      description: 'Collaborate with others to approve and issue certificates.',
      icon: Handshake,
    },
    {
      title: 'Apply Complex Conditions',
      description: 'Create simple or complex conditions in which to issue certificates.',
      icon: Brain,
    },
    {
      title: 'Integrate Instantly',
      description: 'Easily integrate TestBranch into your workflow.',
      icon: Link,
    },
    {
      title: 'NFT based Storage',
      description: 'Data secured on Blockchain: safe, accessible, no misuse.',
      icon: Package,
    },
  ];

export const possibilitiesData = [
  {
    id: 1,
    icon: <Handshake className='w-[36px] h-[36px]' strokeWidth={1} />,
    title: 'Enable multiple instructors or co-ordinators to work together to issue certificates',
    description: 'This can be used to save time when and effort issuing certificates by enabling people who issue certificates on a single course to work together from a single account.',
  },
  {
    id: 2,
    icon: <FileBadge className='w-[36px] h-[36px]' strokeWidth={1} />,
    title: 'Automatically issue a final certificate after a series of milestone certificates',
    description: 'This can be used to reduce errors and save time when sending certificates by automating the sending a final certificate on a course. Other events can also be triggered when issuing certificates.',
  },
  {
    id: 3,
    icon: <FileSymlink className='w-[36px] h-[36px]' strokeWidth={1} />,
    title: 'Enable multiple instructors or co-ordinators to work together to issue certificates',
    description: 'This can be used to save time when and effort issuing certificates by enabling people who issue certificates on a single course to work together from a single account.',
  },
];

export const text1 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta perferendis pariatur tempore, temporibus voluptatum beatae sunt impedit voluptate ad laboriosam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta';

 export const text2 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo autem commodi rem nemo earum perspiciatis fugit unde debitis soluta ...';


 export const plans = [
  {
    title: 'FREE',
    price: '$0 USD',
    features: [
      'Branching Logic',
      'Send Certificates',
    ],
    image: '/testbranch1.png',
    buttonLabel: 'Get Started',
    isPremium: false,
  },
  {
    title: 'PREMIUM',
    price: '$69 USD / Yearly',
    features: [
      'Branching Logic',
      'Email Support',
      'Customizable Templates',
      'Sub Accounts',
      'Send Certificates',
      'Remote API Publishing',
    ],
    image: '/testbranch2.png',
    buttonLabel: 'Buy Plan',
    isPremium: true,
  },
  {
    title: 'STARTER',
    price: '$29 USD / Yearly',
    features: [
      'Branching Logic',
      'Email Support',
      'Customizable Templates',
      'Sub Accounts',
      'Send Certificates',
    ],
    image: '/testbranch3.png',
    buttonLabel: 'Get Started',
    isPremium: false,
  },
];

export const tablePlans = [
  {
    title: 'Free',
    price: '$0 USD',
    features: {
      'Branching Logic': true,
      'Email Support': false,
      'Customizable Templates': 4,
      'Sub Accounts': false,
      'Send Certificates': 12,
      'Remote API Publishing': false,
      'Monthly Respondent Traffic Limit': 10,
    },
    buttonLabel: 'Get Started',
    buttonStyle: 'btn_sec w-[202px]',
  },
  {
    title: 'Starter',
    price: '$29 USD / Yearly',
    features: {
      'Branching Logic': true,
      'Email Support': true,
      'Customizable Templates': 20,
      'Sub Accounts': 2,
      'Send Certificates': 1000,
      'Remote API Publishing': false,
      'Monthly Respondent Traffic Limit': 500,
    },
    buttonLabel: 'Buy Plans',
    buttonStyle: 'btn_main w-[202px]',
  },
  {
    title: 'Premium',
    price: '$69 USD / Yearly',
    features: {
      'Branching Logic': true,
      'Email Support': true,
      'Customizable Templates': 50,
      'Sub Accounts': 8,
      'Send Certificates': 'Unlimited',
      'Remote API Publishing': true,
      'Monthly Respondent Traffic Limit': 'Unlimited',
    },
    buttonLabel: 'Buy Plans',
    buttonStyle: 'btn_main w-[202px]',
  },
];

export const featureList = [
  'Branching Logic',
  'Email Support',
  'Customizable Templates',
  'Sub Accounts',
  'Send Certificates',
  'Remote API Publishing',
  'Monthly Respondent Traffic Limit',
];

export const testimonials = [
  {
    imageUrl: '/certificate/c1.png',
  },
  {
    imageUrl: '/certificate/c2.png',
  },
  {
    imageUrl: '/certificate/c3.png',
  },
  {
    imageUrl: '/certificate/c4.png',
  },
];

