"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Projects</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how Weriton Enterprises' materials and expertise come together to create exceptional spaces.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <Link href="#" className="block">
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video overflow-hidden">
                                <img src="/images/home1.jpg" alt="Modern Kitchen Renovation"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col space-y-1.5">
                                <div
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                    Residential</div>
                                <h3 className="text-2xl font-headline font-semibold leading-none tracking-tight">Modern
                                    Kitchen Renovation</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground mb-4">Complete gut renovation of a 1980s kitchen. We
                                    handled the planning, material supply, and full installation, including custom
                                    cabinetry, electrical, and plumbing.</p>
                                <div className="text-primary flex items-center font-semibold">
                                    View Case Study <ArrowRight 
                                        className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Project 2 */}
                    <Link href="#" className="block">
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxvZmZpY2UlMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njg1MDM5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Commercial Office Fit-Out"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col space-y-1.5">
                                <div
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                    Commercial</div>
                                <h3 className="text-2xl font-headline font-semibold leading-none tracking-tight">Commercial
                                    Office Fit-Out</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground mb-4">Full interior fit-out for a 5,000 sq/ft tech
                                    startup office. Our scope included space planning, supplying all construction
                                    materials, and managing the build.</p>
                                <div className="text-primary flex items-center font-semibold">
                                    View Case Study <ArrowRight 
                                        className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Project 3 */}
                    <Link href="#" className="block">
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBiYXRocm9vbXxlbnwwfHx8fDE3Njg1MDM5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Luxury Bathroom Remodel"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col space-y-1.5">
                                <div
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                    Residential</div>
                                <h3 className="text-2xl font-headline font-semibold leading-none tracking-tight">Luxury
                                    Bathroom Remodel</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground mb-4">Transformation of a standard bathroom into a
                                    spa-like retreat, featuring a walk-in shower, freestanding tub, and high-end
                                    finishes.</p>
                                <div className="text-primary flex items-center font-semibold">
                                    View Case Study <ArrowRight 
                                        className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Project 4 */}
                    <Link href="#" className="block">
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm group overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                            <div className="relative aspect-video overflow-hidden">
                                <img src="/images/lanscape1.webp" alt="Exterior Facade & Landscape"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col space-y-1.5">
                                <div
                                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                    Exterior</div>
                                <h3 className="text-2xl font-headline font-semibold leading-none tracking-tight">Exterior
                                    Facade & Landscape</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground mb-4">Updated the exterior of a suburban home with new
                                    siding, paint, and a modern landscaping update for enhanced curb appeal.</p>
                                <div className="text-primary flex items-center font-semibold">
                                    View Case Study <ArrowRight 
                                        className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* CTA */}
                <section className="py-16 md:py-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Have a Project with Our Materials?
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        We love seeing our products in action. If you have a completed project you're proud of, share it
                        with us for a chance to be featured in our gallery.
                    </p>
                    <Link href="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                        Submit Your Project
                    </Link>
                </section>
            </div>
        </div>
    </main>
    );
}
