import Isuzu from '../assets/images/projects/isuzu.png';
import Froz from '../assets/images/projects/froz (1).png';
import Fonet from '../assets/images/projects/fonet.png';
import SanMartin from '../assets/images/projects/san martin.png';
import Chartiers from '../assets/images/projects/chartiers.png';
import Diverso from '../assets/images/projects/diverso.png';
import Vpn from '../assets/images/projects/vpn.png';
import Transportex from '../assets/images/projects/transportex.png';

export const projects = [
  {
    id: 1,
    image: Vpn,
    name: 'VPN (MOBILE APP) & (WIREGUARD CLOUD SERVER)',
    description: 'This is project 9',
    role: 'Cloud Administrator | Back-end | UI & UX designer',
    challenges: 'This is a challenge',
    stack: ['Wireguard', 'Linux', 'AWS', 'Kotlin', 'Nest.js', 'MySQL'],
    url: 'https://www.figma.com/file/OvVAH9EIRvBwyEtNscydT0/VPN-App?type=design&mode=design&t=jYO8DXCX9f7cqNbL-0',
  },
  {
    id: 2,
    image: Fonet,
    name: 'FONET "ISP" (WEB PAY SISTEM & ADMIN PANNEL)',
    description: 'This is project 1',
    role: 'Frontend Developer | UI/UX Designer |  Cloud Administrator',
    challenges:
      'This project was challenging because our goal was to develop a platform connected to the MikroWISP API, which would allow us to create a way for clients to pay their internet service bills online. This meant we had to figure out how to integrate the APIs for the company&#039;s bank accounts and payment buttons. Additionally, we needed to automatically establish a connection when a client logged into the platform and made a payment. Internally, the system needed to search the MikroWISP database to locate the client, record the payment, and renew the clients service.',
    stack: ['Next.js', 'Express.js', 'MongoDB', 'AWS', 'NGINX', 'figma'],
    url: 'https://cliente.fonet.com.ve',
  },
  {
    id: 3,
    image: Isuzu,
    name: 'ISUZU (KPI PLATFORM)',
    description: 'This is project 2',
    role: 'Full Stack developer',
    challenges: 'This is a challenge',
    stack: ['wordpress', 'Elementor', 'php', 'PowerBI'],
    url: 'https://kpi.isuzusystem.info/wp-login.php?redirect_to=https%3A%2F%2Fkpi.isuzusystem.info',
  },
  {
    id: 4,
    image: Isuzu,
    name: 'ISUZU (ORDERS PLATFORM)',
    description: 'This is project 3',
    role: 'Full Stack Developer',
    challenges: 'This is a challenge',
    stack: ['Wordpress', 'Elementor', 'php'],
    url: 'https://orders.isuzusystem.info/wp-login.php?redirect_to=https%3A%2F%2Forders.isuzusystem.info%2F',
  },
  {
    id: 5,
    image: Froz,
    name: 'FROZ SPORTS (SCHOLARSHIP SYSTEM)',
    description: 'This is project 4',
    role: 'Full Stack developer (Including UI & UX designer and Cloud Administrator)',
    challenges: 'This is a challenge',
    stack: ['Flutter', 'Firebase'],
    url: 'https://www.frozsports.com',
  },
  {
    id: 6,
    image: Chartiers,
    name: 'CHARTIERS DEL MAR (YACH BOOKING WEB)',
    description: 'This is project 5',
    role: 'Frontend Developer',
    challenges: 'This is a challenge',
    stack: ['Wordpress', 'Php'],
    url: 'https://chartiersdelmar.com',
  },
  {
    id: 7,
    image: SanMartin,
    name: 'SAN MARTIN FC (MOBILE APP)',
    description: 'This is project 6',
    role: 'Full Stack developer (Including UI & UX designer and Cloud Administrator)',
    challenges: 'This is a challenge',
    stack: ['React-Native', 'Nest.js', 'MySQL', 'Tanstackl Query', 'Figma'],
    url: 'https://www.figma.com/file/NrbeHymmh0QdmQwcrRUoih/San-Martin-App?type=design&node-id=0-1&mode=design&t=pdWxJRf6Fc6dH6lW-0',
  },
  {
    id: 8,
    image: Diverso,
    name: 'DIVERSO GROUP (WEB PLATFORM)',
    description: 'This is project 7',
    role: 'UI & UX designer and front-end.',
    challenges: 'This is a challenge',
    stack: ['Wordpress', 'Elementor', 'figma'],
    url: 'https://diversocreativeagency.com',
  },
  {
    id: 9,
    image: Transportex,
    name: 'TRANSPORTEX (MOBILE APP)',
    description: 'This is project 8',
    role: 'Cloud Administrator.',
    stack: ['React-Native', 'MySQL', 'Nest.js', 'Tanstack  Query'],
    url: 'https://play.google.com/store/apps/details?id=com.japcode.transportexmobileapp&pcampaignid=web_share',
  },
];
