import type { Meta, StoryObj } from '@storybook/react';

const SPACING = [
  { name: 'd0', val: '0' },
  { name: 'd1', val: '.0625rem' },
  { name: 'd2', val: '.125rem' },
  { name: 'd4', val: '.25rem' },
  { name: 'd5', val: '.313rem' },
  { name: 'd6', val: '.375rem' },
  { name: 'd8', val: '.5rem' },
  { name: 'd9', val: '.5625rem' },
  { name: 'd10', val: '.625rem' },
  { name: 'd11', val: '.6875rem' },
  { name: 'd12', val: '.75rem' },
  { name: 'd13', val: '.8375rem' },
  { name: 'd14', val: '.875rem' },
  { name: 'd15', val: '.9375rem' },
  { name: 'd16', val: '1rem' },
  { name: 'd18', val: '1.125rem' },
  { name: 'd20', val: '1.25rem' },
  { name: 'd22', val: '1.375rem' },
  { name: 'd24', val: '1.5rem' },
  { name: 'd26', val: '1.625rem' },
  { name: 'd28', val: '1.75rem' },
  { name: 'd30', val: '1.875rem' },
  { name: 'd32', val: '2rem' },
  { name: 'd36', val: '2.25rem' },
  { name: 'd38', val: '2.375rem' },
  { name: 'd40', val: '2.5rem' },
  { name: 'd44', val: '2.75rem' },
  { name: 'd48', val: '3rem' },
  { name: 'd52', val: '3.25rem' },
  { name: 'd54', val: '3.375rem' },
  { name: 'd56', val: '3.5rem' },
  { name: 'd60', val: '3.75rem' },
  { name: 'd64', val: '4rem' },
  { name: 'd72', val: '4.5rem' },
  { name: 'd80', val: '5rem' },
  { name: 'd92', val: '5.75rem' },
  { name: 'd96', val: '6rem' },
  { name: 'd104', val: '6.5rem' },
  { name: 'd112', val: '7rem' },
  { name: 'd120', val: '7.5rem' },
  { name: 'd128', val: '8rem' },
  { name: 'd152', val: '9.5rem' },
];

function SpacingStory() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Spacing Scale (--spacing-*)</div>
      {SPACING.map(({ name, val }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #f5f5f5', padding: '5px 0' }}>
          <div style={{ width: 56, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#aaa' }}>{name}</div>
          <div style={{ width: 64, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#bbb' }}>{val}</div>
          <div style={{ height: 16, background: 'var(--colors-blue-400)', borderRadius: 2, width: `var(--spacing-${name})`, minWidth: name === 'd0' ? 1 : 0, opacity: name === 'd0' ? 0.2 : 1 }} />
        </div>
      ))}
    </div>
  );
}

const meta: Meta = { title: 'Styleguide/Spacing', parameters: { layout: 'fullscreen' } };
export default meta;

export const Spacing: StoryObj = { render: () => <SpacingStory /> };
