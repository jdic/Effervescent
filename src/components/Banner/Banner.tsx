import { BannerProps } from '../../dtos/Banner'
import { MdClose } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { getLightDarkQuery } from '../../utils/getThemeString'
import { Button } from '../Button/Button'

export const Banner: React.FC<BannerProps> = ({ text, className }) =>
{
  const [showBanner, setShowBanner] = useState(localStorage.getItem('hiddeBanner') != 'true')

  useEffect(() =>
  {
    const timeout = setTimeout(() =>
    {
      setShowBanner(false)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [showBanner])

  const setHiddeBanner = () =>
  {
    localStorage.setItem('hiddeBanner', 'true')
    setShowBanner(false)
  }

  return (
    <div className={`fixed top-[70px] px-5 z-[100] overflow-hidden w-full ${className}`}>
      {showBanner && (
        <div className={`w-full px-5 py-2 rounded-xl ${getLightDarkQuery('bg', 'paragraph')} text-white flex justify-between items-center`}>
          <p className="text-sm leading-6">{text}</p>
          <Button
            onClick={setHiddeBanner}
            icon={<MdClose />}
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            toSvgTag="text-white text-lg pl-0 pr-0 pt-0 pb-0"
          />
        </div>
      )}
    </div>
  )
}