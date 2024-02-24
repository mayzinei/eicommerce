
import Sidebar from "./components/SIdeBar"
import Navbar from "./components/Navbar"
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
     <section className="flex h-screen">
          <Sidebar/>
          <div className="flex flex-col flex-1">
          <Navbar/>
          <div className="flex-grow p-6">
           {children}
          </div>
        </div>

     
    </section>
  )
}