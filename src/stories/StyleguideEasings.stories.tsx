import type { Meta, StoryObj } from '@storybook/react';

const EASINGS = [
  { name: 'ease-out-quad', val: 'cubic-bezier(.25,.46,.45,.94)' },
  { name: 'ease-out-cubic', val: 'cubic-bezier(.215,.61,.355,1)' },
  { name: 'ease-out-quart', val: 'cubic-bezier(.165,.84,.44,1)' },
  { name: 'ease-out-quint', val: 'cubic-bezier(.23,1,.32,1)' },
  { name: 'ease-out-circ', val: 'cubic-bezier(.075,.82,.165,1)' },
  { name: 'ease-out-expo', val: 'cubic-bezier(.19,1,.22,1)' },
  { name: 'snappy', val: 'cubic-bezier(.2,0,0,1)' },
];

function EasingsStory() {
  return (
    <div style={{ padding: 32 }}>
      <div style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 8 }}>Easings (--easings-*)</div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#bbb', marginBottom: 24 }}>Hover each row to see the animation</div>

      <style>{`
        .easing-demo { width: 16px; height: 16px; border-radius: 50%; background: var(--colors-blue-400); transition: transform 600ms; }
        .easing-row:hover .easing-demo { transform: translateX(200px); }
      `}</style>

      {EASINGS.map(({ name, val }) => (
        <div key={name} className="easing-row" style={{
          display: 'flex', alignItems: 'center', gap: 24,
          borderBottom: '1px solid #f0f0f0', padding: '14px 0', cursor: 'default',
        }}>
          <div style={{ width: 160, flexShrink: 0, fontFamily: 'monospace', fontSize: 12, color: '#333' }}>{name}</div>
          <div style={{ width: 280, flexShrink: 0, fontFamily: 'monospace', fontSize: 11, color: '#aaa' }}>{val}</div>
          <div style={{ width: 240, position: 'relative' }}>
            <div className="easing-demo" style={{ transitionTimingFunction: val }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const meta: Meta = { title: 'Styleguide/Easings', parameters: { layout: 'fullscreen' } };
export default meta;

export const Easings: StoryObj = { render: () => <EasingsStory /> };
