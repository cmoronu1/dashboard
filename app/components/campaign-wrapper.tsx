import { Key } from "lucide-react";
import { CampaignColumn } from "./campaign-column";
import { Dispatch, SetStateAction } from "react";

interface WrapperInterface {
  campaigns: campaign[];
  setCampaign: Dispatch<SetStateAction<campaign[]>>;
  setDateSelect: Dispatch<
    SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
}
export function CampaignWrapper({
  campaigns,
  setCampaign,
  setDateSelect,
}: WrapperInterface) {
  return (
    <div className="w-[95%] m-auto">
      <div className="flex justify-between mt-8 items-center">
        <span className="font-bold text-[1.1em]">Recent campaigns</span>
        <span
          onClick={() => setDateSelect({ startDate: "", endDate: "" })}
          className=" underline"
        >
          View All
        </span>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-4">
        {["Draft", "In Progress", "Archived"].map((member) => (
          <div key={member}>
            <CampaignColumn
              data={campaigns.filter((campaign) => campaign.status == member)}
              setCampaigns={setCampaign}
              status={member}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
