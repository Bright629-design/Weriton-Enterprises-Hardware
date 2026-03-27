"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex-1">
        <div className="bg-background">
            <div className="container py-12 md:py-16">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">Blog & Insights</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Expert advice, industry trends, and practical tips for your next project.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                        <Link href="#" className="flex flex-col h-full bg-card">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="https://images.unsplash.com/photo-1683115099413-5b7d85c2950c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRvb2xzfGVufDB8fHx8MTc2ODQzNjY4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="How to Choose the Right Power Tool for the Job"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-headline font-bold line-clamp-2 mb-2">How to Choose the Right
                                    Power Tool for the Job</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border">
                                        <span
                                            className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs">WC</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Weriton Costa</p>
                                        <p className="text-xs text-muted-foreground">May 15, 2024</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground line-clamp-3 text-sm">Corded or cordless? Brushed or
                                    brushless? This guide breaks down what you need to know to make a smart purchase.
                                </p>
                            </div>
                            <div
                                className="p-6 pt-0 mt-auto flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Read More <ArrowRight  className="ml-2 h-4 w-4" />
                            </div>
                        </Link>
                    </div>

                    {/* Blog Post 2 */}
                    <div
                        className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                        <Link href="#" className="flex flex-col h-full bg-card">
                            <div className="relative overflow-hidden aspect-video">
                                <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc2ODQ0MjU0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Top 5 Interior Design Trends for Late 2024"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-headline font-bold line-clamp-2 mb-2">Top 5 Interior Design
                                    Trends for Late 2024</h3>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border">
                                        <span
                                            className="flex h-full w-full items-center justify-center rounded-full bg-muted text-xs">JD</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Jane Doe</p>
                                        <p className="text-xs text-muted-foreground">May 10, 2024</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground line-clamp-3 text-sm">From sustainable materials to bold
                                    colors, discover the trends that are shaping the future of interior design and how
                                    to incorporate them.</p>
                            </div>
                            <div
                                className="p-6 pt-0 mt-auto flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Read More <ArrowRight  className="ml-2 h-4 w-4" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
