import type { ReactNode } from 'react'
import { ThemeSwitcher } from '@/app/components.client'

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

function P({ children }: { readonly children: ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}

export default function Page() {
  return (
    <div className="container relative">
      <div className="flex items-center justify-between py-12">
        <H1>Adios Axios 👋</H1>
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-8">
        <section>
          <H2>Heading</H2>
          <P>Paragraph</P>
        </section>
        <section>
          <H2>Heading</H2>
          <P>Paragraph</P>
        </section>
      </div>
    </div>
  )
}
