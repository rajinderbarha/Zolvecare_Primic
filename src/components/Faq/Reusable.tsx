import React from 'react'
import clsx from 'clsx'


type ParagraphQuesProps = {
    Ptagas?: "p"
    // size?: "xl" | "lg" | "md" | "sm"
    children: React.ReactNode;
    className?:string
}

export const FaqSection_QuestionParagraph= ({
    Ptagas:Comp = "p",
    className,
    children,
    // size = "lg"
}:ParagraphQuesProps) => {
  return (
    <Comp className={clsx('',className)}>
    {children}
   </Comp>
  )
}




// export default Aboutus_heading
type ParagraphAnsProps = {
  Ptagas?: "p"
  // size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode;
  className?:string
}

export const FaqSection_AnsParagraph= ({
  Ptagas:Comp = "p",
  className,
  children,
}:ParagraphAnsProps) => {
return (
 <Comp className={clsx('text-base font-normal',className)}>
  {children}
 </Comp>
)
}











