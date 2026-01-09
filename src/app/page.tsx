export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <h1 className="sm:text-8xl text-2xl font-bold text-center px-2">Gabby French</h1>
        <p className="mt-4 sm:text-2xl">Junior Full-Stack Developer</p>
      </section>

      <section
        className="min-h-screen bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/darker-green-background.jpg')" }}
      >
        <h2>Tech Stack</h2>
        {/* Placeholder for now */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum
          distinctio ducimus consequuntur ut illum soluta iste sit architecto
          accusantium ullam velit doloribus, dolore aperiam sed porro fugit a
          at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius non
          totam voluptatibus sint libero ea rem magnam, expedita sit debitis
          dolore possimus est atque accusamus illo aperiam ex excepturi eos!
        </p>
      </section>
    </div>
  );
}
