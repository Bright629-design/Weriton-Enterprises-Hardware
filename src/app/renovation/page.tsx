"use client";
import { Hammer, Home, Building, Wrench, Droplet, PaintBucket, HardHat } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzY4NTAzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Construction site" className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    Renovation & Installation
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                    Professional installation and renovation services to bring your project to life.
                </p>
            </div>
        </section>

        {/* Renovation Services */}
        <section id="renovation" className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Hammer  className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Comprehensive Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Bring your vision to life with our expert renovation and installation team. We manage every
                        aspect of the project, ensuring a seamless process and a high-quality result.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div id="residential" className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Home  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Residential Renovations</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Full home makeovers, including kitchens, bathrooms, and
                                living spaces. We handle demolition, rebuilding, and finishing.</p>
                        </div>
                    </div>
                    <div id="commercial" className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Building  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Commercial Fit-Outs</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Office and retail space improvements. We optimize your
                                layout and install durable materials for high-traffic areas.</p>
                        </div>
                    </div>
                    <div id="installation" className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Wrench  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Electrical Services</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Licensed electrical installation and repair. From rewiring
                                to lighting fixtures and safety systems.</p>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Droplet  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Plumbing Services</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Professional plumbing installation. Sinks, toilets,
                                showers, and piping systems for new builds or renovations.</p>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <PaintBucket  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Painting & Finishing</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Interior and exterior painting, flooring installation, and
                                final touches to complete your project.</p>
                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <HardHat  className="w-6 h-6" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Project Management</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Dedicated supervision to coordinate all trades and ensure
                                your renovation stays on schedule and budget.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}
