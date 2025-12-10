"use client";

import { FilterBox } from "./components/filter-page";
import {  SearchBar } from "./components/search-page";

export default function Home() {
  return <div className="w-[70%] m-auto mt-5">
    <SearchBar/>
    <FilterBox/>
  </div>;
}
