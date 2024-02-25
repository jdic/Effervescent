import { GenericProps } from './Generic'

export interface HeaderProps extends GenericProps
{
  nav: HeaderNavItemProps[]
  brand: string
}

export interface HeaderNavItemProps
{
  text: string
  href?: string
  icon?: JSX.Element
  subItem?: HeaderNavSubItemProps[]
  key?: string
  id: string
}

export interface HeaderNavSubItemProps
{
  name: string,
  description: string
  href?: string
  icon?: JSX.Element
  id: string
}