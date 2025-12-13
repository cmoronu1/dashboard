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
import { Dispatch, SetStateAction } from "react";

interface AddUserInterface {
  form: campaign;
  setForm: Dispatch<SetStateAction<campaign>>;
}

export function AddUser({ form, setForm }: AddUserInterface) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="border rounded-[0.6rem] w-25 h-10 bg-black text-white text-[0.9em]">
        Add User
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add User</AlertDialogTitle>
          <AlertDialogDescription>
            Add a user here. Click Save changes when you&apos;re done.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4">
          {["id", "name", "email"].map((member) => (
            <div className="grid gap-3" key={member}>
              <Label>{member}</Label>
              <Input
                type={member == "email" ? "email" : "text"}
                name={member}
                onChange={(event) => {
                  member == "id"
                    ? setForm((p) => ({
                        ...p,
                        users: { ...p.users, id: event.target.value },
                      }))
                    : member == "name"
                    ? setForm((p) => ({
                        ...p,
                        users: { ...p.users, name: event.target.value },
                      }))
                    : setForm((p) => ({
                        ...p,
                        users: { ...p.users, email: event.target.value },
                      }));
                }}
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
