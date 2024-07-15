import React from 'react'
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CheckIcon from '@mui/icons-material/Check';
import './index.css'


interface PricingModelCardProps {
    planName: string,
    price: string,
    planFeatures: string[],
    icon: any
}

const PricingModelCard: React.FC<PricingModelCardProps> = ({ planName, price, planFeatures, icon }) => {
    return (
        <>
            <div className='w-[80%] h-[60vh]  my-[5%] rounded-2xl shadow-all-around  p-[2%] md:w-[40%] md:h-[35%] lg:w-[25%] lg:my-[0] lg:mx-[0%] lg:h-[90%] ' >
                <div className='w-[100%] h-[10%]  flex justify-center items-center ' >
                    {icon}
                    <p className='text-lg text-[#33333b] font-600 lg:text-3xl  ' >{planName}</p>
                </div>
                <div className='w-[100%] h-[20%]  flex justify-center items-center ' >
                    <p className='text-2xl font-semibold ' > ${price} </p> <span className='font-thin' >/per month</span>
                </div>
                <div className='w-[100%] h-[50%]  flex flex-col justify-center items-start  ' >
                    {planFeatures.map((feature) => {
                        return (
                            <>
                                <div className='w-[100%] h-[30%] flex justify-start items-center  ' >
                                    <CheckIcon className='text-[#e4342c]  !w-[20%] !h-[50%]  ' />  <p className='text-[#33333b] font-400 text-sm lg:text-lg my-[2%] ' >{feature}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className='w-[100%] h-[20%]  flex justify-center items-center  ' >
                    <button className='w-[50%] h-[50%] rounded-xl bg-[#e4342c] text-white font-400 text-sm pricing-button ' >Get Started</button>
                </div>
            </div>
        </>
    )
}

const PricingModels: React.FC = () => {

    const planNames = ['Basic', 'Standard', 'Premium']
    const planPrices = ['100', '200', '300']
    const planFeatures = [
        ['10 PDF conversions per month', 'Basic editing tools', '5 MB max file size', 'Email support'],
        ['50 PDF conversions per month', 'Advanced editing tools', '20 MB max file size', 'Priority email support'],
        ['Unlimited PDF conversions', 'All editing tools', 'Unlimited file size', '24/7 dedicated support']
    ];
    const planIcons = [
        <Battery60Icon className=' text-[#e4342c] lg:!w-[10%] lg:!h-[80%] ' />,
        <Battery6BarIcon className=' text-[#e4342c] lg:!w-[10%] lg:!h-[80%]' />,
        <BatteryChargingFullIcon className=' text-[#e4342c] lg:!w-[10%] lg:!h-[80%]' />
    ]

    return (
        <>
            <div className='w-[100vw] h-[fit-content]  flex flex-col justify-center items-center py-[5%] ' >
                <h1 className='text-[#33333b] font-600 text-2xl md:text-3xl lg:text-5xl '>Pricing Models</h1>
                <div className='flex flex-col justify-center items-center w-[100%] h-[fit-content] mt-[5%] md:h-[150vh] md:flex md:flex-wrap lg:flex-wrap lg:h-[60vh] lg:px-[10%]  '>
                    {planNames.map((plan, index) => {
                        return (
                            <PricingModelCard planName={plan} price={planPrices[index]} planFeatures={planFeatures[index]} icon={planIcons[index]} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PricingModels