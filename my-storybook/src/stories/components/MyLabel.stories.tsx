import { MyLabel, Props } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example/MyLabel',
  component: MyLabel,
  argTypes: {
    size: { control: 'select' },
    color: { control: 'select' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args: Props) => <MyLabel {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'normal',
  allCaps: false, //true: capitaliza toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary', //primary | secondary | tertiary
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};
