"use client";
import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

export type dataRow = {
  hero: string;
  rating: string;
  averagePlace: number;
  mainCurve: string;
  alternativeCurve: string;
  quickGuide: string;
};

const Data = () => {
  const [data, setData] = useState<dataRow[]>([]);

  useEffect(() => {
    const csvFileName = "spreadsheet.csv";
    const fetchFileData = async () => {
      const response = await fetch(csvFileName);
      const csvData = await response.text();
      const parsedData = parseCSV(csvData);
      setData(parsedData);
    };
    fetchFileData();
  }, []);

  function parseCSV(csvData: string): dataRow[] {
    const lines: string[] = csvData.split("\n");
    const dataRows: dataRow[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values: string[] = lines[i].split(",");
      const dataObject: dataRow = {
        hero: values[0],
        rating: values[1],
        averagePlace: parseFloat(values[2]),
        mainCurve: values[3],
        alternativeCurve: values[4],
        quickGuide: values[5],
      };

      dataRows.push(dataObject);
    }

    return dataRows;
  }

  return (
    <div id="dataContainer" className="flex">
      <div className="grid grid-cols-2 p-4 gap-0 mx-auto gap-x-4">
        {data.map((row: dataRow) => (
          <HeroCard key={row.hero} row={row} />
        ))}
      </div>
    </div>
  );
};

export default Data;
