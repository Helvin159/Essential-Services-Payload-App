import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Home Heros - Dashboard',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="dashboard-layout">
      <aside>
        <div>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <Link href={'/dashboard/analytics'}>Analytics</Link>
            </li>
            <li>
              <Link href={'/dashboard/sales-pipeline'}>Sales Pipeline</Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="dashboard-layout__page">{children}</div>
    </section>
  )
}
