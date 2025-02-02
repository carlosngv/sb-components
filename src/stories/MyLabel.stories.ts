import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],

    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        size: {
            control: 'inline-radio',	
         },
    }
} satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
}

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
}

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
}

export const CustomColor: Story = {
    args: {
        label: 'CustomColor label',
        fontColor: '#a61515',
    }
}