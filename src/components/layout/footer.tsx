import { Construction, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#121212] border-t border-white/10 text-white pb-12 pt-20">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
                    {/* Brand Info */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link href="/" className="mb-6 flex items-center space-x-2">
                            <Construction  className="h-8 w-8 text-primary" />
                            <span className="font-bold font-headline text-2xl tracking-tight text-white">Weriton
                                Enterprises</span>
                        </Link>
                        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                            Quality materials, professional tools, and reliable hardware solutions under one roof. Your
                            trusted partner in construction.
                        </p>
                        <address className="not-italic text-sm text-gray-400 space-y-3">
                            <p className="flex items-start">
                                <MapPin  className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span>Kipsitet, along<br />Kericho-Kisumu Road</span>
                            </p>
                            <p className="flex items-center">
                                <Mail  className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                                <a href="mailto:sales@weritonenterprises.com"
                                    className="hover:text-primary transition-colors">sales@weritonenterprises.com</a>
                            </p>
                            <p className="flex items-center">
                                <Phone  className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                                <a href="tel:+254739307745" className="hover:text-primary transition-colors">0739 307 745</a>
                            </p>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-headline font-semibold text-white mb-6 uppercase tracking-wider text-sm">Quick
                            Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Home</Link>
                            </li>
                            <li><Link href="/about"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">About
                                Us</Link></li>
                            <li><Link href="/projects"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Past
                                Projects</Link></li>
                            <li><Link href="/contact"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hardware */}
                    <div>
                        <h4 className="font-headline font-semibold text-white mb-6 uppercase tracking-wider text-sm">
                            Hardware</h4>
                        <ul className="space-y-3">
                            <li><Link href="/hardware#materials"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Construction
                                Materials</Link></li>
                            <li><Link href="/hardware#electrical"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Electrical
                                Supplies</Link></li>
                            <li><Link href="/hardware#plumbing"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Plumbing
                                & Sanitary</Link></li>
                            <li><Link href="/hardware#tools"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Tools
                                & Equipment</Link></li>
                        </ul>
                    </div>

                    {/* Other Services */}
                    <div>
                        <h4 className="font-headline font-semibold text-white mb-6 uppercase tracking-wider text-sm">Services
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/finishing-security#finishing"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Finishing
                                Materials</Link></li>
                            <li><Link href="/finishing-security#security"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Security
                                & Safety</Link></li>
                            <li><Link href="/renovation"
                                className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-transform">Renovation
                                Services</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Weriton Enterprises. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
