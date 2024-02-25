import { GenericProps } from './Generic'

export interface ProductsProps extends GenericProps
{
  products: ProductsItemProps[]
}

export interface ProductsItemProps
{
  img: string,
  price: string,
  rating: number,
  name: string,
  reviews: number,
  href: string,
  alt: string
  description: string
  icon: JSX.Element
  id: string
}