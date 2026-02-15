import { NavLink } from 'react-router-dom';

const NAV_TABS = [
  { label: 'Global Financial Overview', path: '/' },
  { label: 'ChargeFlow Explorer', path: '/explorer' },
  { label: 'Invoice Management', path: '/invoices' },
  { label: 'Dispute Management', path: '/disputes' },
  { label: 'Reports & Forecasting', path: '/reports' },
  { label: 'Configuration', path: '/configuration' },
];

export default function TabNavigation() {
  return (
    <nav className="bg-primary border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-1 overflow-x-auto">
        {NAV_TABS.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
