import { CreatCerti } from '../_components'
import Features from './_components/Features'
import HeroPricing from './_components/HeroPricing'
import OurPlans from './_components/OurPlans'

const page = () => {
  return (
    <div>
        <HeroPricing />
        <Features/>
        <OurPlans />
        <CreatCerti />
    </div>
  )
}

export default page