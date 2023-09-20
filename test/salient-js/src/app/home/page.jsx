'use client';
'use strict';
import ContentLoader from "react-content-loader";
import "@/styles/tailwind.css";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Feed', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
    

      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="#Logo"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-indigo-600'
                                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-indigo-600 border-indigo-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Feed</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="xl:pr-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                {/* Main area */}
                
              <div className="flex items-center flex-col">
                  <div className="FeaturedCarousel_carousel__cNB_z carousel lg:h-500px sm:border sm:border-gray-300 sm:min-h-[500px] sm:mt-4 sm:w-[calc(100%-2rem)] min-h-[523px] mt-0 overflow-hidden relative w-full">
                <div className="bg-gray-100 grid grid-cols-11 w-full h-full lg:h-500px absolute">
                  <div className="mt-4 lg:mt-0 col-span-11 order-2 lg:order-1 lg:col-span-5 2xl:col-span-4 px-10 h-full flex flex-col justify-center">
                    <svg aria-labelledby="carousel-loader-content-loader-1-aria" role="img" height="64">
                      <title id="carousel-loader-content-loader-1-aria">Loading...
                      </title>
                      <rect role="presentation"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      clipPath="url(#carousel-loader-content-loader-1-diff)"
                      style={{fill: 'url("#carousel-loader-content-loader-1-animated-diff")'}}/>
                      <defs>
                        <clipPath id="carousel-loader-content-loader-1-diff">
                          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%"/>
                        </clipPath>
                        <linearGradient id="carousel-loader-content-loader-1-animated-diff">
                        <stop offset="0%" stop-color="#333" stop-opacity="1">
                            <animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="50%" stop-color="#444" stop-opacity="1">
                          <animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stop-color="#333" stop-opacity="1">
                          <animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg aria-labelledby="carousel-loader-content-loader-2-aria" role="img" height="48" class="my-6">
                      <title id="carousel-loader-content-loader-2-aria">
                        Loading...
                      </title>
                      <rect
                      role="presentation"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      clipPath="url(#carousel-loader-content-loader-2-diff)"
                      style={{ fill: 'url("#carousel-loader-content-loader-2-animated-diff")' }}/>
                      <defs>
                        <clipPath id="carousel-loader-content-loader-2-diff">
                          <rect x="0" y="0" rx="2" ry="2" width="100%" height="16px"/>
                          <rect x="0" y="24px" rx="2" ry="2" width="100%" height="16px"/>
                        </clipPath>
                      <linearGradient id="carousel-loader-content-loader-2-animated-diff">
                        <stop offset="0%" stop-color="#333" stop-opacity="1">
                          <animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="50%" stop-color="#444" stop-opacity="1">
                          <animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                        <stop offset="100%" stop-color="#333" stop-opacity="1">
                          <animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite"/>
                        </stop>
                      </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="col-span-11 order-1 lg:order-2 lg:col-span-6 2xl:col-span-6 overflow-hidden h-320px sm:h-300px sm:rounded-md lg:h-full">
                    <svg aria-labelledby="carouselLoaderContentLoader-3-aria" role="img" width="100%" height="100%">
                      <title id="carouselLoaderContentLoader-3-aria">Loading...</title>
                      <rect role="presentation" x="0" y="0" width="100%" height="100%" clipPath="url(#carouselLoaderContentLoader-3-diff)" style={{ fill: 'url("#carouselLoaderContentLoader-3-animated-diff")' }} />
                      <defs>
                        <clipPath id="carouselLoaderContentLoader-3-diff">
                          <rect x="0" y="0" rx="2" ry="2" width="100%" height="600px"></rect>
                        </clipPath>
                        <linearGradient id="carouselLoaderContentLoader-3-animated-diff">
                          <stop offset="0%" stopColor="#333" stopOpacity="1">
                            <animate attributeName="offset" values="-2; -2; 1" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="50%" stopColor="#444" stopOpacity="1">
                            <animate attributeName="offset" values="-1; -1; 2" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#333" stopOpacity="1">
                            <animate attributeName="offset" values="0; 0; 3" keyTimes="0; 0.25; 1" dur="1s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="slick-slider bg-gray-100 slick-initialized" dir="ltr">
                  <div className="slick-list">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        transform: 'translate3d(-750px, 0px, 0px)',
                        width: '4125px',
                      }}
                    >
                      <div
                        data-index="-1"
                        tabIndex="-1"
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                        style={{ width: '375px' }}
                      >
                        <div>
                          <div className="grid grid-cols-11 w-full h-auto lg:h-500px">
                            <div className="mt-4 lg:mt-0 col-span-11 order-2 lg:order-1 lg:col-span-5 2xl:col-span-4 px-10 flex flex-col justify-center">
                              <div>
                                <h2 className="text-5xl font-extrabold FeaturedCarousel_carouselItemTitle__Kdcl9">
                                  Compressed NFTs now on Magic Eden
                                </h2>
                                <p className="mt-3 text-light-gray-500 h-[72px] sm:h-auto">
                                  Discover your new favorite artist, collection, or community.
                                </p>
                                <div className="my-2 md:my-8">
                                  <a
                                    href="https://help.magiceden.io/en/articles/8352134-introducing-cnfts-on-magic-eden"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white-1"
                                  >
                                    <button
                                      type="button"
                                      className="inline-flex justify-center items-center rounded text-sm text-white-1 h-[40px] py-0 px-3 hover:opacity-80 transition duration-300 ease-in-out bg-pink-primary mr-4 mb-2 min-w-[160px]"
                                    >
                                      Learn More about cNFTs
                                    </button>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-span-11 order-1 lg:order-2 lg:col-span-6 2xl:col-span-6 overflow-hidden relative h-320px sm:static sm:h-300px sm:w-[396px] sm:mx-auto sm:rounded-md lg:h-full lg:w-full"
                              style={{
                                backgroundImage:
                                  'url("https://bafybeihqbnddmf7ivgu4qtsa5a775vhgrmdfwib7ml7qw2svzvdubqqd6m.ipfs.nftstorage.link/")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                              }}
                            >
                              <div className="sm:hidden absolute FeaturedCarousel_carouselGradient__dXiCz"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add JSX code for other slick slides here */}
                    </div>
                  </div>
                </div>
                <div className="absolute sm:relative w-full FeaturedCarousel_customDots__qtjoQ sm:hidden">
                  <ul className="flex flex-row justify-center gap-2 px-12 lg:px-4">
                    <li className="cursor-pointer flex items-center w-12">
                      <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                    </li>
                    <li className="cursor-pointer flex items-center w-12">
                      <span className="bg-white-2"></span>
                    </li>
                    <li className="cursor-pointer flex items-center w-12">
                      <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                    </li>
                    <li className="cursor-pointer flex items-center w-12">
                      <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                    </li>
                    <li className="cursor-pointer flex items-center w-12">
                      <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute sm:relative w-full FeaturedCarousel_customDots__qtjoQ hidden sm:block">
                <ul className="flex flex-row justify-center gap-2 px-12 lg:px-4">
                  <li className="cursor-pointer flex items-center w-12">
                    <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                  </li>
                  <li className="cursor-pointer flex items-center w-12">
                    <span className="bg-white-2"></span>
                  </li>
                  <li className="cursor-pointer flex items-center w-12">
                    <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                  </li>
                  <li className="cursor-pointer flex items-center w-12">
                    <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                  </li>
                  <li className="cursor-pointer flex items-center w-12">
                    <span className="bg-gray-6 lg:bg-opacity-100 bg-opacity-50"></span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </main>

        <aside className="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  )
}
