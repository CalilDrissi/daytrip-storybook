import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Styleguide/Radii', parameters: { layout: 'fullscreen' } };
export default meta;

const radii = [
  { name: 'none',  token: '--radii-none' },
  { name: 'xxs',   token: '--radii-xxs' },
  { name: 'xs',    token: '--radii-xs' },
  { name: 'sm',    token: '--radii-sm' },
  { name: 'sm2',   token: '--radii-sm2' },
  { name: 'md',    token: '--radii-md' },
  { name: 'lg',    token: '--radii-lg' },
  { name: 'xl',    token: '--radii-xl' },
  { name: 'xxl',   token: '--radii-xxl' },
  { name: 'full',  token: '--radii-full' },
];

export const BorderRadius: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, padding: 24 }}>
      {radii.map(({ name, token }) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 96,
              height: 96,
              background: 'var(--colors-blue-400)',
              borderRadius: `var(${token})`,
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{name}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#888' }}>{token}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
