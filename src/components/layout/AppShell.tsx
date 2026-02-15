import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import TabNavigation from './TabNavigation';
import ToastContainer from '@/components/ui/Toast';

export default function AppShell() {
  return (
    <div className="min-h-screen bg-bg-page">
      <TopNav />
      <TabNavigation />
      <main className="max-w-[1440px] mx-auto px-6 py-6">
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
}
