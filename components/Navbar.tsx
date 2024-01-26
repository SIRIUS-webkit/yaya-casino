import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full bg-gray-800">
      <div className="max-w-[1200px] mx-4 md:mx-6 lg:mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Main_8fab073ed9.svg"
            alt="logo"
            width="100"
            height="80"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
