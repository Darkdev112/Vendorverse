import './globals.css'
import { Providers } from '@/redux/provider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import EditModal from '@/components/EditModal/EditModal'
import ManageModal from '@/components/EditModal/ManageModal'

export const metadata = {
  title: 'Vendorverse',
  description: 'Connect and supply',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="min-w-full bg-[#DDD0C8] flex flex-col">
            <EditModal/>
            <ManageModal/>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
            />
            <Navbar/>
            <div className="min-h-screen relative">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
