import Skillslevel from "./Skillslevel";

const Skill = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/**heading */}
        <div>
          <div className="relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5">
              ACTIVITY
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Activities
            </h1>
          </div>
        </div>

        {/* Activity section */}
        <div className="space-y-10">
          <Skillslevel skillName="HTML" percentage={"90%"} />
          <Skillslevel skillName="CSS" percentage={"80%"} />
          <Skillslevel skillName="JS" percentage={"95%"} />
          <Skillslevel skillName="NEXTJS" percentage={"85%"} />
          <Skillslevel skillName="MONGODB" percentage={"75%"} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
