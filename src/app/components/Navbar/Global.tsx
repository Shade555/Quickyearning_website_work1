'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface GlobalProductData {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

interface GlobalResourceData {
  id: string;
  title: string;
  href: string;
  icon: string;
}

interface GlobalSolutionData {
  id: string;
  title: string;
  href: string;
  icon: string;
}

interface GlobalCountryData {
  id: string;
  title: string;
  href: string;
  flag: string;
}

const globalProductsData: GlobalProductData[] = [
  {
    id: '040001',
    title: 'Employer of Record',
    description: 'Hire globally without entities',
    href: '/employer-of-record',
    icon: 'https://rippling2.imgix.net/EOR.svg'
  },
  {
    id: '040002',
    title: 'Global Payroll',
    description: 'Pay employees anywhere',
    href: '/international-payroll',
    icon: 'https://rippling2.imgix.net/global-payroll-3.svg'
  },
  {
    id: '040003',
    title: 'Global Contractors',
    description: 'Pay contractors anywhere',
    href: '/global-contractors',
    icon: 'https://rippling2.imgix.net/contractors.svg'
  },
  {
    id: '040004',
    title: 'Global HRIS',
    description: 'Run global HR in one place',
    href: '/global-hr',
    icon: 'https://rippling2.imgix.net/people-directory-2-1.svg'
  },
  {
    id: '040005',
    title: 'Global HR Advisor',
    description: 'Get localized HR expertise',
    href: '/global-hr-advisory-service',
    icon: 'https://rippling2.imgix.net/need-to-talk-2.svg'
  },
  {
    id: '040006',
    title: 'Global Benefits',
    description: 'Manage benefits anywhere',
    href: '/global-benefit-solution',
    icon: 'https://rippling2.imgix.net/benefits-admin-1.svg'
  },
  {
    id: '040007',
    title: 'Global Spend',
    description: 'Save everywhere you operate',
    href: '/global-spend',
    icon: 'https://rippling2.imgix.net/global-spend-1.svg'
  }
];

const globalResourcesData: GlobalResourceData[] = [
  {
    id: '040008',
    title: 'Hiring Guides',
    href: '/country-hiring',
    icon: 'https://rippling2.imgix.net/Guidepost.svg'
  },
  {
    id: '040009',
    title: 'Employee Cost Calculator',
    href: '/employee-cost-calculator',
    icon: 'https://rippling2.imgix.net/Dollar-Circle-1.svg'
  },
  {
    id: '040010',
    title: 'Misclassification Quiz',
    href: '/tools/worker-classification-analyzer',
    icon: 'https://rippling2.imgix.net/Question-Circle-1.svg'
  },
  {
    id: '040011',
    title: 'Entity vs. EOR Cost Calculator',
    href: '/entity-vs-eor-cost-calculator',
    icon: 'https://rippling2.imgix.net/calculator-icon.svg'
  },
  {
    id: '040012',
    title: 'Glossary',
    href: '/glossary',
    icon: 'https://rippling2.imgix.net/Spell-check.svg'
  }
];

const globalSolutionsData: GlobalSolutionData[] = [
  {
    id: '040013',
    title: 'All-in-One',
    href: '/global-payroll-and-hiring',
    icon: 'https://rippling2.imgix.net/Unified-System-2.svg'
  },
  {
    id: '040014',
    title: 'Global Only',
    href: '/global',
    icon: 'https://rippling2.imgix.net/Globe.svg'
  },
  {
    id: '040015',
    title: 'Contractor to EOR',
    href: '/convert-contractors-to-employees',
    icon: 'https://rippling2.imgix.net/Swap-1.svg'
  }
];

const globalCountriesData: GlobalCountryData[] = [
  {
    id: '040017',
    title: 'Hire in United Kingdom',
    href: '/country-hiring/united-kingdom-employees',
    flag: 'https://rippling2.imgix.net/flag-UK.svg'
  },
  {
    id: '040018',
    title: 'Hire in Australia',
    href: '/country-hiring/australia-employees',
    flag: 'https://rippling2.imgix.net/flag-Australia.svg'
  },
  {
    id: '040019',
    title: 'Hire in Canada',
    href: '/country-hiring/canada-employees',
    flag: 'https://rippling2.imgix.net/flag-Canada.svg'
  }
];

interface GlobalProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Global({ isOpen, onToggle, onClose }: GlobalProps) {

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      >
        <span>Global</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50" style={{ top: '76px', minHeight: '400px' }}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="dropdown__customersInner">
                <div className="flex gap-8">
                  {/* Main Content Area */}
                  <div className="flex-1">
                    <div className="dropdown__global dropdown__bannerWithBadges">
                      <div className="dropdown__leftCol-content">
                        <div className="flex gap-8">
                          {/* Products Column */}
                          <div className="dropdown__col flex-1">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                              Products
                            </p>
                            <div className="badge-list-twoColumns grid grid-cols-1 gap-4">
                              {globalProductsData.map((product) => (
                                <Link 
                                  key={product.id}
                                  href={product.href}
                                  className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <Image 
                                    src={product.icon} 
                                    alt={product.title}
                                    width={48}
                                    height={48}
                                    className="flex-shrink-0 object-contain"
                                  />
                                  <div className="flex-1">
                                    <div className="badge-wrapper-link flex items-center justify-between mb-1">
                                      <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                                        {product.title}
                                      </p>
                                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                    <p className="text-sm text-gray-600">{product.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Resources & Solutions Columns */}
                          <div className="dropdown__col_two flex-1">
                            {/* Resources Section */}
                            <div className="mb-8">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                                Resources
                              </p>
                              <div className="badge-list space-y-3">
                                {globalResourcesData.map((resource) => (
                                  <Link 
                                    key={resource.id}
                                    href={resource.href}
                                    className="badge-wrapper flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="dropdown__iconSquare w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <Image 
                                        src={resource.icon} 
                                        alt={resource.title}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                      />
                                    </div>
                                    <div className="badge-wrapper-link flex-1 flex items-center justify-between">
                                      <p className="font-medium text-gray-900 group-hover:text-blue-600">
                                        {resource.title}
                                      </p>
                                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Solutions Section */}
                            <div>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                                Solutions
                              </p>
                              <div className="badge-list space-y-3">
                                {globalSolutionsData.map((solution) => (
                                  <Link 
                                    key={solution.id}
                                    href={solution.href}
                                    className="badge-wrapper flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <div className="dropdown__iconSquare w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <Image 
                                        src={solution.icon} 
                                        alt={solution.title}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                      />
                                    </div>
                                    <div className="badge-wrapper-link flex-1 flex items-center justify-between">
                                      <p className="font-medium text-gray-900 group-hover:text-blue-600">
                                        {solution.title}
                                      </p>
                                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Featured & Countries */}
                  <div className="w-80">
                    <div className="dropdown__col dropdown__resourcesHighlight">
                      <div>
                        {/* Featured Section */}
                        <div className="dropdown__customersTestimonialStories mb-8">
                          <div className="dropdown__globalResourceHighlight">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                              Featured
                            </p>
                            <Link 
                              href="/resources/global-hiring-report"
                              className="dropdown__bannerLink block group"
                            >
                              <div className="resources__card p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                                <div className="dropdown__customersTestimonialImage mb-3">
                                  <Image 
                                    src="https://rippling2.imgix.net/nav-global-hiring-report.png" 
                                    alt="Global Hiring Report"
                                    width={240}
                                    height={120}
                                    className="w-full h-24 object-cover rounded"
                                  />
                                </div>
                                <div className="resources__card_copy">
                                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                    Resource
                                  </p>
                                  <p className="font-medium text-gray-900 group-hover:text-blue-600">
                                    Global Hiring Report
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Hire Globally Section */}
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                            Hire Globally
                          </h5>
                          <div className="hiring-guide-country-list space-y-3">
                            {globalCountriesData.map((country) => (
                              <Link 
                                key={country.id}
                                href={country.href}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <Image 
                                  src={country.flag} 
                                  alt={country.title}
                                  width={24}
                                  height={24}
                                  className="flex-shrink-0 rounded"
                                />
                                <p className="flex-1 font-medium text-gray-900 group-hover:text-blue-600">
                                  {country.title}
                                </p>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                              </Link>
                            ))}
                            
                            <div className="dropdown__highlightLink_wrapper pt-2">
                              <Link 
                                href="/country-hiring"
                                className="dropdown__highlightLink inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                              >
                                <p>View all countries</p>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}