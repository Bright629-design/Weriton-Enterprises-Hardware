"use client";
import { ArrowRight, Wrench, PaintBucket, Drill, Hammer, Layers, Users, Headset, CheckCircle, BadgeCheck, Truck } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc2ODQ0MjU0NHww&ixlib=rb-4.1.0&q=80&w=1080",
        "/images/home1.jpg",
        "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzY4NDcyNjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1620388640785-892616248ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoYXJkd2FyZSUyMHN0b3JlfGVufDB8fHx8MTc2ODUwMzk5MXww&ixlib=rb-4.1.0&q=80&w=1080"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden group">
                <div className="carousel-container absolute inset-0 w-full h-full">
                    <div className="carousel-track" id="hero-carousel">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src={src}
                                    alt="carousel slide" className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 max-w-4xl p-4">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                        Complete Hardware Solutions & Quality Construction Supplies
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                        Quality materials, professional tools, and expert guidance under one roof.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                        <Link href="/hardware"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                            Explore Products <ArrowRight  className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/quote-request"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Offer</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Weriton Enterprises is your one-stop-shop, seamlessly blending a comprehensive hardware supplier
                            with expert renovation and installation services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {/* Item 1 */}
                        <Link href="/hardware">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div
                                        className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <Wrench  className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold leading-none tracking-tight">Hardware
                                        Tools Supply</h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground">Your trusted source for professional tools, hardware
                                        equipment, and construction supplies.</p>
                                </div>
                            </div>
                        </Link>
                        {/* Item 2 */}
                        <Link href="/finishing-security">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div
                                        className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <PaintBucket  className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold leading-none tracking-tight">Paint Supply
                                        & Finishing</h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground">Premier supplier of high-quality paints, coatings, and
                                        finishing materials for all surfaces.</p>
                                </div>
                            </div>
                        </Link>
                        {/* Item 3 */}
                        <Link href="/hardware#tools">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div
                                        className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <Drill  className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold leading-none tracking-tight">Power Tools
                                        &
                                        Machinery</h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground">High-performance power tools and industrial machinery
                                        for
                                        every project and professional.</p>
                                </div>
                            </div>
                        </Link>
                        {/* Item 4 */}
                        <Link href="/renovation">
                            <div
                                className="rounded-lg border bg-card text-card-foreground shadow-sm text-center h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div
                                        className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                        <Hammer  className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-headline text-xl font-semibold leading-none tracking-tight">Renovation &
                                        Installation</h3>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-muted-foreground">Expert installation and renovation services managed by
                                        our team of skilled professionals.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-12 bg-background/50 border-t border-b mb-8">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Stat 1 */}
                        <div
                            className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group h-full border">
                            <div
                                className="bg-orange-950/10 p-4 rounded-full mb-4 group-hover:bg-orange-950/20 transition-colors ring-1 ring-orange-950/20">
                                <Layers  className="h-8 w-8 text-[#5c2304]" />
                            </div>
                            <h3 className="text-4xl font-bold font-headline text-[#5c2304] mb-1">40+</h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Services Offered
                            </p>
                        </div>
                        {/* Stat 2 */}
                        <div
                            className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group h-full border">
                            <div
                                className="bg-orange-950/10 p-4 rounded-full mb-4 group-hover:bg-orange-950/20 transition-colors ring-1 ring-orange-950/20">
                                <Wrench  className="h-8 w-8 text-[#5c2304]" />
                            </div>
                            <h3 className="text-4xl font-bold font-headline text-[#5c2304] mb-1">10000+</h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Tools Sold</p>
                        </div>
                        {/* Stat 3 */}
                        <div
                            className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group h-full border">
                            <div
                                className="bg-orange-950/10 p-4 rounded-full mb-4 group-hover:bg-orange-950/20 transition-colors ring-1 ring-orange-950/20">
                                <Users  className="h-8 w-8 text-[#5c2304]" />
                            </div>
                            <h3 className="text-4xl font-bold font-headline text-[#5c2304] mb-1">2000+</h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Happy Clients</p>
                        </div>
                        {/* Stat 4 */}
                        <div
                            className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group h-full border">
                            <div
                                className="bg-orange-950/10 p-4 rounded-full mb-4 group-hover:bg-orange-950/20 transition-colors ring-1 ring-orange-950/20">
                                <Headset  className="h-8 w-8 text-[#5c2304]" />
                            </div>
                            <h3 className="text-4xl font-bold font-headline text-[#5c2304] mb-1">24/7</h3>
                            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Support Available
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-2">Featured Products</h2>
                    <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
                        A selection of our top-rated tools and materials, trusted by professionals and DIYers alike.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Product 1 */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="https://images.unsplash.com/photo-1592054286113-649ba108e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwb3dlciUyMGRyaWxsfGVufDB8fHx8MTc2ODQ2NzU2NXww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="20V MAX Cordless Drill Kit"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">tools</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">20V MAX Cordless Drill Kit
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">High-performance
                                    cordless drill with two batteries, charger, and carrying case. Ideal for both
                                    professional and DIY projects.</p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/power-drill-kit"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="https://images.unsplash.com/photo-1660521246573-54796e6161b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwYWludCUyMGNhbnN8ZW58MHx8fHwxNzY4Mzk5MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Premium Interior Latex Paint"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">finishing</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Premium Interior Latex
                                    Paint</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">One-coat coverage paint
                                    and primer in one. Available in over 1,000 colors with a durable, washable finish.</p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/premium-interior-paint"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="/images/paint1.jpeg" alt="Premium Wall Paint"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">finishing</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Premium Wall Paint</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">High-coverage, durable
                                    interior emulsion paint. Available in a wide range of colors to transform your space
                                    with a perfect matte or satin finish.</p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/premium-wall-paint"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzbWFydCUyMGxvY2t8ZW58MHx8fHwxNzY4NTAzOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="WiFi Smart Lock Deadbolt"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">safety</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">WiFi Smart Lock Deadbolt
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">Keyless entry smart
                                    lock with built-in WiFi. Lock and unlock your door from anywhere using your smartphone.
                                </p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/smart-lock-deadbolt"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 5: Construction Glass */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="/images/glass1.webp" alt="Construction Glass"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">materials</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Construction Glass</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">High-quality clear and
                                    tinted float glass for windows, doors, and partitions. Available in various thicknesses.
                                </p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/construction-glass"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 6: Roofing Sheets */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="/images/sheets1.png" alt="Roofing Sheets"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">materials</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Roofing Sheets</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">Durable galvanized
                                    corrugated roofing sheets. Rust-resistant and weather-proof for long-lasting protection.
                                </p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/roofing-sheets"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 7: Steel Rebar */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="/images/steel1.jpg" alt="Steel Rebar"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">materials</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Steel Rebar</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">High-strength deformed
                                    steel reinforcement bars for concrete structures. Essential for strong foundations.</p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/steel-rebar"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product 8: Cement */}
                        <div
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img src="/images/cement1.webp" alt="Portland Cement"
                                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"/>
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                    <span
                                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 capitalize">materials</span>
                                </div>
                                <h3 className="font-semibold font-headline text-lg mb-2 line-clamp-1">Portland Cement</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">General purpose
                                    Portland cement for all concrete and mortar applications. consistent quality and
                                    strength.</p>
                                <div className="flex items-center justify-between mt-auto">

                                    <Link href="/products/portland-cement"
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/hardware"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                            View All Hardware
                        </Link>
                    </div>
                </div>
            </section>

            {/* High Performance Tools */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Drill  className="h-12 w-12 text-primary mb-4" />
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Premium Hardware & Tools</h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                            We stock a vast expertise of top-tier tools and equipment. Whether you need precision hand tools
                            or heavy-duty industrial machinery, we have everything to equip your workshop or job site.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Professional Power Tools</li>
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Hand Tools & Accessories
                            </li>
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Industrial Cleaning Equipment
                            </li>
                        </ul>
                        <Link href="/hardware#tools"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                            Shop Tools <ArrowRight  className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3">
                        <img src="/images/tool1.jpg" alt="High performance power tools" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Renovation */}
            <section className="py-16 md:py-24 bg-secondary">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-lg aspect-w-4 aspect-h-3 md:order-2">
                        <img src="https://images.unsplash.com/photo-1571843439991-dd2b8e051966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aG9tZSUyMHJlbm92YXRpb258ZW58MHx8fHwxNzY4NTAzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Construction worker doing renovation" className="w-full h-full object-cover" />
                    </div>
                    <div className="md:order-1">
                        <Hammer  className="h-12 w-12 text-primary mb-4" />
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Professional Renovation & Installation
                        </h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                            We provide end-to-end renovation solutions. Our skilled tradespeople handle everything from
                            electrical and plumbing to structural changes and final finishes, ensuring your project is
                            completed to the highest standards.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Full Home & Office Renovations</li>
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Electrical & Plumbing Installation
                            </li>
                            <li className="flex items-center"><CheckCircle 
                                    className="h-5 w-5 text-primary mr-3 flex-shrink-0" /> Project Management & Supervision
                            </li>
                        </ul>
                        <Link href="/renovation"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                            Explore Renovations <ArrowRight  className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Weriton Enterprises?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We're committed to building lasting relationships with our clients by providing unparalleled
                            service, quality, and value.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Point 1 */}
                        <div className="text-center border-0 shadow-none rounded-lg bg-card text-card-foreground">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <BadgeCheck  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-2xl font-semibold leading-none tracking-tight">Quality
                                    Assurance</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground">We source only the highest-quality materials and tools from
                                    trusted brands to guarantee durability and performance.</p>
                            </div>
                        </div>
                        {/* Point 2 */}
                        <div className="text-center border-0 shadow-none rounded-lg bg-card text-card-foreground">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Users  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-2xl font-semibold leading-none tracking-tight">Skilled
                                    Professionals</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground">Our team of designers, contractors, and technicians are
                                    experienced, certified, and dedicated to excellence.</p>
                            </div>
                        </div>
                        {/* Point 3 */}
                        <div className="text-center border-0 shadow-none rounded-lg bg-card text-card-foreground">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <div
                                    className="mx-auto bg-primary/10 text-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <Truck  className="w-8 h-8" />
                                </div>
                                <h3 className="font-headline text-2xl font-semibold leading-none tracking-tight">Reliable Supply
                                    Chain</h3>
                            </div>
                            <div className="p-6 pt-0">
                                <p className="text-muted-foreground">With our robust logistics network, we ensure your materials
                                    and products are delivered on time, every time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/why-us"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Ready to Start Your Project?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto mb-8">
                        Whether you're a homeowner planning a DIY project, a contractor stocking up for a job, or a
                        developer planning a new build, we have the solutions you need.
                    </p>
                    <Link href="/quote-request"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8">
                        Get a Quote Today <ArrowRight  className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
}