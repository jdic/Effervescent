import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { MdMenu, MdKeyboardArrowDown, MdClose } from 'react-icons/md'
import { getLightDarkQuery } from '../../utils/getThemeString'
import { Button } from '../../components/Button/Button'
import React, { Fragment, useState } from 'react'
import { HeaderProps } from '../../dtos/Header'
import { Buttons } from '../../dtos/Button'
import { FaGithub } from 'react-icons/fa6'

export const Header: React.FC<HeaderProps> = ({ brand, nav, className = '' }) =>
{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const titleStyle = getLightDarkQuery('text', 'title')

  return (
    <header className={`fixed w-screen z-[99] ${className}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className={`flex lg:flex-1 ${titleStyle}`}>
          <a href="/" className="-m-1.5 p-1.5 font-semibold text-xl">
            {brand}
          </a>
        </div>
        <div className={`flex lg:hidden ${titleStyle}`}>
          <Button
            type={Buttons.Transparent}
            icon={<MdMenu />}
            className="pr-0 pl-0 pt-0 pb-0"
            toSvgTag={`text-xl ${titleStyle} ${mobileMenuOpen ? 'hidden' : ''}`}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-white/35 px-4 py-1.5 rounded-full">
          {nav.map((item) => (
            <div key={item.id}>
              {item.subItem && (
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                    {item.text}
                    <MdKeyboardArrowDown />
                  </Popover.Button>
      
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >

                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {item.subItem.map((subItem) => (
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50" key={subItem.id}>
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <span className="text-xl text-gray-600 group-hover:text-indigo-600" aria-hidden="true" >
                              {subItem.icon}
                            </span>
                          </div>
                          <div className="flex-auto">
                            <a href={subItem.href} className="block font-semibold text-gray-900">
                              {subItem.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="text-gray-600">{subItem.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            )}
            {!item.subItem && (
              <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900" key={item.id}>
                {item.text}
              </a>
            )}
            </div>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://github.com/jdic" target="_blank"><FaGithub /></a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className={`flex items-center justify-between ${titleStyle}`}>
              <a href="/" className="-m-1.5 p-1.5 font-semibold text-xl">
                {brand}
              </a>
              <Button
                type={Buttons.Transparent}
                icon={<MdClose />}
                className="pr-0 pl-0 pt-0 pb-0"
                toSvgTag={`text-xl ${titleStyle}`}
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-2">
                  {nav.map((item) => 
                  <div key={item.id}>
                    {item.subItem && (
                      <div key={item.id}>
                        <Disclosure as="div" className="-mx-3">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.text}
                                <span className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`} aria-hidden="true">
                                  {<MdKeyboardArrowDown />}
                                </span>
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-2 space-y-2">
                                {item.subItem?.map((subItem) => (
                                  <Disclosure.Button
                                    key={subItem.name}
                                    as="a"
                                    href={subItem.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {subItem.name}
                                    <p className="text-sm font-normal text-gray-600">{subItem.description}</p>
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    )}
                    {!item.subItem && (
                      <a href={item.href} key={item.id} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.text}
                      </a>
                    )}
                  </div>)}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  )
}