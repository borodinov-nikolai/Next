import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import '../styles/global.scss'
import StyledComponentsRegistry from '@/libs/antDesign/AntdRegistry'
import theme from '@/libs/antDesign/themeConfig'
import {ConfigProvider} from 'antd'
import ReduxProvider from '@/store/reduxProvider'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ConfigProvider theme={theme} >
        <StyledComponentsRegistry>
          <ReduxProvider>
        <div className="container">
        <Header/>
          {children}
        </div>  
          <Footer/>
         </ReduxProvider>
       
          </StyledComponentsRegistry>
        </ConfigProvider>
        
        </body>
    </html>
  )
}
