"use client";

import { useMemo, useState } from "react";
import { FilterBox } from "./components/filter-page";
import { SearchBar } from "./components/search-page";
import { AllTask } from "./data/campaigns";
import { CampaignWrapper } from "./components/campaign-wrapper";

export default function Home() {
  const [data, setData] = useState(AllTask);
  const [search, setSearch] = useState("");
  const [dateSelect, setDateSelect] = useState({ startDate: "", endDate: "" });
  const filteredData = useMemo(() => {
    if (search.length > 0) {
      return data.filter((member) =>
        member.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return data;
    }
  }, [data, search]);
  return (
    <div className="w-[70%] m-auto mt-5">
      <SearchBar setFind={setSearch} />
      <FilterBox
        dateSelect={dateSelect}
        setDateSelect={setDateSelect}
        data={data}
        setData={setData}
        filteredData={filteredData}
      />
      <CampaignWrapper campaigns={filteredData} setCampaign={setData} />
    </div>
  );
}
