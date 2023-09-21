import Brand from "./Brand"
import { brandsData } from "@/data/brandTrend"

export default function Brands() {
    <section className="bg-gray-100 py-4 rounded-2xl sticky -top-80">
        <h1 className="text-[1.25rem] font-black px-4 pb-4">Trending Brands</h1>
        <div>
            {brandsData.map((brand) => (
            <Brand key={brand.id} brand={brand} />
            ))}
        </div>
        </section>
}