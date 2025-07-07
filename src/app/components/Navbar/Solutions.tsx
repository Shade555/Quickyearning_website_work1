'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import './dropdown-fall.css';

interface BadgeItemData {
  id: string;
  title: string;
  href: string;
  icon: string;
}

interface BadgeItemProps {
  item: BadgeItemData;
  isExternal?: boolean;
}

const industriesData = [
  {
    id: '030001',
    title: 'Construction',
    href: '/industries/construction',
    icon: 'https://diamondrock2.imgix.net/construction-wrench-icon.svg'
  },
  {
    id: '030002',
    title: 'Financial Services',
    href: '/industries/financial-services',
    icon: 'https://diamondrock2.imgix.net/Finances.svg'
  },
  {
    id: '030003',
    title: 'Healthcare',
    href: '/industries/healthcare',
    icon: 'https://diamondrock2.imgix.net/Health.svg'
  },
  {
    id: '030004',
    title: 'Marketing & Ad Agencies',
    href: '/industries/marketing-advertising',
    icon: 'https://diamondrock2.imgix.net/Marketing-And-Advertising-1.svg'
  },
  {
    id: '030005',
    title: 'Manufacturing',
    href: '/industries/manufacturing',
    icon: 'https://diamondrock2.imgix.net/Tools-1.svg'
  },
  {
    id: '030006',
    title: 'Non-profit Organizations',
    href: '/industries/non-profits',
    icon: 'https://diamondrock2.imgix.net/Nonprofit.svg'
  },
  {
    id: '030007',
    title: 'Professional Services',
    href: '/industries/professional-services',
    icon: 'https://diamondrock2.imgix.net/Tools-1.svg'
  },
  {
    id: '030008',
    title: 'Restaurants',
    href: '/industries/restaurants',
    icon: 'https://diamondrock2.imgix.net/Meals.svg'
  },
  {
    id: '030009',
    title: 'Retail',
    href: '/industries/retail',
    icon: 'https://diamondrock2.imgix.net/Retail-Dollar.svg'
  },
  {
    id: '030010',
    title: 'Technology',
    href: '/industries/technology',
    icon: 'https://diamondrock2.imgix.net/Technology.svg'
  }
];

const companySizeData = [
  {
    id: '030011',
    title: 'Startups',
    href: '/lp/startupstack',
    icon: 'https://diamondrock2.imgix.net/Star-empty-1.svg'
  },
  {
    id: '030012',
    title: 'Small Businesses',
    href: '/small-business',
    icon: 'https://diamondrock2.imgix.net/small-business-2.svg'
  },
  {
    id: '030013',
    title: 'Mid-Sized Businesses',
    href: '/mid-sized-businesses',
    icon: 'https://diamondrock2.imgix.net/mid-size-1.svg'
  },
  {
    id: '030014',
    title: 'Enterprise',
    href: '/enterprise',
    icon: 'https://diamondrock2.imgix.net/enterprise.svg'
  }
];

const partnersData = [
  {
    id: '030015',
    title: 'Brokers',
    href: '/brokers',
    icon: 'https://diamondrock2.imgix.net/Broker.svg'
  },
  {
    id: '030016',
    title: 'Accountants',
    href: '/accountants',
    icon: 'https://diamondrock2.imgix.net/Accountant-icon.svg'
  },
  {
    id: '030017',
    title: 'VC Firms & Accelerators',
    href: '/venture-firms-and-accelerators',
    icon: 'https://diamondrock2.imgix.net/Linechart.svg'
  },
  {
    id: '030018',
    title: 'Developers',
    href: '/developers',
    icon: 'https://diamondrock2.imgix.net/Engineering.svg'
  }
];

const integrationsData = [
  {
    id: '030019',
    title: 'Carta',
    href: 'https://www.diamondrock.com/app-shop/app/carta',
    icon: 'https://diamondrock2.imgix.net/icon-7.svg'
  },
  {
    id: '030020',
    title: 'Paypal',
    href: 'https://www.diamondrock.com/app-shop/app/paypal',
    icon: 'https://diamondrock2.imgix.net/paypal.svg'
  },
  {
    id: '030021',
    title: '1Password',
    href: 'https://www.diamondrock.com/app-shop/app/1-password',
    icon: 'https://diamondrock2.imgix.net/1pass.svg'
  },
  {
    id: '030022',
    title: 'Yubikey',
    href: 'https://www.diamondrock.com/app-shop/app/yubikey',
    icon: 'https://diamondrock2.imgix.net/yubikey.svg'
  }
];

interface SolutionsProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  textColor?: string;
  labelAnimation?: boolean;
}

interface BadgeItemProps {
  item: {
    id: string;
    title: string;
    href: string;
    icon: string;
  };
  isExternal?: boolean;
}

export default function Solutions({ isOpen, onToggle, onClose, textColor, labelAnimation }: SolutionsProps) {

  const BadgeItem: React.FC<BadgeItemProps> = ({ item, isExternal = false }) => (
    <Link 
      href={item.href}
      className="badge-wrapper flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <div className="dropdown__iconSquare w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Image 
          src={item.icon} 
          alt={item.title}
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
      <div className="badge-wrapper-link flex-1 flex items-center justify-between">
        <p className="font-medium text-gray-900 group-hover:text-blue-600">
          {item.title}
        </p>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
      </div>
    </Link>
  );

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${textColor ? textColor : 'text-white'} hover:text-yellow-400 bg-transparent`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        style={{ background: 'none' }}
      >
        {labelAnimation ? (
          <span className="relative h-6 overflow-hidden flex flex-col justify-center">
            <span className="block transition-transform duration-300 group-hover:-translate-y-6 group-focus:-translate-y-6">Solutions</span>
            <span className="block absolute left-0 top-0 w-full transition-transform duration-300 translate-y-6 group-hover:translate-y-0 group-focus:translate-y-0">Solutions</span>
          </span>
        ) : (
          <span>Solutions</span>
        )}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50 animate-dropdown-fall" style={{ top: '76px', minHeight: '400px' }}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Main Solutions Grid */}
              <div className="flex-1">
                <div className="dropdown__solutions grid grid-cols-3 gap-8">
                  {/* Industries Column */}
                  <div className="solution-col">
                    <div className="badge-list-heading mb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Industries
                      </p>
                      <div className="badge-list space-y-2">
                        {industriesData.slice(0, 8).map((item) => (
                          <BadgeItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Industries + Company Size Column */}
                  <div className="solution-col">
                    <div className="badge-list-heading badge-list-heading-more mb-6">
                      <div className="badge-list space-y-2 mb-8">
                        {industriesData.slice(8).map((item) => (
                          <BadgeItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                    
                    <div className="badge-list-heading">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Company Size
                      </p>
                      <div className="badge-list space-y-2">
                        {companySizeData.map((item) => (
                          <BadgeItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Partners Column */}
                  <div className="solution-col">
                    <div className="badge-list-heading">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Partners
                      </p>
                      <div className="badge-list space-y-2">
                        {partnersData.map((item) => (
                          <BadgeItem key={item.id} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrations Sidebar */}
              <div className="w-80">
                <div className="dropdown__col group dropdown__resourcesHighlight">
                  <div>
                    <div className="dropdown__customersTestimonialStories mb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Integrations
                      </p>
                      <div className="space-y-3">
                        {integrationsData.map((item) => (
                          <Link 
                            key={item.id}
                            href={item.href}
                            className="dropdown__customersTestimonial flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="dropdown__customersTestimonialImage w-8 h-8 flex-shrink-0">
                              <Image 
                                src={item.icon} 
                                alt={item.title}
                                width={32}
                                height={32}
                                className="object-contain"
                              />
                            </div>
                            <p className="flex-1 font-medium text-gray-900 group-hover:text-blue-600">
                              {item.title}
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="dropdown__customersTestimonialsViewAll">
                      <Link 
                        href="/app-shop"
                        className="dropdown__highlightLink flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/App-Shop.svg" 
                          alt="App Shop"
                          width={24}
                          height={24}
                        />
                        <p className="flex-1 font-medium text-gray-900 group-hover:text-blue-600">
                          View all 600+ integrations
                        </p>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </Link>
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