import type { ReactNode } from 'react'

function H1({ children }: { readonly children: ReactNode }) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>
}

function H2({ children }: { readonly children: ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <div className="container relative">
      <div className="py-12">
        <H1>Adios Axios 👋</H1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <H2>Heading</H2>
          <p>Paragraph</p>
        </div>
        <div className="flex flex-col gap-4">
          <H2>Heading</H2>
          <p>Paragraph</p>
        </div>
      </div>
    </div>
  )
}
