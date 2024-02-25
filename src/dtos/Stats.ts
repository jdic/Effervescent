import { GenericProps } from './Generic'

export interface StatsProps extends GenericProps
{
  stats: StatsItemProps[] 
}

export interface StatsItemProps
{
  name: string,
  value: string
  id: string
}