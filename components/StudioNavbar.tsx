import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div>
        <div>
          <Link href="/" className="text-[#0f9d58] flex items-center">
            Go to website
          </Link>
        </div>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-text-[#0f9d58] ">
          <h1 className="font-bold text-white">The Right Choice 👉</h1>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
