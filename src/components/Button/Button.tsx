import { getLightDarkQuery } from '../../utils/getThemeString'
import { ButtonProps, Buttons } from '../../dtos/Button'
import React from 'react'

export const Button: React.FC<ButtonProps> = ({ type = Buttons.Transparent, className = '', disabled, icon, onClick, text, id = '', toSvgTag = '' }) =>
{
  return (
    <button
      id={id}
      className={`py-[10px] px-[24px] flex items-center justify-center rounded-xl cursor-pointer ${type === Buttons.Transparent ? getLightDarkQuery('text', 'paragraph') : '#FFFFFF'} ${disabled ? 'opacity-50' : ''} ${getLightDarkQuery('bg', `button-styles-${type}`)} ${getLightDarkQuery('text', 'button-color')} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >

      {text}
      {icon && ( <span className={`${toSvgTag} ${text ? 'pl-1' : ''}`}>{icon}</span> )}
    </button>
  )
}