import React, { useState } from 'react'
import { ProductsProps, ProductsItemProps } from '../../dtos/Products'
import { getLightDarkQuery } from '../../utils/getThemeString'
import { Product } from '../Product/Product'

interface ProductModals
{
  [key: string]: boolean
}

export const Products: React.FC<ProductsProps> = ({ products, className = '', id = '' }) =>
{
  const [productModals, setProductModals] = useState<ProductModals>({})

  const handleOpenModal = (productId: string) =>
  {
    setProductModals((prevModals) => ({ ...prevModals, [productId]: true }))
  }

  const handleCloseModal = (productId: string) =>
  {
    setProductModals((prevModals) => ({ ...prevModals, [productId]: false }))
  }

  return (
    <section id={id} className="w-full flex justify-center">
      <div className={`mx-auto py-12 sm:py-24 max-w-6xl ${className}`}>
        <h2 className={`text-center text-3xl sm:text-4xl font-medium leading-8 mb-10 tracking-tight ${getLightDarkQuery('text', 'title')}`}>
          Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item: ProductsItemProps) => (
            <div className="group relative" key={item.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  onClick={() => handleOpenModal(item.id)}
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={item.href}>
                      {item.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">${item.price}</p>
              </div>
              {productModals[item.id] && (
                <Product
                  product={item}
                  openModal={true}
                  onClose={() => handleCloseModal(item.id)}
                  key={item.description}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
