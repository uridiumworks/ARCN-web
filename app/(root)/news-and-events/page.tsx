import Collection from "@/components/NewsandEvents/News/Collection";
import New from "@/components/NewsandEvents/News/New";
import Upcoming from "@/components/NewsandEvents/News/Upcoming";
import Journal from "@/components/Shared/Journal";
import CustomContainer from "@/components/CustomContainer";
import Events from "@/components/Landing/Events";

const NewsandEvents = () => {

    return ( 
        <main>
            <Collection />
            <New />
            <Events/>
            <Journal />
        </main>
    );
}
 
export default NewsandEvents;