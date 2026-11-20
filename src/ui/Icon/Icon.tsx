import type { ComponentType, SVGProps } from 'react';
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
    title?: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    size?: number | string;
}
export function Icon({
    icon: SvgIcon,
    size = 24,
    ...props
}: IconProps) {
    const isAccessible = Boolean(props['aria-label'] || props.title);

    return (
        <SvgIcon
            width={size}
            height={size}
            focusable="false"
            aria-hidden={isAccessible ? undefined : true}
            {...props}
        />
    );
}
