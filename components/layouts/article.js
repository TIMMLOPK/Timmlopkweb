import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, type: 'spring' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Timmy</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
