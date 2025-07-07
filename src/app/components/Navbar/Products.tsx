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
}

interface ProductsProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const productSections: ProductSection[] = [
  {
    id: 'hcm',
    title: 'Rippling HCM',
    description: 'Drive business outcomes with the #1 rated HR solution.',
    image: 'https://rippling2.imgix.net/nav-products-hcm.png',
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
            title: 'Recruiting',
            description: 'Recruit better at every step',
            icon: 'target',
            href: '/recruiting'
          },
          {
            id: '010103',
            title: 'Talent Signal',
            description: 'Better support new hires',
            icon: 'trending-up',
            href: '/talent-signal'
          },
          {
            id: '010104',
            title: 'Headcount Planning',
            description: 'Align on headcount quickly',
            icon: 'bar-chart-3',
            href: '/headcount-planning'
          },
          {
            id: '010105',
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
            id: '010201',
            title: 'Time & Attendance',
            description: 'Automate time tracking',
            icon: 'clock',
            href: '/time-and-attendance'
          },
          {
            id: '010202',
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
            id: '010301',
            title: 'Performance Management',
            description: 'Build high-performing teams',
            icon: 'award',
            href: '/performance-management'
          },
          {
            id: '010302',
            title: 'Learning Management',
            description: 'Upskill your talent',
            icon: 'graduation-cap',
            href: '/learning-management'
          }
        ]
      },
      {
        title: 'Benefits',
        items: [
          {
            id: '010401',
            title: 'Benefits Administration',
            description: 'Manage employee benefits',
            icon: 'heart',
            href: '/benefits-administration'
          },
          {
            id: '010402',
            title: 'PEO',
            description: 'Access enterprise-grade benefits',
            icon: 'building',
            href: '/peo'
          }
        ]
      }
    ],
    hasResources: true,
    resources: [
      {
        title: 'The state of employment: Small and mid-sized companies',
        type: 'Report',
        image: 'https://rippling2.imgix.net/resource-employment-report.png',
        href: '/resources/employment-report'
      },
      {
        title: 'HR Guide: Foundations for Actionable AI',
        type: 'eBook',
        image: 'https://rippling2.imgix.net/resource-ai-guide.png',
        href: '/resources/ai-guide'
      }
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll',
    description: 'Run payroll across all 50 states and globally in minutes.',
    image: 'https://rippling2.imgix.net/nav-products-payroll.png',
    subsections: [
      {
        title: 'US Payroll',
        items: [
          {
            id: '020101',
            title: 'US Payroll',
            description: 'Run payroll in all 50 states',
            icon: 'dollar-sign',
            href: '/us-payroll'
          },
          {
            id: '020102',
            title: 'Contractor Payments',
            description: 'Pay contractors seamlessly',
            icon: 'credit-card',
            href: '/contractor-payments'
          }
        ]
      },
      {
        title: 'Global Payroll',
        items: [
          {
            id: '020201',
            title: 'Global Payroll',
            description: 'Run payroll worldwide',
            icon: 'globe',
            href: '/global-payroll'
          },
          {
            id: '020202',
            title: 'EOR',
            description: 'Hire globally without entities',
            icon: 'building',
            href: '/eor'
          }
        ]
      }
    ]
  },
  {
    id: 'it',
    title: 'IT',
    description: 'Manage devices, apps, and security from a single platform.',
    image: 'https://rippling2.imgix.net/nav-products-it.png',
    subsections: [
      {
        title: 'Device Management',
        items: [
          {
            id: '030101',
            title: 'Device Management',
            description: 'Manage all devices centrally',
            icon: 'laptop',
            href: '/device-management'
          }
        ]
      },
      {
        title: 'App Management',
        items: [
          {
            id: '030201',
            title: 'App Management',
            description: 'Control app access and usage',
            icon: 'target',
            href: '/app-management'
          }
        ]
      }
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Automate accounting, reporting, and financial operations.',
    image: 'https://rippling2.imgix.net/nav-products-finance.png',
    subsections: [
      {
        title: 'Accounting',
        items: [
          {
            id: '040101',
            title: 'Accounting',
            description: 'Automate your books',
            icon: 'file-text',
            href: '/accounting'
          }
        ]
      }
    ]
  },
  {
    id: 'spend',
    title: 'Spend Management',
    description: 'Control spending with corporate cards and expense management.',
    image: 'https://rippling2.imgix.net/nav-products-spend.png',
    subsections: [
      {
        title: 'Corporate Cards',
        items: [
          {
            id: '050101',
            title: 'Corporate Cards',
            description: 'Issue and manage corporate cards',
            icon: 'credit-card',
            href: '/corporate-cards'
          }
        ]
      },
      {
        title: 'Expense Management',
        items: [
          {
            id: '050201',
            title: 'Expense Management',
            description: 'Track and approve expenses',
            icon: 'receipt',
            href: '/expense-management'
          }
        ]
      }
    ]
  }
];

const iconMap: { [key: string]: React.ComponentType<any> } = {
  'users': Users,
  'target': Target,
  'trending-up': TrendingUp,
  'bar-chart-3': BarChart3,
  'shield': Shield,
  'clock': Clock,
  'calendar': Calendar,
  'award': Award,
  'graduation-cap': GraduationCap,
  'heart': Heart,
  'building': Building,
  'dollar-sign': DollarSign,
  'credit-card': CreditCard,
  'globe': Globe,
  'laptop': Laptop,
  'file-text': FileText,
  'receipt': Receipt
};

const getIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName] || Users;
  return <IconComponent className="w-5 h-5" />;
};

export default function Products({ isOpen, onToggle, onClose }: ProductsProps) {
  const [activeTab, setActiveTab] = useState('hcm');

  const activeSection = productSections.find(section => section.id === activeTab);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      >
        <span>Products</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50" style={{ top: '76px', minHeight: '400px' }}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Left Navigation */}
              <div className="w-64 bg-gray-50 border-r border-gray-200">
                <div className="p-4">
                  {productSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(section.id)}
                      className={`w-full text-left p-3 mb-2 rounded-lg transition-colors ${
                        activeTab === section.id 
                          ? 'bg-white text-[#402530] shadow-sm' 
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <p className="font-medium">{section.title}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1">
                {activeSection && (
                  <div className="flex gap-8">
                    {/* Product Banner */}
                    <div className="flex-1">
                      <Link href={`/products/${activeSection.id}`} className="block group mb-8">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow">
                          <div className="mb-4">
                            <Image 
                              src={activeSection.image} 
                              alt={activeSection.title}
                              width={300}
                              height={150}
                              className="w-full h-32 object-cover rounded"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                            {activeSection.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {activeSection.description}
                          </p>
                          <p className="text-blue-600 font-medium group-hover:underline">
                            Learn more
                          </p>
                        </div>
                      </Link>

                      {/* Product Subsections */}
                      <div className="grid grid-cols-2 gap-6">
                        {activeSection.subsections.map((subsection, index) => (
                          <div key={index}>
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                              {subsection.title}
                            </h4>
                            <div className="space-y-3">
                              {subsection.items.map((item) => (
                                <Link 
                                  key={item.id}
                                  href={item.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    {getIcon(item.icon)}
                                  </div>
                                  <div>
                                    <p className="font-medium text-gray-900 group-hover:text-blue-600">
                                      {item.title}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Sidebar - Resources */}
                    {activeSection.hasResources && activeSection.resources && (
                      <div className="w-80">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
                          Featured Resources
                        </h4>
                        <div className="space-y-4">
                          {activeSection.resources.map((resource, index) => (
                            <Link 
                              key={index}
                              href={resource.href}
                              className="block group"
                            >
                              <div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                                <div className="mb-3">
                                  <Image 
                                    src={resource.image} 
                                    alt={resource.title}
                                    width={200}
                                    height={120}
                                    className="w-full h-24 object-cover rounded"
                                  />
                                </div>
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                                  {resource.type}
                                </p>
                                <p className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                                  {resource.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
