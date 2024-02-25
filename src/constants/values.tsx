import { CloudItemProps } from '../dtos/Clouds'
import { FAQsItemProps } from '../dtos/FAQs'
import { HeaderNavItemProps } from '../dtos/Header'
import { ProductsItemProps } from '../dtos/Products'
import { StatsItemProps } from '../dtos/Stats'
import { MdEgg } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

export const stats: StatsItemProps[] =
[
  { name: 'Value per share', value: '$89', id: uuidv4() },
  { name: 'Weekly sales', value: '107', id: uuidv4() },
  { name: 'Companies that trust us', value: '23', id: uuidv4() }
]

export const clouds: CloudItemProps[] =
[
  { alt: 'Mozilla', img: '/mozilla.webp', href: 'https://www.mozilla.org/', id: uuidv4() },
  { alt: 'Tailwind', img: '/tailwind.webp', href: 'https://tailwindcss.com/', id: uuidv4() },
  { alt: 'React', img: '/react.webp', href: 'https://react.dev/', id: uuidv4() },
  { alt: 'Vite', img: '/vite.webp', href: 'https://vitejs.dev/', id: uuidv4() }
]

export const faqs: FAQsItemProps[] =
[
  {
    faq: "Why hasn't my order arrived yet?",
    response: "Orders may take some time to be delivered, you can use the tracking number on the assigned carrier's website to check the status of your shipment.", 
    id: uuidv4()
  },
  {
    faq: "Can I buy in bulk at a lower price?",
    response: "Yes, you can buy in bulk at a lower price when ordering more than 20 dispensers of any type, provided they are all of the same model.",
    id: uuidv4()
  },
  {
    faq: "How can I track my order?",
    response: "You can track your order using the tracking number provided by the carrier. Simply visit the carrier's website and enter the tracking number to check the status of your shipment.",
    id: uuidv4()
  },
  {
    faq: "What payment methods do you accept?",
    response: "We accept various payment methods including credit cards, debit cards, PayPal, and bank transfers. You can select your preferred payment option during the checkout process.",
    id: uuidv4()
  },
  {
    faq: "Do you offer international shipping?",
    response: "Yes, we offer international shipping to many countries around the world. However, shipping fees and delivery times may vary depending on the destination. Please check our shipping policy for more information.",
    id: uuidv4()
  },
  {
    faq: "How can I contact customer support?",
    response: "You can contact our customer support team via email, phone, or live chat. Our support agents are available to assist you with any questions or concerns you may have regarding your order or our products.",
    id: uuidv4()
  },
  {
    faq: "What is your return policy?",
    response: "Our return policy allows you to return items within 30 days of purchase for a full refund or exchange. The item must be unused and in its original packaging. Please refer to our returns page for more details.",
    id: uuidv4()
  }
]

export const products: ProductsItemProps[] =
[
  {
    name: 'Bubble',
    description: 'Bubble soap dispenser.',
    icon: <MdEgg />,
    alt: '',
    href: `#products`,
    img: '/test.webp',
    price: '21.99',
    rating: 5,
    reviews: 134,
    id: uuidv4()
  },
  {
    name: 'The Fapper',
    description: 'Exclusive model of antibacterial gel dispenser.',
    icon: <MdEgg />,
    alt: '',
    href: '#products',
    img: '/test.webp',
    price: '99.99',
    rating: 5,
    reviews: 134,
    id: uuidv4()
  },
  {
    name: 'Mr. Hands',
    description: 'Dispenser for cleaning hands.',
    icon: <MdEgg />,
    alt: '',
    href: '#products',
    img: '/test.webp',
    price: '10.50',
    rating: 5,
    reviews: 134,
    id: uuidv4()
  },
  {
    name: 'Pure',
    description: 'Antibacterial gel dispenser.',
    icon: <MdEgg />,
    alt: '',
    href: '#products',
    img: '/test.webp',
    price: '25.99',
    rating: 5,
    reviews: 134,
    id: uuidv4()
  }
]

export const navItems: HeaderNavItemProps[] =
[
  { text: 'Home', href: '#top', id: uuidv4() },
  { text: 'Products', href: '#producs', subItem: products, id: uuidv4() },
  { text: 'FAQs', href: '#faqs', id: uuidv4() },
  { text: 'Contact', href: '#contact', id: uuidv4() }
]