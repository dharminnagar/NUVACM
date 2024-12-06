import { Dock, DockIcon } from "../components/ui/dock";
import { Home } from "lucide-react";
import { Users } from "lucide-react";
import { Calendar } from "lucide-react";
import TextRevealByWord from "@/components/ui/text-reveal";
import Globe from "@/components/ui/globe";
import Meteors from "@/components/ui/meteors";
export function Landing() {
  return (
    <div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="w-96 h-96">
          <Globe />
          <Meteors />
        </div>
      </div>
      <div>
        <Dock>
          <DockIcon className="p-3">{<Home color="#ffffff" />}</DockIcon>

          <DockIcon className="p-3">{<Users color="#ffffff" />}</DockIcon>

          <DockIcon className=" p-3">{<Calendar color="#ffffff" />}</DockIcon>
        </Dock>
      </div>

      <div>
        <TextRevealByWord
          className=" min-h-64 items-center justify-center rounded-lg "
          text="WELCOME TO THE ACM X NUV STUDENT CHAPTER"
        />
      </div>
    </div>
  );
}
