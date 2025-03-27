"use client";
import { getAllSites } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Sites } from "@generated/models/Sites";
import CardItem from "@/components/molecules/CardItem";
import Table from "@/components/molecules/Table";
import SiteCard from "@/components/molecules/SiteCard";

const UserDashboardPage = (props: any) => {
    const [sites, setSites] = useState<Sites[]>([]);

    useEffect(() => {
        const allSites = async () => {
            const data = await getAllSites();
            return data;
        }
        allSites().then(sites => {
            setSites(sites.data);
        })
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-start justify-start">
                <h1 className="font-bold text-2xl">Bienvenue {props.username}</h1>
                <div className="w-full flex justify-center mt-10 space-x-4">
                    <CardItem iconSrc="/logoTaskDashboard.svg" description="Tâches Terminées" count={8} />
                    <CardItem iconSrc="/logoNewTaskDashboard.svg" description="Nouvelles Tâches" count={10} />
                    <CardItem iconSrc="/logoProjectDoneDashboard.svg" description="Projets Réalisés" count={10} />
                </div>
                {sites.length > 0 && (
                    <div className="w-full">
                        <h1 className="font-bold text-2xl mt-12">Sites</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {sites.map((site: Sites) => (
                                <SiteCard key={site.id} site={site} />
                            ))}
                        </div>
                    </div>
                )}
                <div className="w-full">
                    <h1 className="font-bold text-2xl mt-12">Factures</h1>
                    <div className="w-full mt-4">
                        <Table headers={['Nom', 'Service', 'Taille', 'Dernière Modification', 'Total']} rows={[['Facture Maintenance', 'Site 1', '2.9MB', '25 Fevrier 2024', '1800€']]}></Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboardPage;
