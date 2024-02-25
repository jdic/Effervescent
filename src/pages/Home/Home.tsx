import { Banner } from '../../components/Banner/Banner'
import { Clouds } from '../../components/Clouds/Clouds'
import { Contact } from '../../components/Contact/Contact'
import { FAQs } from '../../components/FAQs/FAQs'
import { Hero } from '../../components/Hero/Hero'
import { Products } from '../../components/Products/Products'
import { Stats } from '../../components/Stats/Stats'
import { clouds, faqs, navItems, products, stats } from '../../constants/values'
import { Header } from '../../layouts/Header/Header'
import { getLightDarkQuery } from '../../utils/getThemeString'

export const Home = () =>
{
  return (
    <div className={`flex flex-col ${getLightDarkQuery('bg', 'background')} ${getLightDarkQuery('text', 'paragraph')}`}>
      <Banner text="This website is under development, so some things may change." />

      <Header
        brand="Effervescent 🌪️"
        nav={navItems}
        id="header"
      />

      <Hero
        title="Dispensers, from us to everyone."
        description="We design dispensers for the general public and private organizations, we have great technology and quality behind us."
        CTA={{ text: 'Products', href: '#products' }}
        extraCTA={{ text: 'Contact', href: '#contact' }}
        id="top"
      />

      <Products 
        products={products}
        id="products"
      />

      <Stats
        stats={stats}
        id="stats"
      />

      <Clouds
        title="We have the confidence of the best companies"
        clouds={clouds}
        id="stats"
      />

      <FAQs
        faqs={faqs}
        id="faqs"
      />

      <Contact
        id="contact"
      />
    </div>
  )
}