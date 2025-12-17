import { CircleArrowDown, CircleArrowUp } from "lucide-react";

export function SummaryDisplay() {
  return (
    <div className="grid  grid-cols-3 mt-5 not-md:grid-cols-1 not-md:gap-2">
      <div className="flex flex-col border rounded-tl-2xl rounded-bl-2xl p-3 justify-between border-r-0 not-md:rounded-2xl not-md:border">
        <h6 className="text-[0.6em] text-[#5a5a5a]">New subcriptions</h6>
        <div className="grid grid-cols-2 gap-1 items-end pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] not-lg:text-[0.6em] items-center">
              <span>22</span>
              <span>
                <CircleArrowUp color="#22971d" fill="#c4fcc1" size={14} />
              </span>
              <span className="text-[#308d22] text-[0.7em]">15%</span>
            </div>
            <span className="text-[0.5em] font-normal">
              compared to last week
            </span>
          </div>
          <div className="border bg-amber-200 h-20"></div>
        </div>
      </div>
      <div className="flex flex-col border p-3 not-md:rounded-2xl not-md:border">
        <h6 className="text-[0.6em] text-[#5a5a5a]">New orders</h6>
        <div className="grid grid-cols-2 gap-1 items-end pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] not-lg:text-[0.6em] items-center">
              <span>320</span>
              <span>
                <CircleArrowDown color="#fc7f08" fill="#fff0d3" size={14} />
              </span>
              <span className="text-[#fc7f08] text-[0.7em]">4%</span>
            </div>
            <span className="text-[0.5em] font-normal">
              compared to last week
            </span>
          </div>
          <div className="border bg-amber-200 h-20"></div>
        </div>
      </div>
      <div className="flex flex-col border rounded-tr-2xl rounded-br-2xl border-l-0 p-3 not-md:rounded-2xl not-md:border">
        <h6 className="text-[0.6em] text-[#5a5a5a]">Avg. order revenue</h6>
        <div className="grid grid-cols-2 gap-1 items-end pt-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] not-lg:text-[0.6em] items-center">
              <span>$1,080</span>
              <span>
                <CircleArrowUp color="#22971d" fill="#c4fcc1" size={14} />
              </span>
              <span className="text-[#308d22] text-[0.7em]">8%</span>
            </div>
            <span className="text-[0.5em] font-normal">
              compared to last week
            </span>
          </div>
          <div className="border bg-amber-200 h-20"></div>
        </div>
      </div>
    </div>
  );
}
