"use client";
import { PaintBucket, ShieldCheck } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
            <img src="/images/security1.jpg" alt="interior finishings"
                className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    Finishing & Security
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                    Perfecting and protecting your property with premium materials and reliable solutions.
                </p>
            </div>
        </section>

        <div className="container py-12 md:py-16">
            {/* Finishing Materials */}
            <section id="finishing" className="py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="sticky top-24">
                            <PaintBucket  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Finishing Materials</h2>
                            <p className="text-muted-foreground">The final touches that define a space's character and
                                aesthetic. We offer a curated selection of premium finishing materials that combine
                                beauty with durability, ensuring a flawless look that lasts for years.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Paints and Coatings</h3>
                            <p className="text-muted-foreground">A vast spectrum of interior and exterior paints, primers,
                                and specialty coatings with superior coverage and longevity.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Tiles and Flooring</h3>
                            <p className="text-muted-foreground">From elegant hardwood and durable laminate to stylish
                                ceramic and porcelain tiles for any room.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Ceiling Systems</h3>
                            <p className="text-muted-foreground">Acoustic panels, decorative tiles, and suspension systems
                                for commercial and residential applications.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Decorative Fittings</h3>
                            <p className="text-muted-foreground">Mouldings, trim, and architectural details that add a touch
                                of sophistication and personality.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Safety */}
            <section id="security" className="py-12 border-t">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="sticky top-24">
                            <ShieldCheck  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Security & Safety</h2>
                            <p className="text-muted-foreground">Protect your property and the people in it with our
                                comprehensive range of security and safety solutions. We provide reliable, cutting-edge
                                products for residential, commercial, and industrial use.</p>
                        </div>
                    </div>
                    <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Locks and Door Hardware</h3>
                            <p className="text-muted-foreground">High-security deadbolts, smart locks, and commercial-grade
                                door hardware for robust access control.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">CCTV Systems</h3>
                            <p className="text-muted-foreground">Advanced surveillance cameras, DVRs, and NVRs for 24/7
                                monitoring and peace of mind.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Alarm Solutions</h3>
                            <p className="text-muted-foreground">Integrated intrusion detection systems, sensors, and alarms
                                to deter and alert you to threats.</p>
                        </div>
                        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                            <h3 className="font-headline text-xl font-semibold mb-2">Protective Equipment</h3>
                            <p className="text-muted-foreground">Essential personal protective equipment (PPE) including
                                hard hats, safety vests, gloves, and respiratory protection.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
}
