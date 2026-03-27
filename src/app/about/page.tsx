"use client";
import { Target, Lightbulb, ShieldCheck, Handshake, Users, ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">About Weriton Enterprises</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Your trusted partner for comprehensive hardware solutions, construction materials, and creative
                        design excellence since 2015.
                    </p>
                </div>

                {/* History Section */}
                <section id="history" className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1600476119517-e08f9fa0545a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx2aW50YWdlJTIwd29ya3Nob3B8ZW58MHx8fHwxNzY4NDk5MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="vintage workshop" className="object-cover w-full h-full" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Story</h2>
                        <p className="text-muted-foreground text-lg mb-4">
                            Founded in 2015 by Justus, Weriton Enterprises started as a small, local hardware store with
                            a simple mission: to provide quality tools and materials to the community's builders and
                            craftspeople.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            Over the years, we've grown into a comprehensive solution provider, expanding our offerings
                            to include a full range of construction supplies, and eventually, a dedicated
                            renovation division. While our services have evolved, our founding commitment to quality and
                            customer satisfaction remains unchanged.
                        </p>
                    </div>
                </section>

                {/* CEO Section */}
                <section id="ceo" className="py-16 md:py-24 bg-secondary rounded-lg">
                    <div className="container grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-lg aspect-square">
                            <img src="/images/founder1.png" alt="ceo portrait" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">A Word from Our CEO</h2>
                            <p className="text-muted-foreground text-lg mb-4">
                                "Welcome to Weriton Enterprises. When I started this company, my goal was to build more
                                than just a store; I wanted to build a partner for our community. A place where
                                professionals and homeowners alike could find not just the best materials, but also the
                                expertise and support to bring their projects to life."
                            </p>
                            <p className="text-muted-foreground text-lg mb-6">
                                "Today, I'm proud of the team we've built and the comprehensive services we offer.
                                Whether you're laying a foundation or choosing the perfect paint color, we are here to
                                ensure your success. Thank you for trusting us with your vision."
                            </p>
                            <p className="font-semibold text-xl font-headline">Justus</p>
                            <p className="text-muted-foreground">Founder & CEO, Weriton Enterprises</p>
                        </div>
                    </div>
                </section>

                {/* Mission Vision */}
                <section id="mission-vision" className="py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <div className="flex flex-row items-center gap-4 mb-4">
                                <Target  className="h-10 w-10 text-primary" />
                                <h3 className="font-headline text-2xl font-semibold">Our Mission</h3>
                            </div>
                            <div className="p-0">
                                <p className="text-muted-foreground text-lg">To empower builders, designers, and homeowners
                                    by providing a comprehensive range of high-quality products, expert services, and
                                    innovative solutions, ensuring every project's success from foundation to finish.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                            <div className="flex flex-row items-center gap-4 mb-4">
                                <Lightbulb  className="h-10 w-10 text-primary" />
                                <h3 className="font-headline text-2xl font-semibold">Our Vision</h3>
                            </div>
                            <div className="p-0">
                                <p className="text-muted-foreground text-lg">To be the region's leading and most trusted
                                    partner for all construction and renovation needs, known for our unwavering
                                    commitment to quality, innovation, and customer success.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section id="values">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Core Values</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            The principles that guide our work and define our company culture.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quality */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground text-center hover:shadow-lg transition-shadow p-6">
                            <div className="flex flex-col items-center">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Quality</h3>
                                <p className="text-muted-foreground">We are committed to providing only the highest quality
                                    products and services that meet rigorous standards of performance and durability.
                                </p>
                            </div>
                        </div>
                        {/* Integrity */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground text-center hover:shadow-lg transition-shadow p-6">
                            <div className="flex flex-col items-center">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Handshake  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Integrity</h3>
                                <p className="text-muted-foreground">Our business is built on honesty and transparency. We
                                    build trust with every client through clear communication and reliable service.</p>
                            </div>
                        </div>
                        {/* Innovation */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground text-center hover:shadow-lg transition-shadow p-6">
                            <div className="flex flex-col items-center">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Lightbulb  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Innovation</h3>
                                <p className="text-muted-foreground">We constantly seek out new technologies, materials, and
                                    construction approaches to provide creative and effective solutions for our clients.
                                </p>
                            </div>
                        </div>
                        {/* Customer Focus */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground text-center hover:shadow-lg transition-shadow p-6">
                            <div className="flex flex-col items-center">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Users  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Customer Focus</h3>
                                <p className="text-muted-foreground">Our clients are at the heart of everything we do. We
                                    listen to their needs and dedicate ourselves to ensuring their complete
                                    satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-2">
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB0ZWFtfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="professional team" className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="md:order-1">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Meet Our Experts</h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            Our success is driven by our people. Weriton Enterprises is proud to have a diverse team of
                            experienced hardware specialists, skilled tradespeople, certified technicians, and dedicated
                            project managers. We invest in continuous training to ensure our team is equipped with the
                            latest industry knowledge.
                        </p>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                            Join Our Team <ArrowRight  className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 text-center bg-primary text-primary-foreground rounded-lg">
                    <h2 className="text-3xl font-headline font-bold mb-4">Let's Build Something Great Together</h2>
                    <p className="max-w-2xl mx-auto mb-8">
                        Contact us today to discuss your project. We're ready to put our expertise to work for you.
                    </p>
                    <Link href="/quote-request"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
                        Request a Quote
                    </Link>
                </section>
            </div>
        </div>
    </main>
    );
}
