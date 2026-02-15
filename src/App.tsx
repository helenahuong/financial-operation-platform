import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import GlobalOverview from '@/pages/GlobalOverview';
import ChargeFlowExplorer from '@/pages/ChargeFlowExplorer';
import InvoiceManagement from '@/pages/InvoiceManagement';
import DisputeManagement from '@/pages/DisputeManagement';
import Configuration from '@/pages/Configuration';
import ReportsForecasting from '@/pages/ReportsForecasting';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<GlobalOverview />} />
          <Route path="/explorer" element={<ChargeFlowExplorer />} />
          <Route path="/invoices" element={<InvoiceManagement />} />
          <Route path="/disputes" element={<DisputeManagement />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/reports" element={<ReportsForecasting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
