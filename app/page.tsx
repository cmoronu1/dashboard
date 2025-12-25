"use client";

import { useMemo, useState } from "react";
import { FilterBox } from "./components/filter-page";
import { SearchBar } from "./components/search-page";
import { AllTask } from "./data/campaigns";
import { CampaignWrapper } from "./components/campaign-wrapper";
import { format } from "date-fns";

export default function Home() {
  const [data, setData] = useState(AllTask);
  const [search, setSearch] = useState("");
  const [dateSelect, setDateSelect] = useState({ startDate: "", endDate: "" });
  const filteredData = useMemo(() => {
    if (search.length > 0) {
      return data.filter((member) =>
        member.title.toLowerCase().includes(search.toLowerCase())
      );
    } else if ((dateSelect.startDate.length && dateSelect.endDate.length) > 0) {
      return data.filter(
        (member) =>
          new Date(member.startDate) >= new Date(dateSelect.startDate) &&
          new Date(member.endDate) <= new Date(dateSelect.endDate)
      );
    } else {
      return data;
    }
  }, [data, search, dateSelect]);
  return (
    <div className="w-[70%] m-auto mt-5 not-lg:w-[90%]">
      <SearchBar setFind={setSearch} />
      <FilterBox dateSelect={dateSelect} setDateSelect={setDateSelect} />
      <CampaignWrapper
        campaigns={filteredData.toReversed()}
        setCampaign={setData}
        setDateSelect={setDateSelect}
      />
    </div>
  );
}
