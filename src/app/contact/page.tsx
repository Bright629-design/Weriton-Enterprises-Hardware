"use client";
import { Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="container py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have a question, need support, or want to discuss a project? We're here to help.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="max-w-3xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-headline font-semibold leading-none tracking-tight">Send us a
                                Message</h3>
                        </div>
                        <div className="p-6 pt-0">
                            <form action="mailto:cheruiyotemicky@gmail.com" method="post" enctype="text/plain"
                                className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="name">Full Name</label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="name" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="email">Email Address</label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email" type="email" placeholder="you@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="inquiryType">Reason for Inquiry</label>
                                    <div className="relative">
                                        <select
                                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            id="inquiryType">
                                            <option value="general">General Question</option>
                                            <option value="quote">Project Quote</option>
                                            <option value="product">Product Information</option>
                                            <option value="support">Customer Support</option>
                                            <option value="partnership">Partnership Inquiry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="message">Message</label>
                                    <textarea
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="message" placeholder="How can we help you?" required></textarea>
                                </div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full"
                                    type="submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-6">Our Information</h2>
                        <div className="space-y-6">
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-row items-center gap-4 p-6">
                                    <Phone  className="h-8 w-8 text-primary" />
                                    <div>
                                        <h3 className="font-semibold">By Phone</h3>
                                        <p className="text-sm text-muted-foreground">Mon-Sat, 8am to 7pm</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link href="tel:0739307745"
                                        className="text-lg hover:text-primary transition-colors">0739307745</Link>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-row items-center gap-4 p-6">
                                    <Mail  className="h-8 w-8 text-primary" />
                                    <div>
                                        <h3 className="font-semibold">By Email</h3>
                                        <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <Link href="mailto:cheruiyotemicky@gmail.com"
                                        className="text-lg hover:text-primary transition-colors">weritonenterprise@gmail.com</Link>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-row items-center gap-4 p-6">
                                    <MapPin  className="h-8 w-8 text-primary" />
                                    <div>
                                        <h3 className="font-semibold">Main Store & Showroom</h3>
                                        <p className="text-sm text-muted-foreground">Visit us in person</p>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <address className="not-italic text-lg">
                                        Kipsitet, along kericho-Kisumu road
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div>
                        <h2 className="text-2xl font-headline font-bold mb-6">Find Us</h2>
                        <div className="rounded-lg overflow-hidden border bg-card shadow-sm aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.976029272337!2d35.1583!3d-0.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a56e0775a46c1%3A0x62c953569769a6c6!2sKipsitet!5e0!3m2!1sen!2ske!4v1706178000000!5m2!1sen!2ske"
                                width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" className="w-full h-full object-cover">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
