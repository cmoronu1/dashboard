type campaign = {
  logo: string;
  title: string;
  progress: number;
  startDate: string;
  endDate: string;
  users: User[];
  status: CampaignStatus;
  updatedAt: string;
};

type User = {
  id: string;
  name: string;

  email: string;
};

type CampaignStatus = "Draft" | "In Progress" | "Archived";
