import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Bell, Command, Dot, Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-1 flex-1">
        <span className="text-[0.7em] text-[#bebebe]">Campaigns /</span>
        <span className="text-[0.7em]">Analytics</span>
      </div>
      <div className="flex gap-3 items-center">
        <InputGroup className=" h-7 flex items-center bg-[#f5f5f5]">
          <InputGroupInput className="text-[#c8c8c8]" placeholder="Search" />
          <InputGroupAddon>
            <Search className="text-black" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Command /> /
          </InputGroupAddon>
        </InputGroup>
        <div className="flex relative">
          <Bell size={16} />
          <Dot className="absolute bottom-1.5 left-2" size={16} color="#fc630d" />
        </div>
      </div>
    </div>
  );
}
