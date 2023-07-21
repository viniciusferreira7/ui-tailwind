'use client'

import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function NavLink({ children, ...props }: NavLinkProps) {
  const path = usePathname()

  return (
    <a
      className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
      {...props}
    >
      {children}
    </a>
  )
}
