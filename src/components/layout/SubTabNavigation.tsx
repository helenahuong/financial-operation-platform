interface SubTab {
  label: string;
  value: string;
}

interface SubTabNavigationProps {
  tabs: SubTab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function SubTabNavigation({ tabs, activeTab, onTabChange }: SubTabNavigationProps) {
  return (
    <div className="flex gap-6 border-b border-border mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 cursor-pointer ${
            activeTab === tab.value
              ? 'border-primary text-primary'
              : 'border-transparent text-text-secondary hover:text-text-primary'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
