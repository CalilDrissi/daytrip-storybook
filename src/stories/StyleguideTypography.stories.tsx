import type { Meta, StoryObj } from '@storybook/react';

const TEXT_STYLES = [
  'displayL','displayM','displayS',
  'headlineXl','headlineL','headlineM','headlineS','headlineXs',
  'titleXl','titleL','titleM','titleS',
  'bodyXl','bodyL','bodyM','bodyS',
  'labelL','labelM','labelS',
  'landingPageH1','landingPageH2','landingPageH3','landingPageH4',
];

const FONT_SIZES = [
  { name: 'd8', val: '.5rem' },
  { name: 'd10', val: '.625rem' },
  { name: 'd11', val: '.6875rem' },
  { name: 'd12', val: '.75rem' },
  { name: 'd13', val: '.8125rem' },
  { name: 'd14', val: '.875rem' },
  { name: 'd16', val: '1rem' },
  { name: 'd18', val: '1.125rem' },
  { name: 'd20', val: '1.25rem' },
  { name: 'd22', val: '1.375rem' },
  { name: 'd24', val: '1.5rem' },
  { name: 'd28', val: '1.75rem' },
  { name: 'd32', val: '2rem' },
  { name: 'd36', val: '2.25rem' },
  { name: 'd40', val: '2.5rem' },
  { name: 'd44', val: '2.75rem' },
  { name: 'd48', val: '3rem' },
  { name: 'd56', val: '3.5rem' },
  { name: 'd64', val: '4rem' },
  { name: 'd72', val: '4.5rem' },
  { name: 'd104', val: '6.5rem' },
  { name: 'd112', val: '7rem' },
  { name: 'd128', val: '8rem' },
  { name: 'd136', val: '8.5rem' },
];

const WEIGHTS = [
  { label: '400 — Regular', weight: 400 },
  { label: '500 — Medium', weight: 500 },
  { label: '600 — SemiBold', weight: 600 },
  { label: '700 — Bold', weight: 700 },
];

function TypographyStory() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>Text Styles</div>
      {TEXT_STYLES.map(name => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 24, borderBottom: '1px solid #f0f0f0', padding: '10px 0' }}>
          <div style={{ width: 160, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#aaa' }}>{name}</div>
          <div className={`textStyle_${name}`}>The quick brown fox jumps over the lazy dog</div>
        </div>
      ))}

      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16, marginTop: 48 }}>Font Sizes (--font-sizes-*)</div>
      {FONT_SIZES.map(({ name, val }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #f0f0f0', padding: '6px 0', overflow: 'hidden' }}>
          <div style={{ width: 80, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#aaa' }}>{name}</div>
          <div style={{ width: 56, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#bbb' }}>{val}</div>
          <div style={{ fontSize: `var(--font-sizes-${name})`, whiteSpace: 'nowrap', overflow: 'hidden', lineHeight: 1.2 }}>Aa</div>
        </div>
      ))}

      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16, marginTop: 48 }}>Font Weights</div>
      {WEIGHTS.map(({ label, weight }) => (
        <div key={weight} style={{ fontSize: 24, fontWeight: weight, padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#aaa', marginRight: 24, fontWeight: 400 }}>{label}</span>
          The quick brown fox jumps over the lazy dog
        </div>
      ))}

      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16, marginTop: 48 }}>Font Families</div>
      <div style={{ fontSize: 20, padding: '12px 0', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#aaa', display: 'block', marginBottom: 4 }}>matterFont (primary)</span>
        <span style={{ fontFamily: 'matterFont, sans-serif' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</span>
      </div>
      <div style={{ fontSize: 20, padding: '12px 0' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#aaa', display: 'block', marginBottom: 4 }}>Biko (accent)</span>
        <span style={{ fontFamily: 'Biko, serif' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</span>
      </div>
    </div>
  );
}

const meta: Meta = { title: 'Styleguide/Typography', parameters: { layout: 'fullscreen' } };
export default meta;

export const Typography: StoryObj = { render: () => <TypographyStory /> };
