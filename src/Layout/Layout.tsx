import  { ReactNode, useEffect } from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';
import styles from './Layout.module.scss'
export interface LayoutProps  {
	children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
   
  return (
    <>
        <header>
         <div className={styles.header_wrapper}>
           <p>Kazprom Test Task</p>
            <ThemeSwitcher/>
         </div>
        </header>
        <div className={styles.content}>
        {children}
        </div>
    </>
  )
}

export default Layout