import React from 'react'
import clsx from 'clsx'
type HeadingProps = {
    h4as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    // size?: "xl" | "lg" | "md" | "sm"
    children: React.ReactNode;
    className?:string
}

const Aboutus_heading= ({
    h4as:Comp = "h4",
    className,
    children,
    // size = "lg"
}:HeadingProps) => {
  return (
    <Comp className={clsx('mb-4 font-semibold text-2xl',className)}>
    {children}
   </Comp>
  )
}

export default Aboutus_heading



type ParagraphProps = {
  Ptagas?: "p"
  // size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode;
  className?:string
}

export const Aboutus_Paragraph= ({
  Ptagas:Comp = "p",
  className,
  children,
}:ParagraphProps) => {
return (
 <Comp className={clsx('md:text-lg text-base font-normal leading-8',className)}>
  {children}
 </Comp>
)
}











