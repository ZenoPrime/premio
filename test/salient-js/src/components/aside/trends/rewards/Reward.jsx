import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { trend } from '@/data/reward';



export default function Trend({ trend }){

    return(
        <div className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
            <div>
                <h5 className="font-semibold text-neutral-500">{trend.category}</h5>
                <h3 className="font-bold text-base ">{trend.title}</h3>
                <span className="font-semibold text-neutral-500">
                {trend.interestCount} Interests 
                </span>
            </div>
            <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 group-hover:text-sky-500" />
            </div>
        </div>
    );
}
