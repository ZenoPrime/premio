import { SearchIcon } from '@heroicons/react/outline';


export default function Search() {
    return(
        <section className="sticky top-0 py-3 bg-white z-20">
            <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
                <SearchIcon className="w-5 h-5 text-gray-500" />
                <input
                type="text"
                placeholder="Search Twitter"
                className="text-base placeholder:text-base focus:outline-none border-none bg-transparent"
                />
            </div>
        </section>
    );
}