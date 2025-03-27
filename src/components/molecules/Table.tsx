import React from 'react';
import Image from "@/components/atoms/Image";
interface TableMoleculeProps {
  headers: string[];
  rows: string[][];
}

const ImageWithArrow: React.FC = () => (
  <Image
    src="/upArrow.svg"
    alt="upArrow"
    width={12}
    height={12}
    className="ml-2"
  />
);

const Table: React.FC<TableMoleculeProps> = ({headers,rows}) => {
  return (
    <table className="w-full bg-white rounded-md table-auto">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 text-left">
              <div className="flex items-center">
                <span className="text-[#768396]">{header}</span>
                <ImageWithArrow />
              </div>
            </th>
          ))}
          <th className="py-2 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {rows.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((data, dataIndex) => (
              dataIndex === 0 ? 
              <td key={dataIndex}className="py-2 px-4"><div className="flex items-center">
                                    <Image
                                        src="/logoFileDashboard.svg"
                                        alt="file"
                                        width={30}
                                        height={30}
                                        className="mr-2"
                                    />
                                    <span className="font-bold">{data}</span></div></td> : 
              <td key={dataIndex} className="py-2 px-4 text-[#768396]">{data}</td>
            ))}
            <td className="py-2 px-4 text-[#768396]">
              <Image
                src="/3point.svg"
                alt="3point"
                width={4}
                height={18}
                className="mr-2"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;