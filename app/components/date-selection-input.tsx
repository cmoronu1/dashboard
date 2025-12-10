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

export function DateInput() {
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
              <Input type="date" id="from-1" name="From" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="to-1">To</Label>
              <Input type="date" id="to-1" name="To" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
