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
  data: campaign[];
  setData: Dispatch<SetStateAction<campaign[]>>;
  filteredData: campaign[];
}

export function DateInput({
  dateSelect,
  setDateSelect,
  data,
  setData,
  filteredData,
}: DateInputInterface) {
  const isDisabled = useMemo(() => {
    return !Object.values(dateSelect).every((member) => member.length > 0);
  }, [dateSelect]);

  filteredData = useMemo(() => {
    return data.filter(
      (member) =>
        member.startDate.includes(dateSelect.startDate) ||
        member.endDate.includes(dateSelect.endDate)
    );
  }, [dateSelect]);
  console.log(
    data.filter(
      (member) =>
        member.startDate.includes(dateSelect.startDate) ||
        member.endDate.includes(dateSelect.endDate)
    )
  );
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className="font-normal text-[0.5em]"
            size={"sm"}
            variant="outline"
          >
            <Calendar />
            Select Dates
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose Dates</DialogTitle>
            <DialogDescription>
              Select the From and To dates. Click save changes when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={isDisabled} type="submit">
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
