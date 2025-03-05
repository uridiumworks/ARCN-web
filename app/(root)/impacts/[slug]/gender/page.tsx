import Banner from "@/components/Impacts/Gender/Banner";
import Dolor from "@/components/Impacts/Gender/Dolor";
import Impart from "@/components/Impacts/Gender/Impart";
import CustomBreadcrumbs from "../_components/Breadcrumbs";
import CustomContainer from "@/components/CustomContainer";

const Gender = () => {
return ( 
    <main>
        <Banner />
        <CustomContainer>   
            <CustomBreadcrumbs text="Gender-and-Youth" />
            <Dolor />
            <Impart />
        </CustomContainer>   
    </main>
);
}

export default Gender;