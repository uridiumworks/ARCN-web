import Collection from "@/components/NewsandEvents/News/Collection";
import New from "@/components/NewsandEvents/News/New";
import Upcoming from "@/components/NewsandEvents/News/Upcoming";

const NewsandEvents = () => {

    return ( 
        <main>
            <Collection />
            <New />
            <Upcoming />
        </main>
    );
}
 
export default NewsandEvents;