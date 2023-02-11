import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IModal extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	types:"add" | "del"
}