export type NavItem = {
  id: string
  label: string
}

type NavigationProps = {
  items: NavItem[]
  activeSection: string
  onSectionChange: (id: string) => void
}

export function Navigation({ items, activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-1 ">
      {items.map((item) => {
        const isActive = activeSection === item.id

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onSectionChange(item.id)}
            className={`inline-flex min-h-11 items-center rounded-[4px] px-3 py-2 text-[11px] font-semibold tracking-[0.02em] transition-all duration-200 ${
              isActive
                ? 'bg-[#624434] text-white'
                : 'text-[#655b55] hover:bg-[#624434]/50 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
