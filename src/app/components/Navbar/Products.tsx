'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight, FileText, BookOpen, CreditCard, Shield, Laptop, Users, Clock, Calendar, Target, TrendingUp, BarChart3, Award, GraduationCap, Heart, Globe, DollarSign, Receipt, Building } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductSection {
  id: string;
  title: string;
  description: string;
  image: string;
  subsections: {
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: string;
      href: string;
    }[];
  }[];
  hasResources?: boolean;
  hasSolutions?: boolean;
  resources?: {
    title: string;
    type: string;
    image: string;
    href: string;
  }[];
  solutions?: {
    title: string;
    icon: string;
    href: string;
  }[];
}

const productSections: ProductSection[] = [
  {
    id: 'hcm',
    title: 'Rippling HCM',
    description: 'Drive business outcomes with the #1 rated HR solution.',
    image: 'https://rippling2.imgix.net/HCM-1.png',
    subsections: [
      {
        title: 'HR Management',
        items: [
          {
            id: '010101',
            title: 'HRIS',
            description: 'Manage employee data',
            icon: 'users',
            href: '/hris'
          },
          {
            id: '010102',
            title: 'Compensation Bands',
            description: 'Prevent out-of-band comp',
            icon: 'trending-up',
            href: '/headcount-planning'
          },
          {
            id: '010103',
            title: 'HR Services',
            description: 'Automate HR compliance',
            icon: 'shield',
            href: '/hr-services'
          }
        ]
      },
      {
        title: 'Workforce Management',
        items: [
          {
            id: '010104',
            title: 'Time & Attendance',
            description: 'Automate time tracking',
            icon: 'clock',
            href: '/time-and-attendance'
          },
          {
            id: '010105',
            title: 'Scheduling',
            description: 'Build smarter schedules',
            icon: 'calendar',
            href: '/scheduling'
          }
        ]
      },
      {
        title: 'Talent',
        items: [
          {
            id: '010106',
            title: 'Recruiting',
            description: 'Recruit better at every step',
            icon: 'target',
            href: '/recruiting'
          },
          {
            id: '010107',
            title: 'Talent Signal',
            description: 'Better support new hires',
            icon: 'bar-chart-3',
            href: '/talent-signal'
          },
          {
            id: '010108',
            title: 'Headcount Planning',
            description: 'Align on headcount quickly',
            icon: 'users',
            href: '/headcount-planning'
          },
          {
            id: '010109',
            title: 'Performance Management',
            description: 'Build high-performing teams',
            icon: 'award',
            href: '/performance-management'
          },
          {
            id: '010110',
            title: 'Surveys',
            description: 'Capture employee feedback',
            icon: 'file-text',
            href: '/surveys'
          },
          {
            id: '010111',
            title: 'Learning Management',
            description: 'Upskill your talent',
            icon: 'graduation-cap',
            href: '/lms'
          }
        ]
      },
      {
        title: 'Benefits',
        items: [
          {
            id: '010112',
            title: 'Benefits Administration',
            description: 'Manage employee benefits',
            icon: 'heart',
            href: '/benefits'
          },
          {
            id: '010113',
            title: 'PEO',
            description: 'Access enterprise-grade benefits',
            icon: 'building',
            href: '/products/hr/peo'
          }
        ]
      }
    ]
  },
  {
    id: 'payroll',
    title: 'Rippling Payroll',
    description: 'Pay employees and contractors your way.',
    image: 'https://rippling2.imgix.net/Finance_Cloud_Obj_Coins.png',
    hasResources: true,
    subsections: [
      {
        title: 'Global Payroll',
        items: [
          {
            id: '010201',
            title: 'Global Payroll',
            description: 'Pay employees anywhere',
            icon: 'globe',
            href: '/international-payroll'
          },
          {
            id: '010202',
            title: 'Employer of Record',
            description: 'Hire globally without entities',
            icon: 'building',
            href: '/employer-of-record'
          },
          {
            id: '010203',
            title: 'Global Contractors',
            description: 'Pay contractors anywhere',
            icon: 'users',
            href: '/global-contractors'
          }
        ]
      },
      {
        title: 'US Payroll',
        items: [
          {
            id: '010204',
            title: 'Payroll',
            description: 'Easy, accurate payroll',
            icon: 'dollar-sign',
            href: '/payroll'
          },
          {
            id: '010205',
            title: 'Contractors',
            description: 'Pay contractors',
            icon: 'users',
            href: '/global-contractors'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'The essential guide to switching payroll systems',
        type: 'Blog',
        image: 'https://rippling2.imgix.net/Frame-3-2.png',
        href: '/blog/essential-guide-switching-payroll-providers'
      },
      {
        title: 'How to pay payroll taxes',
        type: 'Blog',
        image: 'https://rippling2.imgix.net/Frame-4-1.png',
        href: '/blog/how-to-pay-payroll-taxes'
      }
    ]
  },
  {
    id: 'it',
    title: 'Rippling IT',
    description: 'Strengthen security and eliminate busy work.',
    image: 'https://rippling2.imgix.net/rippling-it-1.png',
    hasResources: true,
    hasSolutions: true,
    subsections: [
      {
        title: '',
        items: [
          {
            id: '010301',
            title: 'Identity & Access Management',
            description: 'Get access right every time',
            icon: 'shield',
            href: '/identity-access-management'
          },
          {
            id: '010302',
            title: 'Device Management',
            description: 'Securely manage your devices',
            icon: 'laptop',
            href: '/device-management'
          }
        ]
      },
      {
        title: '',
        items: [
          {
            id: '010303',
            title: 'Inventory Management',
            description: 'Retrieve and store devices',
            icon: 'building',
            href: '/inventory-management'
          }
        ]
      }
    ],
    solutions: [
      {
        title: 'Enforce Zero Trust Controls',
        icon: 'shield',
        href: '/rippling-it/enforce-zero-trust-controls'
      },
      {
        title: 'Unify Cross-OS Device Managment',
        icon: 'laptop',
        href: '/rippling-it/unify-cross-os-device-management'
      },
      {
        title: 'Streamline User Authentication',
        icon: 'shield',
        href: '/rippling-it/streamline-user-authentication'
      }
    ],
    resources: [
      {
        title: 'The state of the IT leader',
        type: 'Report',
        image: 'https://rippling2.imgix.net/it-resource-the-it-leader.png',
        href: '/resources/itleaderreport'
      },
      {
        title: 'Automate onboarding and offboarding',
        type: 'Ebook',
        image: 'https://rippling2.imgix.net/it-heros-guide-automate.png',
        href: '/resources/the-it-heros-guide-automate-onboarding-and-offboarding'
      }
    ]
  },
  {
    id: 'spend',
    title: 'Rippling Spend',
    description: 'Get granular control over company spend.',
    image: 'https://rippling2.imgix.net/rippling-spend-1.png',
    hasResources: true,
    subsections: [
      {
        title: '',
        items: [
          {
            id: '010401',
            title: 'Expense Management',
            description: 'Enforce expense policies',
            icon: 'receipt',
            href: '/expense-management'
          },
          {
            id: '010402',
            title: 'Corporate Cards',
            description: 'Control card spend',
            icon: 'credit-card',
            href: '/corporate-cards'
          }
        ]
      },
      {
        title: '',
        items: [
          {
            id: '010403',
            title: 'Bill Pay',
            description: 'Generate and approve bills',
            icon: 'file-text',
            href: '/bill-pay'
          },
          {
            id: '010404',
            title: 'Global Spend',
            description: 'Save everywhere you operate',
            icon: 'globe',
            href: '/global-spend'
          }
        ]
      }
    ],
    resources: [
      {
        title: 'The state of the finance leader',
        type: 'Report',
        image: 'https://rippling2.imgix.net/spend-finance-leader.png',
        href: '/resources/financeleaderreport'
      },
      {
        title: 'The pitfalls of most modern spend solutions',
        type: 'Ebook',
        image: 'https://rippling2.imgix.net/spend-pitfalls-of-modern-solutions.png',
        href: '/resources/pitfalls-modern-spend-solutions'
      }
    ]
  }
];

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    'users': Users,
    'trending-up': TrendingUp,
    'shield': Shield,
    'clock': Clock,
    'calendar': Calendar,
    'target': Target,
    'bar-chart-3': BarChart3,
    'award': Award,
    'file-text': FileText,
    'graduation-cap': GraduationCap,
    'heart': Heart,
    'building': Building,
    'globe': Globe,
    'dollar-sign': DollarSign,
    'laptop': Laptop,
    'receipt': Receipt,
    'credit-card': CreditCard
  };
  
  const IconComponent = iconMap[iconName] || Users;
  return <IconComponent className="w-5 h-5" />;
};

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hcm');
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const activeSection = productSections.find(section => section.id === activeTab);

  return (
    <li className="relative group">
      {/* Trigger Button */}
      <div className="header__tab">
        <button
          className="flex items-center space-x-1 text-white font-bold cursor-pointer focus:outline-none"
          onClick={toggleDropdown}
          role="button"
          tabIndex={0}
        >
          <span>Products</span>
          <div className="hidden md:block">
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
          <div className="block md:hidden">
            <ChevronRight className="w-4 h-4 text-[#402530]" />
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-screen max-w-7xl bg-white shadow-2xl border border-gray-100 z-50 -ml-8">
          <div className="dropdown__products">
            <div className="dropdown__wrapper">
              {/* Gradient Effect */}
              <div className="dropdown__productsGradient h-0"></div>
              
              <div className="flex">
                {/* Left Navigation Tabs */}
                <div className="w-64 bg-gray-50 border-r border-gray-200">
                  <div className="p-4">
                    {productSections.map((section) => (
                      <button
                        key={section.id}
                        className={`w-full flex items-center justify-between p-3 mb-2 text-left rounded-lg transition-colors ${
                          activeTab === section.id 
                            ? 'bg-white text-[#402530] shadow-sm' 
                            : 'text-gray-700 hover:bg-white hover:shadow-sm'
                        }`}
                        onClick={() => setActiveTab(section.id)}
                      >
                        <span className="font-medium">{section.title.replace('Rippling ', '')}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Content Area */}
                {activeSection && (
                  <div className="flex-1 p-8">
                    <div className="grid grid-cols-12 gap-8">
                      {/* Hero Banner */}
                      <div className="col-span-12 mb-8">
                        <div className="group relative bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <Link href={`/${activeSection.id === 'hcm' ? 'rippling-hcm' : activeSection.id}`} className="block">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeSection.title}</h3>
                                <p className="text-gray-600 mb-4">{activeSection.description}</p>
                                <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                                  Learn more
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </span>
                              </div>
                              <div className="ml-6">
                                <Image 
                                  src={activeSection.image} 
                                  alt={activeSection.title}
                                  width={120}
                                  height={80}
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Product Grid */}
                      <div className="col-span-8">
                        <div className="grid grid-cols-2 gap-8">
                          {activeSection.subsections.map((subsection, index) => (
                            <div key={index} className="space-y-4">
                              {subsection.title && (
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                  {subsection.title}
                                </h4>
                              )}
                              <div className="space-y-3">
                                {subsection.items.map((item) => (
                                  <Link 
                                    key={item.id} 
                                    href={item.href}
                                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                      {getIconComponent(item.icon)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between">
                                        <h5 className="font-medium text-gray-900 group-hover:text-blue-600">
                                          {item.title}
                                        </h5>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                      </div>
                                      <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Sidebar - Solutions & Resources */}
                      <div className="col-span-4 space-y-8">
                        {/* Solutions Section */}
                        {activeSection.hasSolutions && activeSection.solutions && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                              Solutions
                            </h4>
                            <div className="space-y-3">
                              {activeSection.solutions.map((solution, index) => (
                                <Link 
                                  key={index}
                                  href={solution.href}
                                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                    {getIconComponent(solution.icon)}
                                  </div>
                                  <span className="flex-1 font-medium text-gray-900 group-hover:text-purple-600">
                                    {solution.title}
                                  </span>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Resources Section */}
                        {activeSection.hasResources && activeSection.resources && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                              Resources
                            </h4>
                            <div className="space-y-4">
                              {activeSection.resources.map((resource, index) => (
                                <Link 
                                  key={index}
                                  href={resource.href}
                                  className="group block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                                >
                                  <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                      <Image 
                                        src={resource.image} 
                                        alt={resource.title}
                                        width={48}
                                        height={48}
                                        className="rounded object-cover"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                        {resource.type}
                                      </p>
                                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                                        {resource.title}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                              
                              {/* View All Link */}
                              <Link 
                                href={`/resources/${activeSection.id}`}
                                className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <BookOpen className="w-5 h-5 text-gray-400" />
                                <span className="flex-1 font-medium text-gray-700 group-hover:text-blue-600">
                                  View all {activeSection.title.replace('Rippling ', '')} resources
                                </span>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
