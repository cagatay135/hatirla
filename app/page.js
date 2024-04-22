"use client";

import React, { useEffect, useState } from "react";
import TimeLine from "@/components/ui/timeline";
import SelectYear from "@/components/selectYear";
import ChangeCaseView from "@/components/ChangeCaseView";
import { getCases } from "../supabaseService";

export default function Home() {
  const currentYear = 2018;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [cases, setSelectedCases] = useState([]);
  const [filteredCases, setFilteredCase] = useState([]);
  const [years, setYears] = useState([]);
  const [viewType, setViewType] = useState("list");

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  const filterCasesByYear = () => {
    const filteredCase = cases.filter((c) =>
      c.case_date.includes(selectedYear.toString())
    );
    setFilteredCase(filteredCase);
  };

  useEffect(() => {
    async function fetchData() {
      const cases = await getCases();
      setSelectedCases(cases);
      setFilteredCase(cases);

      const uniqueYears = getUniqueYears(cases);
      setYears(uniqueYears);
    }

    fetchData();
  }, []);

  useEffect(() => {
    filterCasesByYear();
  }, [selectedYear]);

  const getUniqueYears = (casesData) => {
    const years = casesData.map((c) => c.case_year);
    const uniqueYears = Array.from(new Set(years));
    return uniqueYears;
  };

  const getViewContent = () => {
    if (viewType === "list") {
      return <TimeLine cases={filteredCases} />;
    } else if (viewType === "calendar") {
      return <div>Calendar View</div>;
    }
  };

  return (
    <div className="grid place-items-center p-10">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-center mb-5">Hatırla!</h2>
        </div>
        <div className="flex justify-center">
          <SelectYear
            years={years}
            currentYear={selectedYear}
            changeYear={handleYearChange}
          />
        </div>
        <div className="flex justify-center">
          <ChangeCaseView setViewType={setViewType} />
        </div>

        <div>{getViewContent()}</div>
      </div>
    </div>
  );
}
