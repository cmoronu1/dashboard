import { Dispatch, SetStateAction } from "react";
import { DateInput } from "./date-selection-input";
import { FilterSelection } from "./filters-selection";
import { SummaryDisplay } from "./summary-table";

interface FilterBoxInterface {
  dateSelect: {
    startDate: string;
    endDate: string;
  };
  setDateSelect: Dispatch<
    SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
}

export function FilterBox({ dateSelect, setDateSelect }: FilterBoxInterface) {
  return (
    <div className="mt-10 text-2xl font-bold w-[95%] m-auto">
      <h1>Your total revenue</h1>
      <div className="flex justify-between ">
        <h1 className="bg-linear-to-r from-[#b167e9] to-[#ffc60c] text-transparent bg-clip-text">
          $90,239.00
        </h1>
        <div className="flex gap-2">
          <DateInput dateSelect={dateSelect} setDateSelect={setDateSelect} />
          <FilterSelection />
        </div>
      </div>
      <SummaryDisplay />
    </div>
  );
}
