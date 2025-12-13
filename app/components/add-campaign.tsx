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
            Key != "status" && Key != "progress" && Key != "users"
        ))

    return !(
      Object.values(filteredObject).every((member: any) => member.length > 0) &&
      Object.values(form.users).length > 2 && Object.values(form.progress)[0] != -1
    );
  }, [form]);

  console.log(isDisabled, Object.values(form.users).length);
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
          {[
            "logo",
            "title",
            "progress",
            "startDate",
            "endDate",
            "updatedAt",
          ].map((member) => (
            <div className="grid gap-3" key={member}>
              <Label>{member}</Label>
              <Input
                type={
                  member == "logo"
                    ? "url"
                    : member == "startDate" ||
                      member == "endDate" ||
                      member == "updatedAt"
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
                onChange={(event) =>
                  member == "logo"
                    ? setForm((p) => ({ ...p, logo: event.target.value }))
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
                    ? setForm((p) => ({ ...p, endDate: event.target.value }))
                    : setForm((p) => ({
                        ...p,
                        updatedAt: event.target.value,
                      }))
                }
              />
            </div>
          ))}
          <div className="grid gap-3">
            <Label>Status</Label>
            <Input defaultValue={data[0].status} disabled />
          </div>
          <Label>User</Label>
          <AddUser form={form} setForm={setForm} />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isDisabled}>
            Save Changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
