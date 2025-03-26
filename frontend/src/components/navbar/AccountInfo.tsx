import { CircleUserRoundIcon } from "lucide-react";

function AccountInfo() {
  return (
    <div className="flex gap-3 items-center px-3 md:py-3 mt-12 md:mt-0">
      <CircleUserRoundIcon size={"2.5em"}/>
      <div>
        <p className="text-sm font-bold">Shubham Chakrawarty</p>
        <p className="text-xs">dev.shubhamc@gmail.com</p>
      </div>
    </div>
  );
}

export default AccountInfo;
