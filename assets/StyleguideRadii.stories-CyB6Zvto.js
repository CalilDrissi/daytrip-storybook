import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-t0YaZM8k.js";import{t as n}from"./jsx-runtime-Boqd0qRh.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r=n(),i={title:`Styleguide/Radii`,parameters:{layout:`fullscreen`}},a=[{name:`none`,token:`--radii-none`},{name:`xxs`,token:`--radii-xxs`},{name:`xs`,token:`--radii-xs`},{name:`sm`,token:`--radii-sm`},{name:`sm2`,token:`--radii-sm2`},{name:`md`,token:`--radii-md`},{name:`lg`,token:`--radii-lg`},{name:`xl`,token:`--radii-xl`},{name:`xxl`,token:`--radii-xxl`},{name:`full`,token:`--radii-full`}],o={render:()=>(0,r.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:32,padding:24},children:a.map(({name:e,token:t})=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:12},children:[(0,r.jsx)(`div`,{style:{width:96,height:96,background:`var(--colors-blue-400)`,borderRadius:`var(${t})`}}),(0,r.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,r.jsx)(`div`,{style:{fontWeight:700,fontSize:13},children:e}),(0,r.jsx)(`div`,{style:{fontFamily:`monospace`,fontSize:11,color:`#888`},children:t})]})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 32,
    padding: 24
  }}>
      {radii.map(({
      name,
      token
    }) => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }}>
          <div style={{
        width: 96,
        height: 96,
        background: 'var(--colors-blue-400)',
        borderRadius: \`var(\${token})\`
      }} />
          <div style={{
        textAlign: 'center'
      }}>
            <div style={{
          fontWeight: 700,
          fontSize: 13
        }}>{name}</div>
            <div style={{
          fontFamily: 'monospace',
          fontSize: 11,
          color: '#888'
        }}>{token}</div>
          </div>
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}},s=[`BorderRadius`]})))()}c();export{o as BorderRadius,s as __namedExportsOrder,i as default};