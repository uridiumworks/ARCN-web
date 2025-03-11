import CustomContainer from "@/components/CustomContainer";
import { LuShare2 } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import Image from "next/image";

const Events = () => {

    return ( 
        <main>
            <CustomContainer>
            <div className="space-y-8 lg:px-20 pt-6 lg:w-10/12 lg:mx-auto ">
                <div className="py-8 space-y-6 ">
                    <div className="flex gap-4">
                        <Popover>
                            <PopoverTrigger>
                                <div className="flex gap-2">
                                    <p className="font-bold font-[montserrat] text-sm">Share</p>
                                    <LuShare2 />
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-[390px] space-y-5">
                                <h1 className="font-semibold text-[#1F2937] text-2xl">Share</h1>
                                <div className="flex items-center gap-7">
                                    <div className="flex flex-col items-center">
                                        <Image src="/Images/Icons/twitterX.svg" alt="" width={30} height={40}/>
                                        <h2 className="font-semibold text-[#1F2937] text-base">X</h2>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src="/Images/Icons/facebookX.svg" alt="" width={40} height={40}/>
                                        <h2 className="font-semibold text-[#1F2937] text-base">Facebook</h2>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src="/Images/Icons/message.svg" alt="" width={40} height={40}/>
                                        <h2 className="font-semibold text-[#1F2937] text-base">Email</h2>
                                    </div>
                                    <div className="flex flex-col items-center">
                                    <Image src="/Images/Icons/linkicon.svg" alt="" width={40} height={40}/>
                                        <h2 className="font-semibold text-[#1F2937] text-base">Copy link</h2>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>

                        <div className="flex gap-2">
                            <p className="font-bold text-sm">Add To calendar</p>
                            <LuCalendar />
                        </div>
                    </div>

                    <div className="text-[#64728F] text-base space-y-4">
                        <p>Lorem ipsum dolor sit amet consectetur. A quis elit morbi facilisis pharetra volutpat. Sit velit pharetra suspendisse adipiscing tristique morbi consectetur tristique. Et sed hac nisl tincidunt vitae non. Convallis enim consectetur adipiscing sollicitudin tristique quam sed porta. Est pretium eu cursus sagittis at. Nisl sed eu nulla convallis non a sapien massa. Pellentesque viverra nibh et maecenas. Turpis mauris placerat tellus felis at nisi varius.</p>
                        <p>Risus consequat cursus eros auctor eget pulvinar elit faucibus dignissim. Neque viverra sit fusce at a massa. Tincidunt at at velit sit morbi. Tristique lectus condimentum vitae netus tellus morbi elit vel. Lacus sagittis venenatis nunc et ullamcorper mattis. Sed enim feugiat porttitor quisque dui nisi cras. Porttitor sollicitudin nulla magna natoque nisi lectus. Sagittis nec enim in quisque nisi ut non sed pellentesque. Nec massa aliquet mattis nec blandit bibendum id. Pulvinar sed mattis est.</p>
                    </div>
                </div>

                <div className="space-y-9 text-base">
                    <h1 className="font-bold text-[#111827] text-2xl">About World Environment Day</h1>
                    <p className="font-normal space-y-6">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum. Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="font-normal">Lorem ipsum dolor sit amet consectetur. Ultrices elit amet sem nullam volutpat convallis aliquam sed id. Sagittis id a sed a lacus. In pretium est.</p>
                    <p className="font-normal">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum. Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="font-normal">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum. Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                    <p className="font-normal">Lorem ipsum dolor sit amet consectetur. Amet gravida eu egestas est vulputate massa pretium at. Vestibulum proin ut cras ac dolor viverra lectus tempor. Diam phasellus arcu leo placerat consequat sed. Sagittis ultricies ac non imperdiet egestas vestibulum. Sit et porta non integer nulla nisl amet ac et. Sit id tellus at nulla pulvinar.</p>
                </div>
            </div>
            </CustomContainer>
        </main>
    );
}
 
export default Events;