import CustomContainer from "@/components/CustomContainer";
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
        <div className={cn("sm:py-[5rem] py-[3.5rem] w-full", bgColor)}>
            <CustomContainer>
            <div className="w-full p-3 flex flex-col gap-3">
                <h1 className="text-3xl sm:text-4xl leading-[2.25rem] font-semibold">{title}</h1>
                <p className="text-sm leading-[1.5rem]">{description}</p>
            </div>
            </CustomContainer>
        </div>
    )
}
const FunctionalComp: React.FC<Props> = ({title, FunctionData}) => {
    return (
        <div className='py-7 md:py-14'>
            <h2 className='font-semibold text-3xl sm:text-4xl leading-[2.25rem]'>{title}</h2>

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
            <h1 className="sm:text-4xl leading-[2.25rem] text-3xl font-semibold">{title}</h1>
            
            <div className="space-y-7">
                {AdminDepartmentData?.map(({description, descriptionList, title}: any, index: number) => {
                    return (
                        <div key={index} className={cn(index === 0 && "bg-[#FFC74E] text-black", index === 1 && "bg-[#2E7636] text-white", index === 2 && 'bg-black text-white', index === 3 && 'bg-[#75CDFD] text-black', index === 4 && 'bg-[#011843] text-white', " rounded-[16.17px] py-6 px-7 space-y-4 w-full")}>
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