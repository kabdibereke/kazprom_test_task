import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    where: "header" | "modal"
}