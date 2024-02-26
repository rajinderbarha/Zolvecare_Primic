import React from 'react'
import clsx from 'clsx'
type HeadingPropsDocumentation_blue = {
    h3as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    // size?: "xl" | "lg" | "md" | "sm"
    children: React.ReactNode;
    className?:string
}

const Homepage_Documentationh3 = ({
    h3as:Comp = "h3",
    className,
    children,
    // size = "lg"
}:HeadingPropsDocumentation_blue) => {
  return (
    <Comp className={clsx('font-semibold',className)}>
    {children}
   </Comp>
  )
}

export default Homepage_Documentationh3









type ParagraphPropsDocumentation_Blue = {
  Ptagas?: "p"
  // size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode;
  className?:string
}

export const Homepage_Documentation_Ptag_blue= ({
  Ptagas:Comp = "p",
  className,
  children,
}:ParagraphPropsDocumentation_Blue) => {
return (
 <Comp className={clsx('font-semibold Efficiency_bg_blu',className)}>
  {children}
 </Comp>
)
}


type ParagraphPropsDocumentation = {
  Ptagas?: "p"
  // size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode;
  className?:string
}

export const Homepage_Documentation_Ptag= ({
  Ptagas:Comp = "p",
  className,
  children,
}:ParagraphPropsDocumentation) => {
return (
 <Comp className={clsx('font-normal',className)}>
  {children}
 </Comp>
)
}



type ParagraphPropsSlider = {
  Ptagas?: "p"
  // size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode;
  className?:string
}

export const Homepag_Slider_Ptag= ({
  Ptagas:Comp = "p",
  className,
  children,
}:ParagraphPropsSlider) => {
return (
 <Comp className={clsx('font-semibold',className)}>
  {children}
 </Comp>
)
}











