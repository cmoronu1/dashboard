"use client";

import { useState } from "react";
import { FilterBox } from "./components/filter-page";
import {  SearchBar } from "./components/search-page";
import { AllTask } from "./data/campaigns";

export default function Home() {
  const [data, setData] = useState(AllTask);
  return <div className="w-[70%] m-auto mt-5">
    <SearchBar/>
    <FilterBox/>
  </div>;
}
