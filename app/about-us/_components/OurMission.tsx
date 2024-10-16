import Image from "next/image";

const OurMission = () => {
  return (
    <div>
        <div className="md:px-[82px] px-16 py-[84px] flex flex-row-reverse justify-between items-center ">
        <div className="lg:max-w-[544px] overflow-hidden">

            <h1 className="md:text-[58px] text-[45px] font-semibold md:leading-[64px] leading-[45px] mb-2">Our<span className="text-main"> Mission</span> </h1>
            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-5">Our mission is to make the creation, management, and distribution of certificates seamless, secure, and accessible for everyone.</p>

            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-5">

            By leveraging Blockchain technology, we ensure that your certificate data remains safe, secure, and easily accessible. At TestBranch, you have full control over your certificate data. You own and manage your data, which is securely stored on the blockchain indefinitely. This means your certificates are always accessible and protected from misuse.
            </p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row">
                <button className="btn_main " >Get Started - it’s free</button> 
                <button className="btn_sec">Learn More</button>
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src='/ourMission.png' alt="" width={516} height={375} className="object-contain" />
        </div>
    </div>
    </div>
  )
}

export default OurMission