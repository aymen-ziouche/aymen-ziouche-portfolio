import Link from "next/link";
import Image from "next/image";

export default function FooterWithLogo() {
  return (
    <footer className="w-full bg-transparent p-12 sm:p-14 z-[999]">
      <div className="flex items-center justify-center gap-y-6 gap-x-64 text-center z-[999]">
        <Link
          to="#home"
          href="#home"
          smooth={true}
          duration={1000}
          className="z-[999]"
        >
          <div className="top-[53rem] left-[11rem] sm:top-[51rem] sm:left-[57rem]">
            <Image
              src="/sign.svg"
              alt="Signature"
              className="h-auto w-14 sm:w-auto"
              width={100}
              height={100}
            />
          </div>
        </Link>
      </div>
    </footer>
  );
}
