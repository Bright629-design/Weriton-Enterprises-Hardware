"use client";
import { Star } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
            <img src="/images/testimonials.webp" alt="happy customers"
                className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    What Our Clients Say
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                    Stories of trust, quality, and success from our valued partners and customers.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {/* Testimonial 1 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">JD</span>
                                </div>
                                <div>
                                    <p className="font-bold">John D., Homeowner</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "The renovation team at Weriton was incredible. They took our vague ideas for a kitchen
                                remodel and turned them into a reality. The quality of the cabinets and tile they
                                supplied is top-notch."e professionalism of the installation crew were top-notch."
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">SP</span>
                                </div>
                                <div>
                                    <p className="font-bold">Sarah P., Prime Contractors</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "As a general contractor, having a reliable supplier is crucial. Weriton Enterprises has
                                been my go-to for years. They always have what I need in stock, their pricing is fair,
                                and their delivery is always on time. They are a true partner."
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">MR</span>
                                </div>
                                <div>
                                    <p className="font-bold">Mike R., Developer</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "For our latest commercial project, Weriton handled everything from material procurement
                                for the structure to the final decorative finishes. Their end-to-end service saved us
                                time and money, and the final result exceeded our expectations."
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">EC</span>
                                </div>
                                <div>
                                    <p className="font-bold">Emily C., Renovator</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "I rely on Weriton for their vast selection of high-quality finishing materials. Their
                                team is knowledgeable and always helps me find the perfect tiles, paints, and hardware
                                to bring my client's vision to life."
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 5 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">DL</span>
                                </div>
                                <div>
                                    <p className="font-bold">David L., DIY Enthusiast</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 text-muted-foreground/30" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "The staff at the hardware counter are amazing. I'm a weekend warrior, and they've
                                patiently answered countless questions and given me great advice for my home projects.
                                Their tool selection is fantastic."
                            </blockquote>
                        </div>
                    </div>

                    {/* Testimonial 6 */}
                    <div className="break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border">
                                    <span
                                        className="flex h-full w-full items-center justify-center rounded-full bg-muted">JB</span>
                                </div>
                                <div>
                                    <p className="font-bold">Jessica B., Facility Manager</p>
                                    <div className="flex text-primary">
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                        <Star  className="h-4 w-4 fill-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <blockquote className="italic text-muted-foreground">
                                "We use Weriton for all our facility's maintenance and safety supplies. Their security
                                solutions, from CCTV to access control hardware, are reliable and their team provided
                                excellent training and support."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}
