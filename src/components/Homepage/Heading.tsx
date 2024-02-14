import React from 'react'
import clsx from 'clsx'



type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;             // ? means this is optional             |  pipe operator 
    size?: "sm" | "md" | "lg" |"xl" ;
    children?: React.ReactNode ;                                    
    className?: string ;
}




const Heading = ({
    as: Comp = "h1",                // default will be h1
    className,
    children,
    size = "lg"
}:HeadingProps) => {
  return (
   <Comp  className={clsx(" font-bold leading-tight tracking-tight font-display text-slate-700",
   size === "xl" && "text-5xl md:text-7xl",
   size === "lg" && "text-4xl md:text-5xl",             // here we are returning the size according  to the size prop which will be passes durig this fn ()  calling 
   size === "md" && "text-3xl md:text-4xl",
   size === "sm" && "text-2xl md:text-3xl",
   className                                                                                // means we can still ad class when we cal this component 
   )}>
    {children}
   </Comp>
  )
}

export default Heading





