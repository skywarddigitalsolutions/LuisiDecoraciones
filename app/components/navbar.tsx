'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Logo from "../../public/logoletras.svg"
import Image from 'next/image'

const products = [
  { name: 'Cortes a medida', description: 'Trabajamos una amplia variedad de cortes', href: '/servicios/cortes-a-medida', icon: ChartPieIcon },
  { name: 'Muebles a medida', description: 'Lo creamos especialmente para vos', href: '/servicios/muebles-a-medida', icon: CursorArrowRaysIcon },
  { name: 'Restauración', description: 'Cotizá tu restauración', href: '/servicios/restauracion', icon: FingerPrintIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-marron fixed top-0 left-0 w-full z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only"></span>
            <div className='flex justify-center items-center gap-2'>
                <Image alt="" src={Logo} className="h-12 w-auto" />
                <h5 className='text-beige font-bold text-md '>Luisi Decoraciones</h5>
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-beige"
          >
            <span className="sr-only">Abrir Menú</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <a href="/" className="text-sm font-semibold leading-6 text-beige">
            Inicio
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-beige">
              Servicios
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-beige" />
            </PopoverButton>

            <PopoverPanel
              transition                                                                                   
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-marron shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >                                                                                              {/*Revisar el color depende fondo*/}
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-beige"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-beige group-hover:bg-marron">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-marron group-hover:text-beige" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-crema hover:text-marron">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-white group-hover:text-marron">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>

          <a href="/productos" className="text-sm font-semibold leading-6 text-beige">
            Productos
          </a>
          <a href="/nosotros" className="text-sm font-semibold leading-6 text-beige">
            Nosotros
          </a>
          <a href="/contacto" className="text-sm font-semibold leading-6 text-beige">
            Contacto
          </a>
        </PopoverGroup>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-marron px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Luisi Decoraciones</span>
              <div className='flex justify-center items-center gap-2'>
                <img alt="" src="./logoletras.svg" className="h-12 w-auto" />
                <h5 className='text-beige font-bold text-md'>Luisi Decoraciones</h5>
            </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-beige"
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-beige hover:bg-beige hover:text-marron"
                >
                  Inicio
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-beige hover:bg-beige hover:text-marron">
                    Servicios
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-12 pr-3 text-sm font-semibold leading-7 text-beige hover:bg-beige hover:text-marron"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/productos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-beige hover:bg-beige hover:text-marron"
                >
                  Productos
                </a>
                <a
                  href="/nosotros"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-beige hover:bg-beige hover:text-marron"
                >
                  Nosotros
                </a>
                <a
                  href="/contacto"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-beige hover:bg-beige hover:text-marron"
                >
                  Contacto
                </a>
              </div>
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
