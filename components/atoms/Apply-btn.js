import Link from "next/link";
import React from "react";

export default function Apply_btn() {
  return (
    <Link href="/contact" legacyBehavior>
      <a className="btn bg-color-blue btn-color icon-arrow-right-white mb-15 mr-20">
        Apply Now
      </a>
    </Link>
  );
}
