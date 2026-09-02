import type { Meta, StoryObj } from '@storybook/react';

const SCALES = [
  { name: 'Blue', shades: [100,150,200,300,400,500,600,650,700] },
  { name: 'Grey', shades: [100,150,200,300,400,500,600,650,700] },
  { name: 'Green', shades: [100,150,200,300,400,500,600,650,700] },
  { name: 'Red', shades: [100,150,200,300,400,500,600,650,700] },
  { name: 'Yellow', shades: [100,150,200,300,400,500,600,650,700] },
  { name: 'Purple', shades: [100,150,200,300,400,500,600,650,700] },
];

const SPECIAL = [
  { name: 'white', var: '--colors-white' },
  { name: 'black', var: '--colors-black' },
  { name: 'booking-background', var: '--colors-booking-background' },
  { name: 'tripadvisor-green', var: '--colors-tripadvisor-green' },
  { name: 'tripadvisor-rating-green', var: '--colors-tripadvisor-rating-green' },
];

function ColorPalette() {
  return (
    <div style={{ padding: 32, fontFamily: 'monospace', fontSize: 11 }}>
      {SCALES.map(({ name, shades }) => (
        <div key={name} style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 8, letterSpacing: 1, textTransform: 'uppercase' }}>{name}</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {shades.map(shade => {
              const v = `--colors-${name.toLowerCase()}-${shade}`;
              return (
                <div key={shade} style={{ flex: 1 }}>
                  <div style={{ height: 48, borderRadius: 6, background: `var(${v})`, border: '1px solid rgba(0,0,0,.06)' }} />
                  <div style={{ marginTop: 4, color: '#555' }}>{shade}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div style={{ marginBottom: 8, fontWeight: 700, fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>Special</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {SPECIAL.map(({ name, var: v }) => (
          <div key={name} style={{ width: 120 }}>
            <div style={{ height: 48, borderRadius: 6, background: `var(${v})`, border: '1px solid rgba(0,0,0,.1)' }} />
            <div style={{ marginTop: 4, color: '#555' }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const meta: Meta = { title: 'Styleguide/Colors', parameters: { layout: 'fullscreen' } };
export default meta;

export const Colors: StoryObj = { render: () => <ColorPalette /> };
