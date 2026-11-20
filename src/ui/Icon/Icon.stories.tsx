import type { Meta, StoryObj } from '@storybook/react-vite';
import type { SVGProps } from 'react';
import { Icon } from './Icon';

function SunIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
                d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"
                fill="currentColor"
            />
        </svg>
    );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="m12 2 2.9 6.1 6.6.9-4.8 4.7 1.1 6.6L12 17.2l-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2Z" />
        </svg>
    );
}

const meta = {
    title: 'UI/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component:
                    'Icon is a wrapper for SVG React components. It provides consistent sizing and supports native SVG props.',
            },
        },
    },
    args: {
        icon: SunIcon,
        size: 24,
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: 16,
    },
};

export const Medium: Story = {
    args: {
        size: 24,
    },
};

export const Large: Story = {
    args: {
        size: 48,
    },
};

export const ExtraLarge: Story = {
    args: {
        size: 64,
    },
};

export const CustomColor: Story = {
    args: {
        size: 32,
        style: {
            color: '#E5A000',
        },
    },
};

export const Accessible: Story = {
    args: {
        size: 32,
        'aria-label': 'Sunny weather',
        role: 'img',
    },
};

export const IconCollection: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Icon icon={SunIcon} size={32} />
            <Icon icon={MoonIcon} size={32} />
            <Icon icon={StarIcon} size={32} />
        </div>
    ),
};

export const DifferentSizes: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Icon icon={SunIcon} size={16} />
            <Icon icon={SunIcon} size={24} />
            <Icon icon={SunIcon} size={32} />
            <Icon icon={SunIcon} size={48} />
        </div>
    ),
};
