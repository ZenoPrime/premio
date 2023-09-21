import Trend from './rewards/Reward';
import Brands from './brands/index';
import { trendsData } from '@/data/rewardTrend';
import "@/styles/tailwind.css";


export default function Trends() {
    return (
        <>
        <section className="bg-gray-100 py-4 rounded-2xl sticky -top-80">
            <h1 className="text-[1.25rem] font-black px-4 pb-4">Trending Rewards</h1>
            <div>
                {trendsData.map((trend) => (
                <Trend key={trend.id} trend={trend} />
                ))}
            </div>
        </section>
        <Brands/>
        </>
    )
}