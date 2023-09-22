import Trend from './rewards/Reward';
import { trend } from '@/data/reward';
import "@/styles/tailwind.css";
import Brand from './brands/Brand';
import { brand } from "@/data/brand"


export default function Trends() {
    return (
        <>
        <section className="bg-gray-100 py-4 rounded-2xl sticky -top-80">
            <h1 className="text-[1.25rem] font-black px-4 pb-4">Trending Rewards</h1>
            <div>
                {trend.map((trend) => (
                <Trend key={trend.id} trend={trend} />
                ))}
            </div>
        </section>
        
        <section className="bg-gray-100 py-4 my-4 rounded-2xl sticky -top-80">
        <h1 className="text-[1.25rem] font-black px-4 pb-4">Trending Brands</h1>
        <div>
            {brand.map((brand) => (
            <Brand key={brand.id} brand={brand} />
            ))}
        </div>
        </section>
        </>
    )
}