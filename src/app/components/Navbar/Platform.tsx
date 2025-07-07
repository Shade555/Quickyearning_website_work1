'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PlatformProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function Platform({ isOpen, onToggle, onClose }: PlatformProps) {
  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
        onClick={onToggle}
        role="button"
        tabIndex={0}
      >
        <span>Platform</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-200 z-50" style={{left: '-50vw', right: '-50vw', width: '100vw'}}>
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Left Column - Platform Banner */}
              <div className="flex-1">
                  <div className="line-card">
                    <Link href="/platform" className="block group">
                      <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Rippling Platform
                      </h5>
                      <div className="flex items-center gap-6 p-6 rounded-lg bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-shadow">
                        <div className="flex-shrink-0">
                          <Image 
                            src="https://rippling2.imgix.net/platform.png" 
                            alt="Platform"
                            width={120}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform</h3>
                          <p className="text-gray-600 mb-4">
                            Meet the platform tailored to your business.
                          </p>
                          <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                            Learn more
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

              {/* Right Column - Core Capabilities */}
              <div className="flex-1">
                  <div className="dropdown__platform-rightCol">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                      Core Capabilities
                    </h5>
                    <div className="badge-list space-y-4">
                      <Link 
                        href="/workflow" 
                        className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/workflow-automator-2.svg" 
                          alt="Workflow Studio"
                          width={48}
                          height={48}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                              Workflow Studio
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Trigger advanced workflows using any data
                          </p>
                        </div>
                      </Link>

                      <Link 
                        href="/analytics" 
                        className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/reports-2.svg" 
                          alt="Analytics"
                          width={48}
                          height={48}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                              Analytics
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Report on anything across your apps
                          </p>
                        </div>
                      </Link>

                      <Link 
                        href="/policies" 
                        className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/approvals-3.svg" 
                          alt="Policies"
                          width={48}
                          height={48}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                              Policies
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Enforce company rules automatically
                          </p>
                        </div>
                      </Link>

                      <Link 
                        href="/permissions" 
                        className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/permissions-7.svg" 
                          alt="Permissions"
                          width={48}
                          height={48}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                              Permissions
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Grant everyone the right access
                          </p>
                        </div>
                      </Link>

                      <Link 
                        href="/integrations" 
                        className="badge-wrapper flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <Image 
                          src="https://rippling2.imgix.net/integrations-2.svg" 
                          alt="Integrations"
                          width={48}
                          height={48}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600">
                              Integrations
                            </p>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </div>
                          <p className="text-sm text-gray-600">
                            Push third-party apps to perform better
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

              {/* Resources Section */}
              <div className="dropdown__resourcesHighlight mt-8 pt-8 border-t border-gray-200">
                <div className="dropdown__resourcesHighlightPosts">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
                    Resources
                  </p>
                  <div className="flex gap-6 mb-6">
                    <Link 
                      href="/resources/bookofrippling" 
                      className="dropdown__bannerLink group flex-1"
                    >
                      <div className="resources__card flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                        <div className="dropdown__customersTestimonialImage flex-shrink-0">
                          <Image 
                            src="https://rippling2.imgix.net/platform-secret-behind.png" 
                            alt="Secret behind impactful HR teams"
                            width={64}
                            height={64}
                            className="rounded object-cover"
                          />
                        </div>
                        <div className="resources__card_copy flex-1">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            Learn the secret behind impactful HR teams
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link 
                      href="/resources/hr-seat-at-table" 
                      className="dropdown__bannerLink group flex-1"
                    >
                      <div className="resources__card flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all">
                        <div className="dropdown__customersTestimonialImage flex-shrink-0">
                          <Image 
                            src="https://rippling2.imgix.net/platform-for-a-seat-at-the-table.png" 
                            alt="The struggle for a seat at the table"
                            width={64}
                            height={64}
                            className="rounded object-cover"
                          />
                        </div>
                        <div className="resources__card_copy flex-1">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            The struggle for a seat at the table
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="dropdown__moreLinkContainer">
                    <Link 
                      href="/recipes" 
                      className="dropdown__highlightLink flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Image 
                        src="https://rippling2.imgix.net/recipes-2.svg" 
                        alt="Recipes"
                        width={24}
                        height={24}
                      />
                      <p className="flex-1 font-medium text-gray-900 group-hover:text-blue-600">
                        Explore Rippling Recipes
                      </p>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                    </Link>
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