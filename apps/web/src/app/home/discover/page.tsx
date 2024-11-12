import Event from "@/features/home/components/Event"

const Discover: React.FC = () => {
  return (
    <main className="w-full h-screen relative">
      <div className="w-full h-[5rem] border-b border-black mt-[5rem] fixed top-0 z-10 bg-white">

      </div>
      <section className="m-auto w-full min-h-min mt-[15rem]">
        <div className="m-auto w-full max-w-screen-xl min-h-min">
          <Event />
        </div>
      </section>
    </main>
  )
}

export default Discover
