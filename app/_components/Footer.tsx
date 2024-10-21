
import { footer } from "@/constant";
import Image from "next/image";

const Footer = () => {
    return (
        <footer>
        <div className="bg-[#EDEDF0] md:px-[78px] px-4 py-[79px]">
        <div className="grid gap-10 lg:gap-28 grid-cols-1 md:grid-cols-3 items-start">

            <div className="mb-8 md:mb-0">
            <Image 
                src='/logo.png' 
                alt='Logo'
                width={280}
                height={46}
                className="w-[200px] md:w-[280px]"
            />
        </div>

        <div className="grid gap-10 lg:gap-28 grid-cols-1 md:grid-cols-3 col-span-2">
            <div className="grid gap-10 lg:gap-28 grid-cols-1 md:grid-cols-2 col-span-2">
            {footer.map((section, key) => (
                <div key={key} className="font-normal">
                <h3 className="border-black border-b text-[17px] mb-5 leading-8 inline-block">
                    {section.title}
                </h3>
                <ul>
                    {section.links.map((link, index) => (
                    <li key={index} className="text-[#3E3D3D] font-normal mb-[14px]">
                        <a href={link.url}>{link.title}</a>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>


        <div className="mt-10 md:mt-0">
            <h3 className="border-black border-b text-[17px] mb-5 leading-8 inline-block">
                Connect with us
            </h3>
            <a href="/">        
                <Image src='/Xfooter.png' alt='Social Icon' width={28} height={28} className="rounded-full" />
            </a>
            </div>
        </div>
      </div>
    </div>

    <div className="text-[16px] bg-[#E0DEDE] flex items-center justify-center py-2 ">
    All Rights Reserved © 2024 - testbranch.com
    </div>
    </footer>
  );
}

export default Footer;
