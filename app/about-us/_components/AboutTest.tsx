import Image from "next/image"

const AboutTest = () => {
  return (
        <div className="md:px-[82px] px-4 py-[84px] flex justify-between items-center bg-[#F4F8E8]">
        <div className="lg:w-[582px] ">
            <h3 className="title">about test branch </h3>

            <h1 className="md:text-[40px] text-[25px] font-semibold leading-[44px] -leading-4 mb-2 w-full">Elevating 
            <span className="text-main"> Digital Certificates</span>  with Innovation and Reliability</h1>
            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-5 w-full">At TestBranch, we are revolutionizing the future of digital certificates and certifications. Our mission is to make the creation, management, and distribution of certificates seamless, secure, and accessible to everyone.</p>

            <p className="mt-1 text-[22px] leading-8 font-light text-[#3E3D3D] mb-5">
            We use Blockchain technology to ensure your certificate data is safe, secure, and accessible. With TestBranch, you have full control over your certificate data. Only you own and control your data, and it is stored securely and indefinitely on the blockchain. This means your certificates are always accessible and protected from misuse.
            </p>
            <div className="mt-3 flex gap-3 flex-col md:flex-row">
                <button className="btn_main " >Get Started - it’s free</button> 
            </div>
        </div>
        <div className="hidden lg:block">
            <Image src='/aboutTest.png' alt="" width={548} height={522} className="object-contain" />
        </div>
    </div>
  )
}

export default AboutTest