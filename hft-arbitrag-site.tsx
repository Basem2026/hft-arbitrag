import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, TrendingUp, Search, Bell, Shield, Zap, BarChart3, Users, Globe, Lock, CheckCircle, ArrowRight } from 'lucide-react';

export default function HFTArbitrag() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('media');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <TrendingUp className="w-8 h-8" />, title: "Arbitrage Scanner", desc: "Track price differences across CEX and DEX exchanges in real-time" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Perpetuals & Futures", desc: "Spot+Futures arbitrage with funding rate tracking" },
    { icon: <Search className="w-8 h-8" />, title: "Wallet Analysis", desc: "AI-powered on-chain wallet tracking and analysis" },
    { icon: <Bell className="w-8 h-8" />, title: "Real-time Alerts", desc: "Get instant notifications on profitable opportunities" },
    { icon: <Shield className="w-8 h-8" />, title: "100% Manual", desc: "No API keys required - your funds stay secure" },
    { icon: <Zap className="w-8 h-8" />, title: "40+ Exchanges", desc: "Support for major CEX and DEX platforms" }
  ];

  const stats = [
    { value: "15-25%", label: "Average Spread per Round" },
    { value: "40+", label: "Supported Exchanges" },
    { value: "20+", label: "Blockchains" },
    { value: "24/7", label: "Real-time Monitoring" }
  ];

  const products = [
    {
      title: "Arbitrage Perpetuals",
      desc: "The most profitable arbitrage method - earn 10%+ monthly on your assets",
      features: ["Spot+Futures tracking", "Funding rate earnings", "15-25% spreads", "Top exchanges only"]
    },
    {
      title: "Arbitrage Screener",
      desc: "Real-time price differences between exchanges and DEXs",
      features: ["CEX & DEX support", "Network matching", "Liquidity filters", "Instant alerts"]
    },
    {
      title: "Wallet Analysis",
      desc: "Advanced blockchain analytics and wallet tracking",
      features: ["AI similar wallets", "Mass analysis", "PNL tracking", "Smart notifications"]
    }
  ];

  const testimonials = [
    { rating: 5, text: "Best crypto arbitrage tool on the market. Made 150% of my deposit in one day!", author: "Sarah M." },
    { rating: 5, text: "The wallet analysis feature helped me find insider wallets. Earned $5000 in two weeks.", author: "Ahmed K." },
    { rating: 5, text: "Clean interface, powerful features. The funding rate tracker is a game changer.", author: "Michael R." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  HFT ARBITRAG
                </h1>
                <p className="text-xs text-slate-400">Crypto Trading Platform</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition">Features</a>
              <a href="#products" className="hover:text-blue-400 transition">Products</a>
              <a href="#testimonials" className="hover:text-blue-400 transition">Reviews</a>
              <a href="#pricing" className="hover:text-blue-400 transition">Pricing</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                Get Started
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block py-2 hover:text-blue-400 transition">Features</a>
              <a href="#products" className="block py-2 hover:text-blue-400 transition">Products</a>
              <a href="#testimonials" className="block py-2 hover:text-blue-400 transition">Reviews</a>
              <a href="#pricing" className="block py-2 hover:text-blue-400 transition">Pricing</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg mt-2">
                Get Started
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Professional Crypto Arbitrage Platform</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Best Tools for
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Crypto Arbitrage Trading
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Advanced arbitrage scanner with AI-powered wallet analysis. Track spreads across 40+ exchanges, 
              earn from funding rates, and discover profitable opportunities 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
              </button>
              <button className="border border-slate-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Traders
              </span>
            </h3>
            <p className="text-xl text-slate-400">Everything you need to succeed in crypto arbitrage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h3>
            <p className="text-xl text-slate-400">Complete ecosystem for crypto trading success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition">
                <h4 className="text-2xl font-bold mb-4 text-blue-400">{product.title}</h4>
                <p className="text-slate-300 mb-6">{product.desc}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-blue-500/10 border border-blue-500/30 py-3 rounded-lg hover:bg-blue-500/20 transition flex items-center justify-center group">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-yellow-400">★</div>
                ))}
              </div>
              <span className="text-slate-400">Based on 500+ reviews</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h3>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 space-x-4">
            {['media', 'users', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg capitalize transition ${
                  activeTab === tab 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">Verified User</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-4">Ready to Start Trading?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful traders using HFT ARBITRAG
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition">
                Contact Sales
              </button>
            </div>
            <p className="mt-6 text-blue-100 text-sm">No credit card required • 7-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">HFT ARBITRAG</span>
              </div>
              <p className="text-slate-400 text-sm">
                Professional crypto arbitrage trading platform
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Products</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Arbitrage Scanner</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Perpetuals</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Wallet Analysis</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2025 HFT ARBITRAG. All rights reserved.</p>
            <p className="mt-2 text-xs">
              IMPORTANT: We are software developers. We do not give financial advice or manage your funds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}