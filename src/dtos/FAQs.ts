import { GenericProps } from './Generic'

export interface FAQsProps extends GenericProps
{
  faqs: FAQsItemProps[]
}

export interface FAQsItemProps
{
  faq: string,
  response: string
  id: string
}