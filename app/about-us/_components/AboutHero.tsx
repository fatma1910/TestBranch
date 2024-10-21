import Image from "next/image"

const AboutHero = () => {
  return (
        <div className="md:px-[82px] px-4 py-[84px] flex justify-between items-center ">
        <div className="lg:max-w-[541px]">

            <h1 className="md:text-[58px] text-[35px] font-semibold md:leading-[64px] leading-[45px] mb-2">Revolutionizing Digital  <span className="text-main">Certification</span> </h1>
            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-2">Learn About TestBranch’s Mission to Simplify Certificate Management with Innovative Features, Secure Data Handling, and Collaborative Tools for All Users</p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row">
                <button className="btn_main " >Get Started - it’s free</button> 
                <button className="btn_sec">Learn More</button>
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src='/aboutHero.png' alt="" width={516} height={375} className="object-contain" />
        </div>
    </div>
  )
}

export default AboutHero