import React from 'react'
import { StatsProps } from '../../dtos/Stats'

export const Stats: React.FC<StatsProps> = ({ stats, className = '', id = '' }) =>
{
  return (
    <section id={id} className="w-full flex justify-center">
      <div className={`py-12 sm:py-24 max-w-7xl ${className}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((item) => (
              <div key={item.name} className="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt className="text-base leading-7 text-gray-600">{item.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}