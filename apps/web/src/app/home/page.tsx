import HomeSlider from "@/features/global/components/HomeSlider"
import LatestEventWrap from "@/features/home/components/LatestEventWrap"
import TopEvent from "@/features/home/components/TopEvent"
import Creator from "@/features/home/components/Creator"
import Category from "@/features/home/components/Category"
import Poster from "@/features/home/components/Poster"
import Event from "@/features/home/components/Event"

const HomePage: React.FC = () => {
  return (
    <main className="m-auto w-full min-h-min mt-[10rem] relative">
      <section className="w-full h-20">
        <HomeSlider />
      </section>
      <section className="m-auto w-full min-h-min mt-[15rem] border-b border-black">
        <div className="m-auto w-full max-w-screen-xl">
          <LatestEventWrap />
          <TopEvent />
        </div>
      </section>
      <section className="w-full min-h-min mt-[5rem] mb-[5rem]">
        <Category />
      </section>
      <section className="w-full min-h-min border-b border-t border-black">
        <div className="m-auto w-full max-w-screen-xl mt-[5rem] mb-[5rem]">
         <LatestEventWrap />
        </div>
      </section>
      <section  className="w-full min-min mt-[5rem] mb-[5rem]">
        <div className="m-auto w-full max-w-screen-xl">
          <Poster />
        </div>
      </section>
      <section className="w-full min-h-min border-b border-t border-black">
        <div className="m-auto w-full max-w-screen-xl">
          <Creator />
        </div>
      </section>
      <section className="w-full min-h-min">
        <div className="m-auto w-full max-w-screen-xl mt-[5rem] mb-[5rem]">
          <Event />
        </div>
      </section>
    </main>
  )
}

export default HomePage