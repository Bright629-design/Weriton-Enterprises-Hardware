"use client";
import { ChevronDown } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="container py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find answers to common questions about our products, services, and processes.
                </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                {/* Example Accordion Item 1 */}
                <div className="border-b">
                    <button
                        className="accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        What types of clients do you serve?
                        <ChevronDown  className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="pb-4 pt-0">
                            We serve a wide range of clients including individual homeowners, DIY enthusiasts,
                            professional contractors, developers, interior designers, and corporate clients.
                        </div>
                    </div>
                </div>

                {/* Example Accordion Item 2 */}
                <div className="border-b">
                    <button
                        className="accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        What are your quality standards for products?
                        <ChevronDown  className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="pb-4 pt-0">
                            We source our products from reputable manufacturers who meet stringent quality and safety
                            standards. All our materials are commercial-grade and built to last.
                        </div>
                    </div>
                </div>

                {/* Example Accordion Item 3 */}
                <div className="border-b">
                    <button
                        className="accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        Do you offer delivery services?
                        <ChevronDown  className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="pb-4 pt-0">
                            Yes, we offer reliable delivery services for all our products. We have a fleet of trucks to
                            handle orders of any size, from a few items to a full construction site delivery.
                        </div>
                    </div>
                </div>

                {/* Example Accordion Item 4 */}
                <div className="border-b">
                    <button className="flex justify-between items-center w-full text-left font-semibold text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        Do you offer installation services?
                        <ChevronDown  className="h-5 w-5 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="mt-2 text-muted-foreground hidden">
                            <p>Yes! We have a full team of skilled professionals who can handle everything from
                                electrical and plumbing installations to full-scale renovations. We are more than just a
                                supply store.</p>
                        </div>
                    </div>
                </div>

                {/* Example Accordion Item 5 */}
                <div className="border-b">
                    <button
                        className="accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        How do I get a quote for a large project or renovation?
                        <ChevronDown  className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="pb-4 pt-0">
                            You can use the 'Request a Quote' form on our website to provide details about your project.
                            For large-scale projects, we recommend contacting our sales team directly to discuss your
                            specific needs.
                        </div>
                    </div>
                </div>

                {/* Example Accordion Item 6 */}
                <div className="border-b">
                    <button
                        className="accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left text-lg"
                        aria-expanded="false" onclick="toggleAccordion(this)">
                        Do you offer installation services for the products you sell?
                        <ChevronDown  className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    <div className="accordion-content text-base text-muted-foreground">
                        <div className="pb-4 pt-0">
                            Yes, we have a team of skilled professionals who can provide installation for many of the
                            products we sell, including electrical, plumbing, flooring, and security systems. This is
                            part of our end-to-end service offering.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
    );
}
