'use client';

import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isPPCCompanyOpen, setIsPPCCompanyOpen] = useState(false);
  const [isPPCConsultantOpen, setIsPPCConsultantOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ppcCompanyItems = [
    'Google Ads Management',
    'Facebook Ads Management',
    'Microsoft Ads Management',
    'Amazon PPC Management'
  ];

  const ppcConsultantItems = [
    'PPC Strategy Consulting',
    'Account Audit',
    'Performance Analysis',
    'Campaign Optimization'
  ];

  const caseStudiesItems = [
    'E-commerce Success Stories',
    'Lead Generation Campaigns',
    'Brand Awareness Campaigns',
    'Local Business Growth'
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AD</span>
                </div>
              </div>
              <div className="text-white">
                <h1 className="text-xl font-bold tracking-wide">
                  ADWORDS<span className="text-blue-200">PPC</span>EXPERT
                </h1>
                <p className="text-xs text-blue-200 tracking-widest">
                  ADVERTISE INTELLIGENTLY TO IMPROVE ROI
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="nav-link font-medium">
              Home
            </a>

            {/* PPC Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsPPCCompanyOpen(!isPPCCompanyOpen);
                  setIsPPCConsultantOpen(false);
                  setIsCaseStudiesOpen(false);
                }}
                className="nav-link font-medium flex items-center space-x-1"
              >
                <span>PPC Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPPCCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPPCCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {ppcCompanyItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* PPC Consultant Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsPPCConsultantOpen(!isPPCConsultantOpen);
                  setIsPPCCompanyOpen(false);
                  setIsCaseStudiesOpen(false);
                }}
                className="nav-link font-medium flex items-center space-x-1"
              >
                <span>PPC Consultant</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isPPCConsultantOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isPPCConsultantOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {ppcConsultantItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCaseStudiesOpen(!isCaseStudiesOpen);
                  setIsPPCCompanyOpen(false);
                  setIsPPCConsultantOpen(false);
                }}
                className="nav-link font-medium flex items-center space-x-1"
              >
                <span>Case Studies</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isCaseStudiesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCaseStudiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {caseStudiesItems.map((item, index) => (
                    <a key={index} href="#" className="dropdown-item">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="nav-link font-medium">
              Contact Us
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-200 shadow-lg">
              <Phone className="w-5 h-5" />
            </button>

            {/* Get In Touch Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg">
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-indigo-500">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-blue-200 font-medium">
                Home
              </a>
              
              <div className="space-y-2">
                <button
                  onClick={() => setIsPPCCompanyOpen(!isPPCCompanyOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-blue-200 font-medium"
                >
                  <span>PPC Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPPCCompanyOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPPCCompanyOpen && (
                  <div className="ml-4 space-y-2">
                    {ppcCompanyItems.map((item, index) => (
                      <a key={index} href="#" className="block text-blue-200 hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setIsPPCConsultantOpen(!isPPCConsultantOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-blue-200 font-medium"
                >
                  <span>PPC Consultant</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPPCConsultantOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPPCConsultantOpen && (
                  <div className="ml-4 space-y-2">
                    {ppcConsultantItems.map((item, index) => (
                      <a key={index} href="#" className="block text-blue-200 hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-blue-200 font-medium"
                >
                  <span>Case Studies</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCaseStudiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCaseStudiesOpen && (
                  <div className="ml-4 space-y-2">
                    {caseStudiesItems.map((item, index) => (
                      <a key={index} href="#" className="block text-blue-200 hover:text-white">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="text-white hover:text-blue-200 font-medium">
                Contact Us
              </a>

              <div className="flex items-center space-x-4 pt-4">
                <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-200 shadow-lg">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(isPPCCompanyOpen || isPPCConsultantOpen || isCaseStudiesOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsPPCCompanyOpen(false);
            setIsPPCConsultantOpen(false);
            setIsCaseStudiesOpen(false);
          }}
        ></div>
      )}
    </header>
  );
};

export default Header;