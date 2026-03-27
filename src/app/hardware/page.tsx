"use client";
import { BrickWall, Cable, Pipette, Drill } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center text-center text-white">
            <img src="/images/hardware1.png" alt="construction materials"
                className="object-cover w-full h-full absolute inset-0" />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 max-w-4xl p-4">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    Hardware & Supplies
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow">
                    The professional's choice for quality materials, tools, and equipment.
                </p>
            </div>
        </section>

        <div className="container py-12 md:py-16">
            {/* Construction Materials */}
            <section id="materials" className="py-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <BrickWall  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Construction Materials</h2>
                            <p className="text-muted-foreground">The foundation of any great project. We supply a
                                comprehensive range of high-grade construction materials suitable for residential,
                                commercial, and industrial applications. Our materials meet all safety and quality
                                standards, ensuring your build is strong and durable.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Cement, Aggregates & Steel</h3>
                                <p className="text-muted-foreground">From foundation to framework, we have the core
                                    materials you need.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Timber and Boards</h3>
                                <p className="text-muted-foreground">Sustainably sourced lumber, plywood, MDF, and specialty
                                    boards for framing and finishing.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Roofing Materials</h3>
                                <p className="text-muted-foreground">A wide selection of shingles, tiles, membranes, and
                                    underlayments to protect your structure.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Bricks and Blocks</h3>
                                <p className="text-muted-foreground">Various types and sizes of bricks and concrete blocks
                                    for walls and paving.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-headline font-bold mb-4">Examples</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/cement1.webp" alt="cement bags"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">cement bags</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1649796877686-847d6bdeea6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjBhZ2dyZWdhdGVzfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="construction aggregates"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">construction aggregates</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1763771420551-18bc44399f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzdGVlbCUyMHJlYmFyfGVufDB8fHx8MTc2ODQ3MzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="steel rebar"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">steel rebar</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/glass1.webp" alt="construction glass"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">construction glass</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/sheets1.png" alt="roofing sheets"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">roofing sheets</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/brick1.jpg" alt="red bricks"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">red bricks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Electrical Supplies */}
            <section id="electrical" className="py-12 border-t">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Cable  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Electrical Supplies</h2>
                            <p className="text-muted-foreground">Power your project safely and efficiently with our
                                extensive stock of electrical supplies. We carry everything from basic wiring to
                                advanced solar systems, all from trusted manufacturers.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Cables and Wiring</h3>
                                <p className="text-muted-foreground">A full range of gauges and types for residential and
                                    commercial wiring.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Switches and Sockets</h3>
                                <p className="text-muted-foreground">Modern and classic designs to fit any interior style.
                                </p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Lighting Solutions</h3>
                                <p className="text-muted-foreground">LEDs, fixtures, landscape lighting, and smart lighting
                                    systems.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Solar Systems</h3>
                                <p className="text-muted-foreground">Panels, inverters, and batteries for sustainable energy
                                    solutions.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-headline font-bold mb-4">Examples</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1766170507949-d3e120568a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxlbGVjdHJpY2FsJTIwY2FibGVzfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="electrical cables"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">electrical cables</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1677256796232-6305d23cb0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsaWdodCUyMHN3aXRjaGVzfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="light switches"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">light switches</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1526116638181-d787e552d669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxMRUQlMjBsaWdodGluZ3xlbnwwfHx8fDE3Njg1MDM5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="LED lighting"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">LED lighting</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzb2xhciUyMHBhbmVsc3xlbnwwfHx8fDE3Njg0MDEzODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="solar panels"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">solar panels</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1649446326441-562fead2fd5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbGVjdHJpY2FsJTIwY29uZHVpdHxlbnwwfHx8fDE3Njg1MDM5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="electrical conduit"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">electrical conduit</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1635335874521-7987db781153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjaXJjdWl0JTIwYnJlYWtlcnN8ZW58MHx8fHwxNzY4NTAzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="circuit breakers"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">circuit breakers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plumbing */}
            <section id="plumbing" className="py-12 border-t">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Pipette  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Plumbing & Sanitary</h2>
                            <p className="text-muted-foreground">Reliable plumbing is crucial. We offer a vast selection of
                                pipes, fittings, fixtures, and accessories to ensure a leak-free and efficient system
                                for any building.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Pipes and Fittings</h3>
                                <p className="text-muted-foreground">PVC, copper, PEX, and all the necessary connectors for
                                    any application.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Taps and Mixers</h3>
                                <p className="text-muted-foreground">Durable and stylish faucets for kitchens, bathrooms,
                                    and utility areas.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Water Tanks</h3>
                                <p className="text-muted-foreground">Storage solutions for residential and commercial water
                                    management.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Bathroom Accessories</h3>
                                <p className="text-muted-foreground">Complete your bathroom with our range of high-quality
                                    accessories.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-headline font-bold mb-4">Examples</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1746721437832-bcf682d2addc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwbHVtYmluZyUyMHBpcGVzfGVufDB8fHx8MTc2ODQ3MzQ4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="plumbing pipes"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">plumbing pipes</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1764551385451-81fbf705e64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBmYXVjZXRzfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="modern faucets"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">modern faucets</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1497990136619-d0c2de2b5b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3YXRlciUyMHRhbmt8ZW58MHx8fHwxNzY4NDYwMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="water tank"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">water tank</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1761353855019-05f2f3ed9c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxiYXRocm9vbSUyMGFjY2Vzc29yaWVzfGVufDB8fHx8MTc2ODUwMzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="bathroom accessories"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">bathroom accessories</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1701877956223-109533153f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxraXRjaGVuJTIwc2lua3N8ZW58MHx8fHwxNzY4NTAzOTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="kitchen sinks"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">kitchen sinks</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="https://images.unsplash.com/photo-1595515106886-43b1443a2e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0b2lsZXRzfGVufDB8fHx8MTc2ODM5ODQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="modern toilets"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">modern toilets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section id="tools" className="py-12 border-t">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Drill  className="h-12 w-12 text-primary mb-4" />
                            <h2 className="text-3xl font-headline font-bold mb-4">Tools & Equipment</h2>
                            <p className="text-muted-foreground">The right tool makes all the difference. We stock a
                                professional-grade selection of hand tools, power tools, and heavy equipment for sale
                                and for rent. Built to last and perform under pressure.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Hand Tools</h3>
                                <p className="text-muted-foreground">Hammers, wrenches, screwdrivers, and everything in
                                    between for precision work.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Power Tools</h3>
                                <p className="text-muted-foreground">Drills, saws, sanders, and grinders from the industry's
                                    most trusted brands.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Construction Equipment</h3>
                                <p className="text-muted-foreground">Ladders, scaffolding, and mixers to support larger
                                    projects.</p>
                            </div>
                            <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm p-6">
                                <h3 className="font-headline text-xl font-semibold mb-2">Safety Gear</h3>
                                <p className="text-muted-foreground">Hard hats, gloves, safety glasses, and harnesses to
                                    keep you safe on the job.</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-headline font-bold mb-4">Examples</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool1.jpg" alt="Professional Tool 1"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 1</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool4.jpg" alt="Professional Tool 2"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 2</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool5.avif" alt="Professional Tool 3"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 3</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool6.avif" alt="Professional Tool 4"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 4</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool7.webp" alt="Professional Tool 5"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 5</p>
                                    </div>
                                </div>
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                                    <img src="/images/tool8.webp" alt="Professional Tool 6"
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" />
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                        <p className="text-white text-xs font-semibold">Professional Tool 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
}
