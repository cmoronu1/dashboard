import { CircleArrowDown, CircleArrowUp } from "lucide-react";

export function SummaryDisplay() {
  return (
    <div className="grid  grid-cols-3 mt-5">
      <div className="flex flex-col border rounded-tl-2xl rounded-bl-2xl p-3 justify-between">
        <h6 className="text-[0.6em] text-[#5a5a5a]">New subcriptions</h6>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] items-center">
              <span>22</span>
              <span>
                <CircleArrowUp color="#22971d" fill="#c4fcc1" size={14}/>
              </span>
              <span className="text-[#308d22] text-[0.7em]">15%</span>
            </div>
            <span className="text-[0.5em] font-normal">compared to last week</span>
          </div>
          <div className="border bg-amber-200 h-5"></div>
        </div>
      </div>
      <div className="flex flex-col border p-3">
        <h6 className="text-[0.6em] text-[#5a5a5a]">New orders</h6>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] items-center">
              <span>320</span>
              <span>
                <CircleArrowDown color="#fc7f08" fill="#fff0d3" size={14}/>
              </span>
              <span className="text-[#fc7f08] text-[0.7em]">4%</span>
            </div>
            <span className="text-[0.5em] font-normal">compared to last week</span>
          </div>
          <div className="border bg-amber-200 h-5"></div>
        </div>
      </div>
      <div className="flex flex-col border rounded-tr-2xl rounded-br-2xl p-3">
        <h6 className="text-[0.6em] text-[#5a5a5a]">Avg. order revenue</h6>
        <div className="grid grid-cols-2 gap-1">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 text-[0.8em] items-center">
              <span>$1,080</span>
              <span>
                <CircleArrowUp color="#22971d" fill="#c4fcc1" size={14}/>
              </span>
              <span className="text-[#308d22] text-[0.7em]">8%</span>
            </div>
            <span className="text-[0.5em] font-normal">compared to last week</span>
          </div>
          <div className="border bg-amber-200 h-5"></div>
        </div>
      </div>
    </div>
  );
}
