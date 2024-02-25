import { GenericProps } from './Generic'

export enum Buttons
{
  Danger = 'danger',
  Success = 'success',
  Primary = 'primary',
  Secondary = 'secondary',
  Transparent = 'transparent'
}

export interface ButtonProps extends GenericProps
{
  text?: string
  onClick?: () => void
  disabled?: boolean
  type?: Buttons
  icon?: JSX.Element
  toSvgTag?: string
}