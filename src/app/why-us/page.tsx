"use client";
import { Award, Users, BadgeCheck, Wallet, Sparkles } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
            <img src="/images/whyus.avif" alt="happy client" className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    Why Choose Weriton Enterprises?
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                    Your partner in quality, reliability, and excellence from start to finish.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Reason 1 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Award  className="w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Trusted Supplier</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">With decades of experience, we've built a reputation for
                                reliability. Our clients trust us to provide top-quality materials and meet project
                                deadlines.</p>
                        </div>
                    </div>

                    {/* Reason 2 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Users  className="w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Experienced Professionals</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Our team consists of certified tradespeople, skilled
                                craftsmen, and material experts who bring years of experience to every job.</p>
                        </div>
                    </div>

                    {/* Reason 3 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <BadgeCheck  className="w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Quality Materials</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">We partner with leading manufacturers to source durable,
                                high-performance materials that meet and exceed industry standards.</p>
                        </div>
                    </div>

                    {/* Reason 4 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Wallet  className="w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">Affordable Pricing</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">Our scale and strong supplier relationships allow us to
                                offer competitive pricing without compromising on quality.</p>
                        </div>
                    </div>

                    {/* Reason 5 */}
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-row items-center gap-4 p-6">
                            <div className="bg-primary/10 text-primary p-3 rounded-full">
                                <Sparkles  className="w-8 h-8" />
                            </div>
                            <h3 className="font-headline text-xl font-semibold">End-to-End Solutions</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <p className="text-muted-foreground">From initial planning and material supply to final
                                installation and finishing, we handle the entire process. No need to juggle multiple
                                contractors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Ready to Experience the Difference?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's discuss how our commitment to quality and service can benefit your next project. Contact our
                    team today.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/quote-request"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                        Get a Quote
                    </Link>
                    <Link href="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    </main>
    );
}
