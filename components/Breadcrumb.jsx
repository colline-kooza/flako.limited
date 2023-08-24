import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

export default function Breadcrumb({ bg = "white", data }) {
  return (
    <div className="breadcrumb" style={{ background: bg }}>
      <Link className="base-link" href={data.base.path}>
        {data.base.title}
      </Link>
      <BiChevronRight size={18} />
      <h4 className="current-text">{data.currentText.title}</h4>
    </div>
  );
}
