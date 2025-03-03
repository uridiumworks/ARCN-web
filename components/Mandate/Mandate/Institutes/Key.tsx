import { LuCircleCheckBig } from "react-icons/lu";

const Key = () => {

    return ( 
        <main className="">
            <div className="text-center px-20 py-8 space-y-4">
                <div>
                    <h1 className="font-semibold text-sm">OUR  VISION</h1>
                    <h2 className="font-bold text-[40px]">Employment Generation</h2>
                    <p className="text-[#64728F] font-normal text-xl">To develop horticultural produce and products for local and export markets with attendant health, industrial raw materials and employment generation benefits.</p>
                </div>

                <div>
                    <h1 className="font-semibold text-sm">OUR MISSION</h1>
                    <h2 className="font-bold text-[40px]">Sustainable Production</h2>
                    <p className="text-[#64728F] font-normal text-xl">To develop horticultural produce and products for local and export markets with attendant health, industrial raw materials and employment generation benefits.</p>
                </div>

                <div>
                    <h1 className="font-bold text-[40px]">OUR MANDATE</h1>
                    <p className="text-[#64728F] font-normal text-xl">The institute has the mandate to conduct research into Genetic Improvement, Production technologies, Processing, Storage, Utilization and Marketing of Tropical Fruits, Vegetables, Ornamentals, Spices, other Medicinal and Aromatic plants of nutritional and economic importance.</p>
                </div>
            </div>
            <div className="border-3 bg-[#F9FFFB] px-20 py-10  font-montserrat space-y-5">
                <div className="text-center space-y-3">
                    <h1 className="font-medium text-5xl">Key Achievements</h1>
                    <p className="font-normal text-lg">Lorem ipsum dolor sit amet consectetur. Purus semper nunc sit proin<br /> sagittis. Sit sit tempus commodo pellentesque cursus proin maecenas.</p>
                </div>
                <div>
                <div className='flex object-center gap-2.5 items-center font-normal'>
                    <LuCircleCheckBig size={40}  className="text-[#30A85F]" />
                    <p className="text-xl font-normal">Produced Improved varieties of Citrus, Pineapple, Mango, Pawpaw, Banana, Irvingia gabonensis (African Bush Mango), Persea americana (Avocado), Native pear (Dacryodes edulis), Walnut (Tetracarpidium conophorum), African locust bean (Parkia biglobosa), African star apple (Chrysophyllum albidum) among others.</p>
                </div>
                </div>
            </div>
        </main>
    );
}
 
export default Key;