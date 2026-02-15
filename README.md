# Financial Operations Platform

A comprehensive financial operations dashboard built with React, TypeScript, and Tailwind CSS. It provides real-time visibility into organizational finances — including budgets, invoices, vendor charges, disputes, and cost center performance — through interactive charts, data tables, and KPI cards.

## Features

### Global Financial Overview
- KPI cards for total revenue, expenses, net profit, active vendors, and pending invoices
- Donut charts for sales volume and margin by region
- Regional summary cards with YTD spend and vendor counts
- Budget utilization heatmap across regions and departments

### Charge Flow Explorer
- **Internal Program Charges** — service-level breakdown by department with usage, unit rates, and costs
- **Vendor & Supplier Charges** — contract values, YTD spend, and invoice counts per vendor
- **Cost Center Drill-Down** — budget vs. actual spend with variance and utilization tracking
- Toggle between table and chart views; advanced filtering by date range, department, spend range, and status

### Invoice Management
- Invoice summary table with search, status filters, and department filters
- Detailed invoice view with line items, vendor info, approval history, payment terms, and attachments
- Bulk actions and export support
- Per-row actions: approve, reject, download, comment

### Dispute Management
- Dashboard with KPIs (open disputes, total amount, resolution rate, avg. days open)
- SLA performance horizontal bar chart
- Team workload overview with case counts and load status
- Active disputes table with priority, status, and assignment tracking
- Form to raise new disputes

### Configuration
- Service & pricing setup with unit rate, component rate, and lease rate models
- Effective date management for scheduled price changes
- Usage data upload (CSV, XLSX, JSON)
- Vendor mapping and user access/roles (coming soon)

### Reports & Forecasting
- Placeholder for upcoming reporting and forecasting tools

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 6 |
| State Management | Zustand |
| Charts | Recharts |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Tables | TanStack Table |
| HTTP | Axios |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/helenahuong/financial-operation-platform.git
cd financial-operation-platform
npm install
```

### Development

```bash
npm run dev
```

Opens the app at [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── features/       # Feature-specific components (filters, charts, invoice details)
│   ├── layout/         # App shell, navigation, page headers
│   └── ui/             # Reusable UI primitives (tables, charts, cards, modals)
├── data/               # Static/mock data for each module
├── pages/              # Page-level components (one per route)
├── stores/             # Zustand state stores
├── types/              # TypeScript type definitions
└── utils/              # Formatting helpers and status color utilities
```
