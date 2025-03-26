import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

type Props = {
    title: string;
    description?: any;
    bgColor?: string;
    listType?: string;
    FunctionData?: string[];
    AdminDepartmentData?: any;
}

const HeaderComp: React.FC<Props> = ({title, description, bgColor}) => {
    return (
        <div className={cn("md:h-[280px] w-full", bgColor)}>
            <div className="w-full p-3 md:p-0 md:w-[1250px] md:ml-32 space-y-8 pt-8 md:pt-16">
                <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
const FunctionalComp: React.FC<Props> = ({title, FunctionData}) => {
    return (
        <div className='py-7 md:py-14'>
            <h2 className='font-semibold text-3xl md:text-4xl'>{title}</h2>

            <div className='font-normal py-6 '>
                {FunctionData?.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center gap-2 justify-start' >
                            <div>
                                <CircleCheck className="w-4 h-4" />
                            </div>
                            <p className='py-4 text-sm'>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
const ContentComp: React.FC<Props> = ({title, AdminDepartmentData, listType}) => {
    return (
        <div className="space-y-5">
            <h1 className="md:text-4xl text-3xl font-semibold">{title}</h1>
            
            <div className="space-y-7">
                {AdminDepartmentData?.map(({description, descriptionList, title}: any, index: number) => {
                    return (
                        <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-6 px-7 space-y-4 w-full md:w-[94%]")}>
                            <h1 className="text-lg font-bold">{title}</h1>
                            <div>
                                {description && <p>{description}</p>}
                                <ul className={cn("font text-sm leading-6 list-disc list-inside", listType)}>
                                    {descriptionList?.map((item: any, index: number) => {
                                        return <li key={index}>{item}</li>
                                    })}
                                    
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export {HeaderComp, FunctionalComp, ContentComp}