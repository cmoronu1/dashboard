import { CampaignCard } from "./campaign-card";
import { AddCampaign } from "./add-campaign";

interface CampaignColumnInterface {
  data: campaign[];
}
export function CampaignColumn({ data }: CampaignColumnInterface) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[#939393] flex items-center gap-2 text-[0.8em]">
        <span>{data[0].status}</span>{" "}
        <span className="text-black border-0 bg-[#f5f5f5] w-4 rounded-[0.3rem] text-center">
          {data.length}
        </span>
      </div>
      {data.map((member) => (
        <div key={member.title}>
          <CampaignCard campaign={member} />
        </div>
        
      ))}
      <AddCampaign/>
    </div>
  );
}
