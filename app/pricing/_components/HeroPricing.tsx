import Image from "next/image"
const HeroPricing = () => {
  return (
    <div className="md:px-[82px] px-16 py-[84px] flex justify-between items-center ">
        <div className="lg:max-w-[541px]">
            <h1 className="md:text-[58px] text-[45px] font-semibold md:leading-[64px] leading-[45px] mb-2">TestBranch Features and<span className="text-main">Pricing</span> </h1>
            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-2">Discover How TestBranch's Robust Features and Budget-Friendly Pricing Plans Can Transform Your Approach to Digital Certification</p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row">
                <button className="btn_main " >Get Started - it’s free</button> 
                <button className="btn_sec">See Plans</button>
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src='/heroPrice.png' alt="" width={480} height={438} className="rounded-3xl" />
        </div>
    </div>
  )
}

export default HeroPricing