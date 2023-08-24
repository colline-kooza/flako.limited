import { BiChevronRight, BiMenuAltLeft } from "react-icons/bi";
import { TiThSmall } from "react-icons/ti";
import { ImMenu2 } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export default function Sorting() {
  return (
    <div className="sorting-products">
      <div className="icons">
        <TiThSmall size={19} color="black" />
        <AiOutlineMenu size={20} color="black" />
        <BiMenuAltLeft size={24} color="black" />
        <ImMenu2 size={28} color="black" />
      </div>
      <div className="menu">
        <Link href="">
          <AiOutlineMenu size={20} color="black" />
        </Link>
      </div>
      <div className="default-sorting">
        <select id="select-one">
          <option value="">Default sorting</option>
          <option value="">sorting by size </option>
          <option value="">sorting by price </option>
          <option value="">sorting by popularity</option>
        </select>
        <select id="select-two">
          <option value="">showing all</option>
        </select>
      </div>
      <div className="number-sorting">
        <div className="one">1</div>
        <p>of</p>
        <p>2</p>
        <BsArrowRight size={17} />
      </div>
    </div>
  );
}
