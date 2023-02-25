import Link from "next/link";
import {} from "@heroicons/react/24/solid";
function StudioNavbar(props: any) {
  return (
    <div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
65