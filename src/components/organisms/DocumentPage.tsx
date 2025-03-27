import Table from "@/components/molecules/Table";
export default function DocumentPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col items-start justify-start">
        <h1 className="font-bold text-2xl">Documents</h1>
        <div className="w-full bg-white mt-4">
        <input
            type="text"
            placeholder="Rechercher un document"
            className="px-5 py-3 w-60 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-200 mb-4 mt-4 ml-3"
          />
          <div className="w-full mt-4">
          <Table headers={['Nom', 'Service', 'Taille', 'Dernière Modification', 'Total']} rows={[['Facture Maintenance', 'Site 1', '2.9MB', '25 Fevrier 2024', '1800€']]}></Table>
          </div>
        </div>
      </div>
    </div>
  );
}
