import React from 'react'
import clsx from 'clsx'
type HeadingProps = {
    h6as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    // size?: "xl" | "lg" | "md" | "sm"
    children: React.ReactNode;
    className?:string
}

export const BlogHomepage_Heading= ({
    h6as:Comp = "h6",
    className,
    children,
    // size = "lg"
}:HeadingProps) => {
  return (
    <Comp className={clsx('px-4 py-2 font-medium',className)}>
    {children}
   </Comp>
  )
}




