import "./NavbarKelas.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Footer1(props) {
  const {
    dis = "flex",
    disp = "flex",
    left = "Foundations of User Experience Design",
    right = "Foundations of User Experience Design",
  } = props;

  const mobileClass = dis === "hidden" ? "max-sm:hidden" : "max-sm:flex";
  const desktopClass = disp === "hidden" ? "sm:hidden" : "sm:flex";

  return (
    <div
      className={`${desktopClass} ${mobileClass} justify-between w-full px-7 py-4.5  bg-pertama text-white  `}
    >
      <div className="flex flex-row items-center gap-2 font-bold">
        <FaChevronLeft />
        <p className="max-sm:w-[120px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap">
          {left}
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 font-bold ">
        <p className="max-sm:w-[120px] max-sm:overflow-hidden max-sm:text-ellipsis max-sm:whitespace-nowrap">
          {right}
        </p>
        <FaChevronRight />
      </div>
    </div>
  );
}
