import * as React from 'react'
import { cn } from '../../lib/utils'

// Create a context for Layout
const LayoutContext = React.createContext(null)

const Layout = ({ className, fixed = false, ...props }) => {
  const divRef = React.useRef(null)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const div = divRef.current

    if (!div) return
    const onScroll = () => setOffset(div.scrollTop)

    // Add event listener and clean up
    div.addEventListener('scroll', onScroll, { passive: true })
    return () => div.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <LayoutContext.Provider value={{ offset, fixed }}>
      <div
        ref={divRef}
        data-layout='layout'
        className={cn(
          'h-full overflow-auto',
          fixed && 'flex flex-col',
          className
        )}
        {...props}
      />
    </LayoutContext.Provider>
  )
}
Layout.displayName = 'Layout'

// Header component within Layout
const Header = React.forwardRef(({ className, sticky, ...props }, ref) => {
  const contextVal = React.useContext(LayoutContext)
  if (contextVal === null) {
    throw new Error(`Layout.Header must be used within ${Layout.displayName}.`)
  }

  return (
    <div
      ref={ref}
      data-layout='header'
      className={cn(
        `z-10 flex h-[var(--header-height)] items-center gap-4 bg-black p-4 md:px-8`,
        contextVal.offset > 10 && sticky ? 'shadow' : 'shadow-none',
        contextVal.fixed && 'flex-none',
        sticky && 'sticky top-0',
        className
      )}
      {...props}
    />
  )
})
Header.displayName = 'Header'

// Body component within Layout
const Body = React.forwardRef(({ className, ...props }, ref) => {
  const contextVal = React.useContext(LayoutContext)
  if (contextVal === null) {
    throw new Error(`Layout.Body must be used within ${Layout.displayName}.`)
  }

  return (
    <div
      ref={ref}
      data-layout='body'
      className={cn(
        'px-4 py-6 md:overflow-hidden md:px-8',
        contextVal.fixed && 'flex-1',
        className
      )}
      {...props}
    />
  )
})
Body.displayName = 'Body'

// Attach Header and Body components to Layout
Layout.Header = Header
Layout.Body = Body

export { Layout }
