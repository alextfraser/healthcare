import React, { useState } from 'react';
import {
  BarChart3,
  Brain,
  Building2,
  ChevronRight,
  Clock,
  FileStack,
  LineChart,
  Lock,
  MessageSquareWarning,
  PieChart,
  Shield,
  Stethoscope,
  Users2
} from 'lucide-react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Staff from './pages/Staff';
import Reports from './pages/Reports';
import Resources from './pages/Resources';

interface LandingPageProps {
  savings: number;
  setSavings: (value: number) => void;
  patients: number;
  setPatients: (value: number) => void;
  calculateSavings: () => string;
}

function LandingPage({ 
  savings, 
  setSavings, 
  patients, 
  setPatients, 
  calculateSavings 
}: LandingPageProps) {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#005EB8] to-[#003087] text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8" />
            <span className="text-xl font-bold">PracticePulse</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200 transition">Features</a>
            <a href="#benefits" className="hover:text-blue-200 transition">Benefits</a>
            <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </div>
          <button className="bg-white text-[#005EB8] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
            Book Demo
          </button>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming GP Practices with AI-Powered Intelligence
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamline operations, optimize resources, and enhance patient care with our NHS-compliant analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <button className="bg-[#41B6E6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2DA7D7] transition flex items-center justify-center">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-6 w-6 text-[#005EB8]" />
              <span className="text-sm font-medium">NHS Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Lock className="h-6 w-6 text-[#005EB8]" />
              <span className="text-sm font-medium">GDPR Protected</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users2 className="h-6 w-6 text-[#005EB8]" />
              <span className="text-sm font-medium">500+ Practices</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6 text-[#005EB8]" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful Features for Modern Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Brain className="h-6 w-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Triage System</h3>
              <p className="text-gray-600">Intelligent patient prioritization using advanced machine learning algorithms.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Analytics</h3>
              <p className="text-gray-600">Real-time financial insights and efficiency tracking for better resource allocation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <PieChart className="h-6 w-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resource Optimization</h3>
              <p className="text-gray-600">Smart scheduling and resource management tools to maximize efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <LineChart className="h-6 w-6 text-[#005EB8]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Dashboards</h3>
              <p className="text-gray-600">Comprehensive analytics and KPIs for data-driven decision making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Calculate Your Savings</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Registered Patients
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  value={patients}
                  onChange={(e) => setPatients(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-sm text-gray-600 mt-1">{patients.toLocaleString()} patients</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Estimated Annual Savings</h3>
                <div className="text-4xl font-bold text-[#005EB8]">£{calculateSavings()}</div>
                <p className="text-sm text-gray-600 mt-2">Based on average efficiency gains across our client base</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by Leading GP Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-[#005EB8] mr-3" />
                <div>
                  <h3 className="font-semibold">Riverside Medical Centre</h3>
                  <p className="text-sm text-gray-600">Manchester</p>
                </div>
              </div>
              <p className="text-gray-600">"PracticePulse has transformed how we manage our practice. The AI triage system alone has saved us countless hours."</p>
              <div className="mt-4 text-sm text-gray-500">Dr. Sarah Thompson, Practice Lead</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-[#005EB8] mr-3" />
                <div>
                  <h3 className="font-semibold">Oakwood Surgery</h3>
                  <p className="text-sm text-gray-600">Birmingham</p>
                </div>
              </div>
              <p className="text-gray-600">"The cost analytics have helped us identify and implement efficiency savings of over £30,000 annually."</p>
              <div className="mt-4 text-sm text-gray-500">James Wilson, Practice Manager</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-[#005EB8] mr-3" />
                <div>
                  <h3 className="font-semibold">Heath View Medical</h3>
                  <p className="text-sm text-gray-600">Leeds</p>
                </div>
              </div>
              <p className="text-gray-600">"The platform's insights have helped us improve patient satisfaction scores by 40% in just six months."</p>
              <div className="mt-4 text-sm text-gray-500">Dr. Emily Chen, Clinical Director</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#005EB8] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of GP practices already benefiting from AI-powered analytics and intelligent resource management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#005EB8] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Schedule Demo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Stethoscope className="h-6 w-6" />
              <span className="text-white font-bold">PracticePulse</span>
            </div>
            <p className="text-sm">© 2024 PracticePulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [savings, setSavings] = useState(25000);
  const [patients, setPatients] = useState(5000);

  const calculateSavings = () => {
    return (patients * 5.2).toFixed(0);
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route 
            path="/" 
            element={
              <LandingPage 
                savings={savings}
                setSavings={setSavings}
                patients={patients}
                setPatients={setPatients}
                calculateSavings={calculateSavings}
              />
            } 
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/patients" element={<Patients />} />
          <Route path="/dashboard/appointments" element={<Appointments />} />
          <Route path="/dashboard/staff" element={<Staff />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/resources" element={<Resources />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;