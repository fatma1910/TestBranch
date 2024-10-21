import Image from "next/image"

const Hero = () => {
  return (
    <div className="md:px-[82px] px-4 py-[84px] flex justify-between items-center ">
        <div className="lg:max-w-[541px]">
            <h3 className="title mb-2">SAFe AND SECURE CERTIFICATES </h3>

            <h1 className="md:text-[58px] text-[35px] font-semibold md:leading-[64px] leading-[45px] mb-2">The Future of <span className="text-main">Digital</span>  Certificates and Certifications</h1>
            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-2">Revolutionize your digital certifications - design, issue, and manage secure blockchain based certificates effortlessly, all for free!</p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row">
                <button className="btn_main " >Get Started - it’s free</button> 
                <button className="btn_sec">Talk to us</button>
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src='/hero.png' alt="" width={480} height={438} className="rounded-3xl" />
        </div>
    </div>
  )
}

export default Hero