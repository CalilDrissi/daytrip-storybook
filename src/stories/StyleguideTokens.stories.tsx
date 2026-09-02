import type { Meta, StoryObj } from '@storybook/react';

const RADII = [
  { name: 'none', val: '0' },
  { name: 'xxs', val: '.25rem' },
  { name: 'xs', val: '.375rem' },
  { name: 'sm', val: '.5rem' },
  { name: 'sm2', val: '.75rem' },
  { name: 'md', val: '1rem' },
  { name: 'lg', val: '1.5rem' },
  { name: 'xl', val: '2rem' },
  { name: 'xxl', val: '2.5rem' },
  { name: 'full', val: '666px' },
];

const SHADOWS = [
  { name: 'light-xs', val: '0px 1px 4px 0px #1216191a' },
  { name: 'light-sm', val: '0px 2px 8px 0px #1216191a' },
  { name: 'light-md', val: '0px 4px 16px 0px #1216191a' },
  { name: 'light-lg', val: '0px 8px 24px 0px #1216191a' },
  { name: 'light-xl', val: '0px 12px 32px 0px #1216191a' },
  { name: 'dark-xs', val: '0px 1px 4px 0px #12161933' },
  { name: 'dark-sm', val: '0px 2px 8px 0px #12161933' },
  { name: 'dark-md', val: '0px 4px 16px 0px #12161933' },
  { name: 'dark-lg', val: '0px 8px 24px 0px #12161933' },
  { name: 'dark-xl', val: '0px 12px 32px 0px #12161933' },
];

function TokensStory() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>Border Radius (--radii-*)</div>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
        {RADII.map(({ name, val }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{
              width: 64, height: 64,
              background: 'var(--colors-blue-100)',
              border: '2px solid var(--colors-blue-400)',
              borderRadius: `var(--radii-${name})`,
            }} />
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#555', marginTop: 6 }}>{name}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#bbb' }}>{val}</div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>Shadows (--shadows-*)</div>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {SHADOWS.map(({ name }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{
              width: 80, height: 56,
              background: '#fff',
              borderRadius: 8,
              boxShadow: `var(--shadows-${name})`,
            }} />
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#555', marginTop: 10 }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = { title: 'Styleguide/Tokens', parameters: { layout: 'fullscreen' } };
export default meta;

export const Tokens: StoryObj = { render: () => <TokensStory /> };
