import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { brand } from '@/schemas/trends';


export default function Brand({ brand }){
    return(
        <div className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
            <div>
                <h5 className="font-semibold text-neutral-500">{brand.category}</h5>
                <h3 className="font-bold text-base ">{brand.title}</h3>
                <span className="font-semibold text-neutral-500">
                {brand.interestCount} Interactions
                </span>
            </div>
            <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                <DotsHorizontalIcon className="w-4 h-4 text-neutral-500 group-hover:text-sky-500" />
            </div>
        </div>
    );
}
