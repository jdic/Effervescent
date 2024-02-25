import { GenericProps } from './Generic'

export interface CloudsProps extends GenericProps
{
  title: string
  clouds: CloudItemProps[]
}

export interface CloudItemProps
{
  alt?: string
  img: string
  href: string
  id: string
}