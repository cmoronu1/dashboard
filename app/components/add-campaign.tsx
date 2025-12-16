import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { AddUser } from "./user-entry";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";

interface AddCampaignInterface {
  data: campaign[];
  setData: Dispatch<SetStateAction<campaign[]>>;
}

export function AddCampaign({ data, setData }: AddCampaignInterface) {
  const [form, setForm] = useState<campaign>({
    logo: "",
    title: "",
    progress: -1,
    startDate: "",
    endDate: "",
    updatedAt: "",
    status: data[0].status,
    users: [],
  });

  const isDisabled = useMemo(() => {
    let filteredObject = {};

    filteredObject = Object.fromEntries(
      Object.entries(form).filter(
        ([Key, value]) =>
          Key != "status" &&
          Key != "progress" &&
          Key != "users" &&
          Key != "updatedAt"
      )
    );

    return !(
      Object.values(filteredObject).every((member: any) => member.length > 0) &&
      Object.values(form.users).length > 2 &&
      Object.values(form.progress)[0] != -1
    );
  }, [form]);

  const dateToday = new Date();

  function AddEntry() {
    setData((p) => [...p, form]);
    setForm((p) => ({
      ...p,
      logo: "",
      title: "",
      progress: -1,
      startDate: "",
      endDate: "",
      updatedAt: "",
      status: data[0].status,
      users: [],
    }));
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex text-[0.9em] items-center gap-1 text-[#727272]">
          <Plus size={19} />
          Add Campaign
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add New Campaign</AlertDialogTitle>
          <AlertDialogDescription>
            Add a new campaign here. Click Save changes when you&apos;re done.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4">
          {["logo", "title", "progress", "startDate", "endDate"].map(
            (member) => (
              <div className="grid gap-3" key={member}>
                <Label>{member == "progress" ? member + " (%)" : member}</Label>
                <Input
                  type={
                    member == "logo"
                      ? "url"
                      : member == "startDate" || member == "endDate"
                      ? "date"
                      : member == "progress"
                      ? "number"
                      : "text"
                  }
                  defaultValue={
                    member == "logo"
                      ? "https://example.com/logo1.png"
                      : member == "progress" &&
                        (data[0].status == "Draft" ||
                          data[0].status == "Archived")
                      ? 0
                      : ""
                  }
                  disabled={
                    member == "progress" &&
                    (data[0].status == "Draft" || data[0].status == "Archived")
                      ? true
                      : false
                  }
                  placeholder={
                    member == "progress"
                      ? "Enter the percentage value e.g 50"
                      : ""
                  }
                  onChange={(event) =>
                    member == "logo"
                      ? setForm((p) => ({
                          ...p,
                          logo: event.target.value,
                        }))
                      : member == "title"
                      ? setForm((p) => ({ ...p, title: event.target.value }))
                      : member == "progress"
                      ? setForm((p) => ({
                          ...p,
                          progress: event.target.value as unknown as number,
                        }))
                      : member == "startDate"
                      ? setForm((p) => ({
                          ...p,
                          startDate: event.target.value,
                        }))
                      : member == "endDate"
                      ? setForm((p) => ({
                          ...p,
                          endDate: event.target.value,
                          updatedAt: format(dateToday, "MMM dd, yyyy"),
                        }))
                      : ""
                  }
                />
              </div>
            )
          )}
          <div className="grid gap-3">
            <Label>Status</Label>
            <Input defaultValue={data[0].status} disabled />
          </div>
          <Label>User</Label>
          <AddUser form={form} setForm={setForm} />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={AddEntry} disabled={isDisabled}>
            Save Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
