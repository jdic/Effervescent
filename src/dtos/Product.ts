import { GenericProps } from './Generic'
import { ProductsItemProps } from './Products'

export interface ProductProps extends GenericProps
{
  openModal: boolean
  onClose: () => void
  product: ProductsItemProps
}