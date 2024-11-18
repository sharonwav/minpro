import Link from "next/link"

const SignUpPage: React.FC = () => {
  return (
    <>
      <main className="bg-[#ff6392] w-full h-screen">
        <section className="m-auto w-full max-w-screen-xl h-screen flex flex-col items-center justify-center gap-5">
          <div className="bg-[#7fc8f8] min-w-min min-h-min flex items-center justify-center gap-5 border border-black rounded-xl p-2">
            <Link href="/sign-up/user" className="bg-white px-4 py-2.5 border border-black rounded-lg text-sm hover:border-b-4 hover:border-r-4">
              create a user account
            </Link>
            <p className="text-sm">or</p>
            <Link href="/sign-up/creator" className="bg-[#ffe45e] px-4 py-2.5 border border-black rounded-lg text-sm hover:border-b-4 hover:border-r-4">
              be a creator
            </Link>
          </div>
          <label className="text-xs">change mind?  
            <span className="hover:underline">
              <Link href="/home"> go back to main page</Link>
            </span>
          </label>
        </section>
      </main>
    </>
  )
}

export default SignUpPage
