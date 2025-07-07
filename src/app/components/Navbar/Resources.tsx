'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ResourceItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
  href: string;
  image: string;
  isExternal?: boolean;
}

interface ResourceTab {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  hasIcon?: boolean;
  isExternal?: boolean;
}

const resourceTabs: ResourceTab[] = [
  { id: 'resources', label: 'Resources' },
  { id: 'blog', label: 'Blog' },
  { id: 'customer-stories', label: 'Customer Stories' },
  { id: 'webinars', label: 'Webinars' },
  { id: 'glossary', label: 'Glossary', href: '/glossary', icon: 'https://rippling2.imgix.net/Content-Library-1.svg', hasIcon: true },
  { id: 'recipes', label: 'Recipes', href: '/recipes', icon: 'https://rippling2.imgix.net/recipes-3.svg', hasIcon: true },
  { id: 'events', label: 'Events', href: '/events', icon: 'https://rippling2.imgix.net/Calendar-1.svg', hasIcon: true },
  { id: 'rippling-u', label: 'Rippling U', href: '/rippling-university', icon: 'https://rippling2.imgix.net/Lms.svg', hasIcon: true },
  { id: 'help-center', label: 'Help Center', href: 'https://help.rippling.com', icon: 'https://rippling2.imgix.net/Help-Center.svg', hasIcon: true, isExternal: true },
  { id: 'compare', label: 'Compare', href: '/compare', icon: 'https://rippling2.imgix.net/Swap-1.svg', hasIcon: true }
];

const featuredResources: ResourceItem[] = [
  {
    id: '050101',
    title: 'The state of employment: Small and mid-sized companies',
    category: 'Report',
    href: '/resources/state-of-employment',
    image: 'https://rippling2.imgix.net/resource-Image.png'
  },
  {
    id: '050102',
    title: 'HR Guide: Foundations for Actionable AI',
    category: 'Ebook',
    href: '/resources/actionable-ai',
    image: 'https://rippling2.imgix.net/resource-Image-1.png'
  },
  {
    id: '050103',
    title: 'The state of spend: Perception vs. reality',
    category: 'Report',
    href: '/resources/the-state-of-spend',
    image: 'https://rippling2.imgix.net/resource-Image-2.png'
  },
  {
    id: '050104',
    title: 'Automate onboarding and offboarding',
    category: 'Ebook',
    href: '/resources/the-it-heros-guide-automate-onboarding-and-offboarding',
    image: 'https://rippling2.imgix.net/resource-Image-3.png'
  },
  {
    id: '050105',
    title: 'Employee Cost Calculator',
    category: 'Calculator',
    href: '/employee-cost-calculator',
    image: 'https://rippling2.imgix.net/resource-Image-4.png'
  }
];

const blogTopics = [
  { id: '050201', title: 'HR Leaders', href: '/blog/topics?topics=for-hr' },
  { id: '050202', title: 'IT Leaders', href: '/blog/topics?topics=for-it' },
  { id: '050203', title: 'Finance Leaders', href: '/blog/topics?topics=for-finance' },
  { id: '050204', title: 'Global', href: '/blog/topics?topics=global' },
  { id: '050205', title: 'Founders', href: '/blog/topics?topics=founders' }
];

const featuredBlog: ResourceItem[] = [
  {
    id: '050211',
    title: 'The essential guide to switching payroll systems [2024]',
    category: 'Finance',
    href: '/blog/essential-guide-switching-payroll-providers',
    image: 'https://rippling2.imgix.net/blog-Image.png'
  },
  {
    id: '050212',
    title: 'Pay transparency laws: A state-by-state guide [2024]',
    category: 'HR',
    href: '/blog/pay-transparency-laws-state-by-state-guide',
    image: 'https://rippling2.imgix.net/blog-Image-1.png'
  },
  {
    id: '050213',
    title: 'Scaling frugally: How we grew Reserv from 17 to 250 in one year',
    category: 'HR',
    href: '/blog/how-i-solved-it-reserv',
    image: 'https://rippling2.imgix.net/blog-Image-2.png'
  },
  {
    id: '050214',
    title: '3 leaders who are hacking global HR',
    category: 'HR',
    href: '/blog/how-i-solved-it-global-hr',
    image: 'https://rippling2.imgix.net/blog-Image-3.png'
  }
];

const customerStories = [
  {
    id: '050301',
    title: "Barry's empowers their workforce with a scalable HR solution",
    href: '/customers/barrys',
    image: 'https://rippling2.imgix.net/nav-customers-Barrys.svg'
  },
  {
    id: '050302',
    title: 'Forterra automates busywork to drive impact',
    href: '/customers/forterra-autonomous-vehicles',
    image: 'https://rippling2.imgix.net/nav-customers-Forterra.svg'
  },
  {
    id: '050303',
    title: 'Chess.com creates a frictionless people process',
    href: '/customers/chess',
    image: 'https://rippling2.imgix.net/nav-customers-Chess.svg'
  },
  {
    id: '050304',
    title: 'Clay grew 5x by automating 80% of its onboarding tasks',
    href: '/customers/clay',
    image: 'https://rippling2.imgix.net/nav-customers-Clay.svg'
  }
];

const upcomingWebinars = [
  {
    id: '050401',
    title: 'Manual to Magical: A Rippling Live Demo',
    description: 'Biweekly on Tuesdays • 10:00am PT',
    href: 'https://rippling.registration.goldcast.io/repeating-event/492ce406-e734-4963-b41e-7ee2aa8ad148',
    image: 'https://rippling.imgix.net/images/webinars.png',
    isExternal: true
  },
  {
    id: '050402',
    title: 'Effortless Global Hiring and Payroll with Rippling',
    description: 'Ongoing • Varies',
    href: 'https://rippling.registration.goldcast.io/repeating-event/56692475-7fee-4cf2-b838-709daa504bc2',
    image: 'https://rippling.imgix.net/images/app-icon-global.png',
    isExternal: true
  }
];

interface ResourcesProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Resources({ isOpen, onToggle, onClose }: ResourcesProps) {
  const [activeTab, setActiveTab] = useState('resources');

  const ResourceCard = ({ resource }: { resource: ResourceItem }) => (
    <Link 
      href={resource.href}
      className="dropdown__bannerLink block group"
      {...(resource.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <div className="resources__card p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
        <div className="dropdown__customersTestimonialImage mb-3">
          <Image 
            src={resource.image} 
            alt={resource.title}
            width={200}
            height={120}
            className="w-full h-24 object-cover rounded"
          />
        </div>
        <div className="resources__card_copy">
          {resource.category && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              {resource.category}
            </p>
          )}
          <p className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
            {resource.title}
          </p>
          {resource.description && (
            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
          )}
        </div>
      </div>
    </Link>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'resources':
        return (
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="dropdown__subresources__explore mb-8">
                <Link href="/resources">
                  <div className="dropdown__subresources__explore__wrapper p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow group">
                    <div className="dropdown__subresources__explore__top mb-4">
                      <Image 
                        src="https://rippling2.imgix.net/nav-resources-rippling.png" 
                        alt="Rippling Resources"
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                    <div className="dropdown__subresources__explore__bottom">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                        Explore Rippling Resources
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Dig into blogs, content series, eBooks, and more from the experts at Rippling.
                      </p>
                      <p className="text-blue-600 font-medium group-hover:underline">
                        Go to Rippling+
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-96">
              <div className="dropdown__resourcesHighlight">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                  Featured
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {featuredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'blog':
        return (
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="dropdown__subresources">
                <Link href="/blog" className="flex items-center gap-2 mb-6 group">
                  <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600">Blog</p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                </Link>
                <div className="badge-list space-y-3 mb-6">
                  {blogTopics.map((topic) => (
                    <Link 
                      key={topic.id}
                      href={topic.href}
                      className="badge-wrapper flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600">
                        {topic.title}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="/blog"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Go to the Blog
                </Link>
              </div>
            </div>
            <div className="w-96">
              <div className="dropdown__resourcesHighlight">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                  Featured
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {featuredBlog.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'customer-stories':
        return (
          <div className="flex gap-8">
            <div className="flex-1">
              <Link href="/customers" className="flex items-center gap-2 mb-6 group">
                <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600">Customer Stories</p>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <div className="badge-list space-y-4 mb-6">
                {customerStories.map((story) => (
                  <Link 
                    key={story.id}
                    href={story.href}
                    className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Image 
                      src={story.image} 
                      alt={story.title}
                      width={48}
                      height={48}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600">
                        {story.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                href="/customers"
                className="text-blue-600 font-medium hover:underline"
              >
                See all Customer Stories
              </Link>
            </div>
            <div className="w-96">
              <div 
                className="dropdown__resourceSpotlight p-6 rounded-lg text-white relative overflow-hidden"
                style={{backgroundImage: 'url(https://rippling2.imgix.net/hero-wave.jpg)', backgroundSize: 'cover'}}
              >
                <Link href="/wavemakers">
                  <div className="dropdown__resourceSpotlight_content relative z-10">
                    <Image 
                      src="https://rippling2.imgix.net/portraits-1.png" 
                      alt="Wavemakers"
                      width={200}
                      height={100}
                      className="mb-4 rounded"
                    />
                    <h2 className="text-xl font-bold mb-2">Meet the wavemakers</h2>
                    <p className="text-sm mb-4">
                      Business visionaries empowered by Rippling to creatively impact their companies.
                    </p>
                    <span className="text-blue-200 font-medium hover:underline">Learn more</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      
      case 'webinars':
        return (
          <div className="flex gap-8">
            <div className="flex-1">
              <Link href="/webinars" className="flex items-center gap-2 mb-6 group">
                <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600">Upcoming Webinars</p>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>
              <div className="badge-list space-y-4 mb-6">
                {upcomingWebinars.map((webinar) => (
                  <Link 
                    key={webinar.id}
                    href={webinar.href}
                    className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image 
                      src={webinar.image} 
                      alt={webinar.title}
                      width={48}
                      height={48}
                      className="flex-shrink-0 rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                        {webinar.title}
                      </p>
                      {webinar.description && (
                        <p className="text-sm text-gray-600">{webinar.description}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <Link 
                href="/webinars"
                className="text-blue-600 font-medium hover:underline"
              >
                See all webinars and recordings
              </Link>
            </div>
            <div className="w-96">
              <Link href="/webinars" className="flex items-center gap-2 mb-6 group">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  On-Demand Recordings
                </p>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </Link>
            </div>
          </div>
        );
      
      default:
        return <div className="p-8 text-center text-gray-500">Content for {activeTab}</div>;
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      >
        <span>Resources</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-200 z-50" style={{left: '-50vw', right: '-50vw', width: '100vw'}}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex">
              {/* Left Navigation */}
              <div className="w-64 bg-gray-50 border-r border-gray-200">
                <div className="header__innerSlideLinks p-4">
                  {resourceTabs.map((tab) => (
                      <div key={tab.id}>
                        {tab.href ? (
                          <Link 
                            href={tab.href}
                            className={`header__innerSlideLink flex items-center justify-between p-3 mb-2 rounded-lg transition-colors ${
                              activeTab === tab.id 
                                ? 'bg-white text-[#402530] shadow-sm' 
                                : 'text-gray-700 hover:bg-white hover:shadow-sm'
                            }`}
                            {...(tab.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                          >
                            <span className="font-medium">{tab.label}</span>
                            {tab.hasIcon && tab.icon && (
                              <Image 
                                src={tab.icon} 
                                alt={tab.label}
                                width={16}
                                height={16}
                              />
                            )}
                          </Link>
                        ) : (
                          <button
                            className={`header__innerSlideLink w-full flex items-center justify-between p-3 mb-2 text-left rounded-lg transition-colors ${
                              activeTab === tab.id 
                                ? 'bg-white text-[#402530] shadow-sm' 
                                : 'text-gray-700 hover:bg-white hover:shadow-sm'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            <span className="font-medium">{tab.label}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              {/* Main Content Area */}
              <div className="flex-1 p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}