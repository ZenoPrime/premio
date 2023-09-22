import Search from "./search/Search";
import Trends from "./trends/index";


export default function Aside() {
    return(
        <div>
            <Search/>
            <Trends/>
        </div>
    );
}