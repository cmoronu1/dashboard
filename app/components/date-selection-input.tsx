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
import { Calendar } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

interface DateInputInterface {
  dateSelect: {
    startDate: string;
    endDate: string;
  };
  setDateSelect: Dispatch<
    SetStateAction<{
      startDate: string;
      endDate: string;
    }>
  >;
}

export function DateInput({ dateSelect, setDateSelect }: DateInputInterface) {
  const isDisabled = useMemo(() => {
    return !Object.values(dateSelect).every((member) => member.length > 0);
  }, [dateSelect]);
  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-normal text-[0.5em] flex gap-1 items-center border rounded-[0.4rem] px-2 shadow">
        <Calendar size={17} />
        Select Dates
      </AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Choose Dates</AlertDialogTitle>
          <AlertDialogDescription>
            Select the From and To dates. Click save changes when you&apos;re
            done.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="from-1">From</Label>
            <Input
              onChange={(event) =>
                setDateSelect((p) => ({
                  ...p,
                  startDate: event.target.value,
                }))
              }
              type="date"
              id="from-1"
              name="From"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="to-1">To</Label>
            <Input
              onChange={(event) =>
                setDateSelect((p) => ({
                  ...p,
                  endDate: event.target.value,
                }))
              }
              type="date"
              id="to-1"
              name="To"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isDisabled} type="submit">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
