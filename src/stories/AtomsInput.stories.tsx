import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = { title: 'Atoms/Input', parameters: { layout: 'centered' } };
export default meta;

export const SearchText: StoryObj = {
  render: () => (
    <div style={{ background: 'white', padding: '16px', borderRadius: '8px', minWidth: '280px' }}>
      <input aria-label="From city, hotel, airport" type="text" aria-autocomplete="list" autocomplete="off" placeholder="From city, hotel, airport" autocorrect="off" spellcheck="false" tabIndex="0" id="react-aria-_R_4p6le8lf95u8uivbH4_" role="combobox" aria-expanded="false" className="pt_d16 pb_d16 fs_d16 h_100% bg_transparent bd_none trs_background-color_.25s_{easings.snappy},_color_.2s_ease-in-out c_grey.700 tov_ellipsis placeholder:c_grey.500 placeholderShown:tov_ellipsis placeholderShown:pr_d18 hover:bg_grey.100 focus:pos_relative focus:z_1 focus:bdr_sm focus:placeholder:c_grey.400 bdr-tl_full! bdr-bl_full! bdr-tr_222px! bdr-br_222px! pl_d48 pr_d52" data-rac="" value="" title="" />
    </div>
  ),
};

export const EmailNewsletter: StoryObj = {
  render: () => (
    <div style={{ background: 'white', padding: '16px', borderRadius: '8px', minWidth: '280px' }}>
      type="email" tabIndex="0" id="react-aria-_R_2ml5u8uivb_" aria-labelledby="react-aria-_R_2ml5u8uivbH1_" className="react-aria-Input" data-rac="" name="email" value="" title="">
    </div>
  ),
};
