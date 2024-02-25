import { getLightDarkQuery } from '../../utils/getThemeString'
import { MdArrowRightAlt } from 'react-icons/md'
import { HeroProps } from '../../dtos/Hero'
import React from 'react'

export const Hero: React.FC<HeroProps> = ({ className = '', title, CTA, description = '', extraCTA, id = '' }) =>
{
  return (
    <section id={id} className={`relative isolate overflow-hidden px-6 pt-14 lg:px-8 h-screen max-h-screen w-full flex justify-center ${className}`}>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[75rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className={`text-4xl sm:text-6xl font-semibold tracking-tight ${getLightDarkQuery('text', 'title')}`}>
            {title}
          </h1>
          <p className={`mt-6 text-base sm:text-lg leading-8 ${getLightDarkQuery('text', 'parapgraph')}`}>
            {description}
          </p>
          <div className="mt-5 sm:mt-10 flex items-center justify-center gap-x-6">
            <a
              href={CTA?.href}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {CTA?.text}
            </a>
            <a
              href={extraCTA?.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <span className="flex items-center" aria-hidden="true">{extraCTA?.text} <span className="pl-1"><MdArrowRightAlt /></span></span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[22rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-90 sm:left-[calc(50%+36rem)] sm:w-[69.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  )
}