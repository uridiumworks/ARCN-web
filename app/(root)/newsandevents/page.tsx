import Collection from "@/components/NewsandEvents/News/Collection";
import New from "@/components/NewsandEvents/News/New";
import Upcoming from "@/components/NewsandEvents/News/Upcoming";
import Journal from "@/components/Shared/Journal";

const NewsandEvents = () => {

    return ( 
        <main>
            <Collection />
            <New />
            <Upcoming/>
            <Journal />
        </main>
    );
}
 
export default NewsandEvents;