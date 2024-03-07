import Link from "next/link";
import React from "react";

export default function Book_btn() {
  return (
    <Link href="/contact" legacyBehavior>
      <a className="btn bg-color-blue btn-color icon-arrow-right-white">
        Book Now
      </a>
    </Link>

    /* <Link href="/contact" legacyBehavior>
        <a className="btn btn-default hover-up icon-arrow-right">
         Book Now
        </a>#536CA4
       </Link> */
  );
}
