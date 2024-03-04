import img1 from "../../../assets/Brainstormwithoutshadow.jpg.jpg"





const Brainstorming = () => {
    return (
        <div className="mt-32">
            <h1 className="text-5xl font-bold text-[#050038]">Built for the way you work</h1>
            <div className="my-11 flex justify-between">
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Brainstorming</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Diagramming</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Meetings & Workshops</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Scrum Events</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Mapping</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Research & Design</button>
                <button className="border p-4 rounded-full hover:bg-[#F1F3FD] text-[#050038]">Strategic Planning</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <h2 className="text-[18px] text-[#050038] mb-8">Brainstorming</h2>
                    <p className="mb-7 text-[#050038]">Unleash creative ideas and build on <br /> them with the help of sticky notes, <br /> images, mind maps, videos, drawing <br /> capabilities — the list goes on.</p>
                    <a className="text-[#4262FF] text-[18px]" href="#">Learn more →</a>
                </div>
                <div className="">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brainstorming;