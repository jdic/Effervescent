import React from 'react'
import { CloudsProps } from '../../dtos/Clouds'
import { getLightDarkQuery } from '../../utils/getThemeString'

export const Clouds: React.FC<CloudsProps> = ({ title, clouds, className = '', id = '' }) =>
{
  return (
    <section id={id} className="w-full flex justify-center">
      <div className={`py-12 sm:py-24 max-w-7xl ${className}`}>
        <h2 className={`text-center text-lg font-medium leading-8 ${getLightDarkQuery('text', 'title')}`}>
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-2 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {clouds.map((item) => (
            <a
              href={item.href}
              target="_blank"
              className="col-span-2 object-contain lg:col-span-1"
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.alt}
                key={item.alt}
                className="max-h-24 w-full object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}