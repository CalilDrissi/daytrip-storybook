import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SiteNavbar } from '../components/SiteNavbar';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHero } from '../components/SiteHero';
import { TrustBar } from '../components/TrustBar';
import { ServiceCards } from '../components/ServiceCards';
import { TravelersTrust } from '../components/TravelersTrust';
import { DestinationExplorer } from '../components/DestinationExplorer';
import { PopularRoutes } from '../components/PopularRoutes';
import { DayTrips } from '../components/DayTrips';
import { FeaturedIn } from '../components/FeaturedIn';
import { AppDownload } from '../components/AppDownload';
import { FAQ } from '../components/FAQ';
import { Newsletter } from '../components/Newsletter';
const meta: Meta = { title: 'Organisms', parameters: { layout: 'fullscreen' } };
export default meta;
export const Navbar: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <SiteNavbar />
    </main>
  ),
};
export const Hero: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <SiteHero />
    </main>
  ),
};
export const TrustBarSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <TrustBar />
    </main>
  ),
};
const servicesShell = (children: React.ReactNode) => (
  <main className="isolation_isolate cq-t_inline-size cq-n_main">
    <div className="bg_grey.100">
      <div className="bdr-t_xl d_grid grid-tc_1fr ring-w_d2 ring-c_greyLike.100/30 outline-style_solid cp-path_inset(-2px_-2px_0) pt_d48 pb_d64 gap_d64 bg_linear-gradient(180deg,_{colors.white}_50%,_{colors.grey.100}_960px) sm:pt_d64 sm:pb_d112 sm:bg_linear-gradient(180deg,_{colors.white}_20.51%,_{colors.grey.100}_59.7%)">
        {children}
      </div>
    </div>
  </main>
);
export const ServiceCardsSection: StoryObj = {
  render: () => servicesShell(<ServiceCards />),
};
export const TravelersTrustSection: StoryObj = {
  render: () => servicesShell(<TravelersTrust />),
};
export const DestinationExplorerSection: StoryObj = {
  render: () => servicesShell(<DestinationExplorer />),
};
export const PopularRoutesSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <PopularRoutes />
    </main>
  ),
};
export const DayTripsSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <DayTrips />
    </main>
  ),
};
export const FeaturedInSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <FeaturedIn />
    </main>
  ),
};
export const AppDownloadSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <AppDownload />
    </main>
  ),
};
export const FAQSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <FAQ />
    </main>
  ),
};
export const NewsletterSection: StoryObj = {
  render: () => (
    <main className="isolation_isolate cq-t_inline-size cq-n_main">
      <Newsletter />
    </main>
  ),
};
export const Footer: StoryObj = { render: () => <SiteFooter /> };
