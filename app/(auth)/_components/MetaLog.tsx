import Image from "next/image";

const MetaLog = () => {
  return (
    <div className='flex flex-col gap-3 mb-6 w-full'>
      <button className='flex items-center justify-center gap-1 font-medium text-base border rounded-full hover:bg-muted duration-300 w-full py-[12px]'>
        <Image src='/microsoft.png' alt='Microsoft Logo' width={18} height={18} /> Log in with Microsoft
      </button>
      <button className='flex items-center justify-center gap-1 font-medium text-base border rounded-full w-full py-[12px]  hover:bg-muted duration-300'>
        <Image src='/google.png' alt='Google Logo' width={18} height={18} /> Log in with Google
      </button>
      <button className='flex items-center justify-center gap-1 font-medium text-base border rounded-full w-full py-[12px]  hover:bg-muted duration-300'>
        <Image src='/Facebook.jpg' alt='Facebook Logo' width={25} height={25} /> Log in with Facebook
      </button>
    </div>
  );
};

export default MetaLog;
