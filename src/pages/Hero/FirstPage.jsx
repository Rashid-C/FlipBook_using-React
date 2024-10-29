import personImg from "../../assets/personimg.jpg";
const FirstPage = () => {
  return (
    <div className="h-full ">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10 space-y-4">
          {/* {img container} */}
          <div>
            <img
              src={personImg}
              alt="personIMG"
              className="w-[300px] mx-auto"
            />
          </div>
          {/* {text container} */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello Kids</p>
              <p className="text-4xl md:text-6xl font-bold text-black/800">
                I&apos;m Dora
              </p>
              <p className="text-black/75 text-left">I&apos;am a girl</p>
              <p className="text-black/75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tenetur nobis illum eum consequuntur ullam, quas quos
                illo voluptatum vitae fugiat eaque vero unde, mollitia accusamus
                incidunt sunt! Incidunt, aliquid!
              </p>
              <a className="inline-block primary-btn" href="#">
                Activity
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
