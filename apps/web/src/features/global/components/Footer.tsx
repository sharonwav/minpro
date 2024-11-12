import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <main className="w-full min-h-min">
      <section className="w-full border-b border-t border-black">
        <div className="m-auto w-full max-w-screen-xl min-h-min flex items-start justify-center gap-[10rem] mt-[5rem] mb-[5rem]">
          <div className="flex flex-col">
            <p className="text-sm font-bold">About onClick(e)</p>
            <div className="flex flex-col mt-[2rem]">
              <Link href="" className="text-sm">Sign In</Link>
              <Link href="" className="text-sm">FAQ</Link>
              <Link href="" className="text-sm">Terms and Conditions</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">How to make an event</p>
            <div className="flex flex-col mt-[2rem]">
              <Link href="" className="text-sm">Sign In</Link>
              <Link href="" className="text-sm">FAQ</Link>
              <Link href="" className="text-sm">Terms and Conditions</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Location</p>
            <div className="flex flex-col mt-[2rem]">
              <Link href="" className="text-sm">Sign In</Link>
              <Link href="" className="text-sm">FAQ</Link>
              <Link href="" className="text-sm">Terms and Conditions</Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Category</p>
            <div className="flex flex-col mt-[2rem]">
              <Link href="" className="text-sm">Sign In</Link>
              <Link href="" className="text-sm">FAQ</Link>
              <Link href="" className="text-sm">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="m-auto w-full max-w-screen-xl h-20 flex items-center justify-center">
          <div className="min-w-min min-h-min border border-black rounded-full px-2 py-1">
            <p className="text-sm">© 2024 onClick(event)</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Footer
