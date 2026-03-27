"use client";
import { Search, ChevronDown } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="container py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Products</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore our wide range of high-quality building materials, tools, and supplies.
                </p>
            </div>

            <div className="sticky top-16 z-40 bg-background/95 py-4 backdrop-blur-sm mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search 
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input id="product-search" type="text" placeholder="Search for products by name..."
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10" />
                    </div>
                    <div className="relative w-full md:w-[240px]">
                        <select id="category-filter"
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none">
                            <option value="all">All Categories</option>
                            <option value="materials">Construction Materials</option>
                            <option value="tools">Tools & Equipment</option>
                            <option value="finishing">Finishing & Decoration</option>
                            <option value="safety">Safety & Security</option>
                        </select>
                        <ChevronDown 
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50" />
                    </div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto">
                        <Search  className="h-4 w-4 md:hidden mr-2" />
                        Search
                    </button>
                </div>
            </div>

            <div id="product-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {/* Product 1 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 product-item"
                    data-category="tools" data-name="20V MAX Cordless Drill Kit">
                    <Link href="#" className="flex flex-col h-full group bg-card">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1592054286113-649ba108e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3dlciUyMGRyaWxsfGVufDB8fHx8MTc2ODQ2NzU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="20V MAX Cordless Drill Kit"
                                className="object-cover aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                Tools & Equipment
                            </div>
                            <h3
                                className="text-2xl font-semibold leading-none tracking-tight text-lg font-headline line-clamp-2 h-[2.5em]">
                                20V MAX Cordless Drill Kit</h3>
                        </div>
                        <div className="p-4 pt-0 flex-grow">
                            <p className="text-sm text-muted-foreground line-clamp-3">High-performance cordless drill with
                                two batteries, charger, and carrying case. Ideal for both professional and DIY projects.
                            </p>
                        </div>
                        <div className="p-4 pt-0 mt-auto">
                            <p className="font-semibold text-base text-primary">$129.99</p>
                        </div>
                    </Link>
                </div>

                {/* Product 2 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 product-item"
                    data-category="finishing" data-name="Premium Interior Latex Paint">
                    <Link href="#" className="flex flex-col h-full group bg-card">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1660521246573-54796e6161b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwYWludCUyMGNhbnN8ZW58MHx8fHwxNzY4Mzk5MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Premium Interior Latex Paint"
                                className="object-cover aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                Finishing & Decoration
                            </div>
                            <h3
                                className="text-2xl font-semibold leading-none tracking-tight text-lg font-headline line-clamp-2 h-[2.5em]">
                                Premium Interior Latex Paint</h3>
                        </div>
                        <div className="p-4 pt-0 flex-grow">
                            <p className="text-sm text-muted-foreground line-clamp-3">One-coat coverage paint and primer in
                                one. Available in over 1,000 colors with a durable, washable finish.</p>
                        </div>
                        <div className="p-4 pt-0 mt-auto">
                            <p className="font-semibold text-base text-primary">$45.99 / gallon</p>
                        </div>
                    </Link>
                </div>

                {/* Product 3 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 product-item"
                    data-category="materials" data-name="Pressure-Treated Lumber 2x4">
                    <Link href="#" className="flex flex-col h-full group bg-card">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1663648695753-7d13f4ebee81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsdW1iZXIlMjBzdGFja3xlbnwwfHx8fDE3Njg1MDM5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Pressure-Treated Lumber 2x4"
                                className="object-cover aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                Construction Materials
                            </div>
                            <h3
                                className="text-2xl font-semibold leading-none tracking-tight text-lg font-headline line-clamp-2 h-[2.5em]">
                                Pressure-Treated Lumber 2x4</h3>
                        </div>
                        <div className="p-4 pt-0 flex-grow">
                            <p className="text-sm text-muted-foreground line-clamp-3">8-foot long pressure-treated lumber
                                for outdoor construction projects. Resistant to rot, decay, and termites.</p>
                        </div>
                        <div className="p-4 pt-0 mt-auto">
                            <p className="font-semibold text-base text-primary">$8.99 / board</p>
                        </div>
                    </Link>
                </div>

                {/* Product 4 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 product-item"
                    data-category="safety" data-name="WiFi Smart Lock Deadbolt">
                    <Link href="#" className="flex flex-col h-full group bg-card">
                        <div className="relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzbWFydCUyMGxvY2t8ZW58MHx8fHwxNzY4NTAzOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="WiFi Smart Lock Deadbolt"
                                className="object-cover aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-4">
                            <div
                                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 w-fit mb-2">
                                Safety & Security
                            </div>
                            <h3
                                className="text-2xl font-semibold leading-none tracking-tight text-lg font-headline line-clamp-2 h-[2.5em]">
                                WiFi Smart Lock Deadbolt</h3>
                        </div>
                        <div className="p-4 pt-0 flex-grow">
                            <p className="text-sm text-muted-foreground line-clamp-3">Keyless entry smart lock with built-in
                                WiFi. Lock and unlock your door from anywhere using your smartphone.</p>
                        </div>
                        <div className="p-4 pt-0 mt-auto">
                            <p className="font-semibold text-base text-primary">$249.00</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    </main>
    );
}
