import { Card, CardContent } from "@/components/ui/card";
import { Images } from "./images";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";

interface CampaignCardInterface {
  campaign: campaign;
}
export function CampaignCard({ campaign }: CampaignCardInterface) {
  return (
    <>
      <Card className="w-full  mt-2 px-3 pt-3">
        <CardContent className="p-0">
          <div className="flex flex-col gap-4 text-[0.8em]">
            <Images image={campaign.logo} />
            <span className="font-bold">{campaign.title}</span>
            <div className="flex justify-between text-[0.8em]">
              <div className="flex gap-1">
                <span className="text-[#9d9d9d]">
                  {campaign.status == "Archived" ? "Ended:" : "Start:"}
                </span>
                <span>
                  {campaign.status == "Draft"
                    ? "Not Started"
                    : campaign.status == "In Progress"
                    ? format(campaign.startDate, "MMM dd, yyyy")
                    : campaign.endDate}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-[#9d9d9d]">
                  {campaign.status == "In Progress" ? "Ends:" : ""}
                </span>
                <span>
                  {campaign.status == "In Progress"
                    ? format(campaign.endDate, "MMM dd, yyy")
                    : ""}
                </span>
              </div>
            </div>
            <Progress
              className="h-1 bg-[#f0f0f0] w-[98%]"
              value={campaign.status == "In Progress" ? campaign.progress : 0 }
            />
            <div className="flex gap-1 text-[0.9em]">
              <span className="text-[#9f9f9f]">Last updated:</span>
              <span className="text-[#4a4a4a]">
                {format(campaign.updatedAt, "MMM dd, yyyy")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
