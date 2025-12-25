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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";

interface AddUserInterface {
  setForm: Dispatch<SetStateAction<campaign>>;
  progress: number;
  form: campaign;
}

export function AddUser({ setForm, progress, form }: AddUserInterface) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger
        onClick={() => setForm((p) => ({ ...p, progress: progress }))}
        className="border rounded-[0.6rem] w-25 h-10 bg-black text-white text-[0.9em]"
      >
        Add User
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add User</AlertDialogTitle>
          <AlertDialogDescription>
            Add a user here. Click Continue when you&apos;re done.
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
                    ? setUser((p) => ({
                        ...p,
                        id: event.target.value,
                      }))
                    : member == "name"
                    ? setUser((p) => ({
                        ...p,
                        name: event.target.value,
                      }))
                    : setUser((p) => ({
                        ...p,
                        email: event.target.value,
                      }));
                }}
              />
            </div>
          ))}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(event) => {
              if (!user || !user?.id || !user?.name || !user?.email)
                return event.preventDefault();
              setForm((p) => ({
                ...p,
                users: [...p.users, user],
              }));
              setUser(null);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
