import { CampaignCard } from "./campaign-card";
import { AddCampaign } from "./add-campaign";
import { Dispatch, SetStateAction } from "react";

interface CampaignColumnInterface {
  data: campaign[];
  setCampaigns: Dispatch<SetStateAction<campaign[]>>;
  status: string
}
export function CampaignColumn({
  data,
  setCampaigns, status
}: CampaignColumnInterface) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[#939393] flex items-center gap-2 text-[0.8em]">
        <span>{status}</span>
        <span className="text-black border-0 bg-[#f5f5f5] w-4 rounded-[0.3rem] text-center">
          {data.length}
        </span>
      </div>
      {data.map((member) => (
        <div key={member.title}>
          <CampaignCard campaign={member} />
        </div>
      ))}
      <AddCampaign data = {data} setData = {setCampaigns} currentStatus = {status}/>
    </div>
  );
}
