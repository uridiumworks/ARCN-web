import { LuChevronRight } from "react-icons/lu";

const Partners = () => {
    return (
        <main className='mx-auto place-content-center'>
            <div className='font-semibold text-[50px] text-center '>
                <h1>Partner with us to digitise
                <br />agriculture in Africa</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-4 justify-center'>
                <div>
                    <img src="Images/Homepage/farmer.png" alt="farmer" />
                </div>
                <div className='place-content-center'>
                    <p className='font-normal text-[17px]'>We are committed to working with equally ambitious
                    <br />Research Institutes and stakeholders to bridge the sustainability gap in
                    <br />Africa, ensuring smallholder farmers have everything they need to
                    <br />succeed.
                    </p>
                    <div className='flex pt-6 items-center text-[#669933] font-medium text-[16px]'>
                        <p>Learn more</p>
                        <LuChevronRight />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners;