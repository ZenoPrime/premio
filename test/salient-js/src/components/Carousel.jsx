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

export default function Carousel() {
            return (<div className="flex items-center flex-col">
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
                    </div>)}