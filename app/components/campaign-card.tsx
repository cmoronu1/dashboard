import { Card, CardContent } from "@/components/ui/card";
import { Images } from "./images";
import { Progress } from "@/components/ui/progress";

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
            {campaign.title}
            <div className="flex justify-between text-[0.8em]">
              <div className="flex gap-1">
                <span className="text-[#9d9d9d]">
                  {campaign.status == "Archived" ? "Ended:" : "Start:"}
                </span>
                <span>
                  {campaign.status == "Draft"
                    ? "Not Started"
                    : campaign.status == "In Progress"
                    ? campaign.startDate
                    : campaign.endDate}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-[#9d9d9d]">
                  {campaign.status == "In Progress" ? "Ends:" : ""}
                </span>
                <span>
                  {campaign.status == "In Progress" ? campaign.endDate : ""}
                </span>
              </div>
            </div>
            <Progress
              className="h-1 bg-[#f0f0f0] w-[98%]"
              value={campaign.status == "In Progress" ? campaign.progress : 0}
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
