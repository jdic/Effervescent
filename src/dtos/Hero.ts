import { GenericProps } from './Generic'

export interface HeroProps extends GenericProps
{
  title: string
  description?: string
  CTA?: { text: string, href: string }
  extraCTA?: { text: string, href: string }
}