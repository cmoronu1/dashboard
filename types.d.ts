type campaign = {
  logo: string;
  title: string;
  progress: string;
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
