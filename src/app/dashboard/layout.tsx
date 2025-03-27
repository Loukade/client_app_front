import React from "react";
import Sidebar from "@/components/organisms/Sidebar";
import Header from "@/components/organisms/Header";

export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    <Header />
                    <main className="p-4 flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </section>
    )
}