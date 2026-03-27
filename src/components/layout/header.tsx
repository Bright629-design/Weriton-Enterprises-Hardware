"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Construction, ChevronDown, Menu, X, Wrench, PaintBucket, ShieldCheck, DraftingCompass, Hammer } from 'lucide-react';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="mr-4 flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Construction className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline text-lg">Weriton Enterprises</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {/* Dropdown: Hardware */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-foreground/60 hover:text-primary focus:outline-none">
                                Hardware & Supplies
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            <div className="absolute left-0 top-full pt-2 w-56 hidden group-hover:block hover:block z-50">
                                <div className="rounded-md border bg-popover p-2 shadow-md flex flex-col gap-1">
                                    <Link href="/hardware#materials" className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                                        <Construction className="mr-2 h-4 w-4" /> Construction Materials
                                    </Link>
                                    <Link href="/hardware#electrical" className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                                        <Wrench className="mr-2 h-4 w-4" /> Electrical Supplies
                                    </Link>
                                    <Link href="/hardware#plumbing" className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                                        <Wrench className="mr-2 h-4 w-4" /> Plumbing & Sanitary
                                    </Link>
                                    <Link href="/hardware#tools" className="flex items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground">
                                        <Wrench className="mr-2 h-4 w-4" /> Tools & Equipment
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/finishing-security" className="text-foreground/60 hover:text-primary">Finishing & Security</Link>
                        <Link href="/renovation" className="text-foreground/60 hover:text-primary">Renovation Services</Link>
                        <Link href="/projects" className="text-foreground/60 hover:text-primary">Projects</Link>
                        <Link href="/blog" className="text-foreground/60 hover:text-primary">Blog</Link>
                        <Link href="/about" className="text-foreground/60 hover:text-primary">About</Link>
                    </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                    <Link href="/quote-request" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Request a Quote
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div 
                className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                            <Construction className="h-6 w-6 text-primary" />
                            <span className="font-bold font-headline text-lg">Weriton Enterprises</span>
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="grid gap-4 overflow-y-auto pb-20">
                        <div>
                            <h4 className="font-semibold text-muted-foreground px-3 mb-2">Hardware & Supplies</h4>
                            <Link href="/hardware#materials" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Construction Materials</Link>
                            <Link href="/hardware#electrical" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Electrical Supplies</Link>
                            <Link href="/hardware#plumbing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Plumbing & Sanitary</Link>
                            <Link href="/hardware#tools" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Tools & Equipment</Link>
                        </div>
                        <div>
                            <h4 className="font-semibold text-muted-foreground px-3 mb-2">Finishing & Security</h4>
                            <Link href="/finishing-security#finishing" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Finishing Materials</Link>
                            <Link href="/finishing-security#security" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 hover:text-primary">Security & Safety</Link>
                        </div>
                        <Link href="/renovation" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-primary">Renovation Services</Link>
                        <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-primary">Projects</Link>
                        <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-primary">Blog</Link>
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 font-medium hover:text-primary">About</Link>
                        
                        <div className="mt-8 flex flex-col gap-3 px-3">
                            <Link href="/quote-request" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                                Request a Quote
                            </Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
