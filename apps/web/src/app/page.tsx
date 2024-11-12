import { redirect } from "next/navigation"

const RedirectPage: React.FC = () => {
  redirect('/home')
}

export default RedirectPage