import Title from '@/app/_components/Title';
import { plans } from '@/constant';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ComparisonTable from './Table';


const OurPlans = () => {
  return (
    <div className='flex flex-col justify-center items-center py-[86px]'>
      <Title mainTitle='OUR PLANS AND PRICING' description={'Choose the right'} span={'plan'} others='for your needs' />
      <div className='flex flex-wrap justify-center mt-36 gap-8 md:gap-0'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full sm:w-[362px] md:w-[378px] lg:w-[362px] h-auto rounded-[15px] shadow border border-b-2 flex flex-col ${plan.isPremium ? 'bg-[#021047] md:mt-[-80px]' : ''}`}
          >
            <div className='flex gap-3 items-center py-[14px] px-6'>
              <Image src={plan.image} alt={plan.title} width={58} height={78} />
              <div className={`w-${plan.isPremium ? '[166px]' : '[85px]'}`}>
                <span className={`text-${plan.isPremium ? 'white' : '#242521'} text-[16px] leading-6 font-light`}>{plan.title}</span>
                <p className={`text-${plan.isPremium ? 'white' : '#242521'} text-[24px] leading-6 font-semibold`}>{plan.price}</p>
              </div>
            </div>
            <div className='border-t-[1px] flex-grow'>
              <div className='flex flex-col px-6 py-4 gap-2'>
                {plan.features.map((feature, idx) => (
                  <p key={idx} className={`text-${plan.isPremium ? 'white' : '#3E3D3D'} text-[16.5px] flex gap-2 items-center`}>
                    <Check className='text-main' /> {feature}
                  </p>
                ))}
              </div>
            </div>
            <div className='mx-6 mt-auto flex flex-col gap-5 items-center justify-center pb-6'>
              <button className={`btn_${plan.isPremium ? 'main' : 'sec'} w-full font-semibold`}>{plan.buttonLabel}</button>
              <Link href='#comparison-table' className='text-main underline text-[16px]'>
                Compare Limits
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ComparisonTable/>
    </div>
  );
};

export default OurPlans;
