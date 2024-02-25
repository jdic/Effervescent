import React from 'react'
import { FAQsProps } from '../../dtos/FAQs'
import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { getLightDarkQuery } from '../../utils/getThemeString'

export const FAQs: React.FC<FAQsProps> = ({ faqs, className = '', id = '' }) =>
{
  return (
    <section id={id} className="w-full flex justify-center">
      <div className={`w-full px-4 py-12 sm:py-24 max-w-7xl ${className}`}>
        <h2 className={`text-center text-3xl sm:text-4xl font-medium leading-8 mb-5 ${getLightDarkQuery('text', 'title')}`}>FAQs</h2>
        <div className="mx-auto w-full max-w-md rounded-2xl p-2">
          {faqs.map((item) => (
            <div className="mt-2" key={item.id}>
              <Disclosure as="div">
                {({ open }) => (
                  <>
                    <Disclosure.Button key={item.faq} className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                      <span>{item.faq}</span>
                      <MdKeyboardArrowDown className={`${open ? 'rotate-180 transform' : ''} text-purple-500 text-lg`} />
                    </Disclosure.Button>
                    <Disclosure.Panel key={item.response} className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      {item.response}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}