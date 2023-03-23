import { ComponentBaseProps } from "@/assets"
import React from "react"
import { icons, IconType } from './icons'


export interface IconProps extends ComponentBaseProps {
	type: IconType
	size?: number
	width?: number
	height?: number
	fill?: string
	[key: string]: any
}

export function Icon(props: IconProps) {
	const { type, size = 14, width, height, ...rest } = props
	return <svg
		viewBox="0 0 1024 1024"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		width={width || size}
		height={height || size}
		{...rest} >
		<path d={icons[type]} p-id="8848"></path>
	</svg>
}

export function getIcon(key: string, size = 32, color = '#000') {
	return {
		unFold: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7767" width={size.toString()} height={size.toString()}><path d="M867.1 141.17H156.08c-17.67 0-32 14.33-32 32s14.33 32 32 32H867.1c17.67 0 32-14.33 32-32s-14.33-32-32-32zM867.92 367.52H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 573.87H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 800.22H156.9c-17.67 0-32 14.33-32 32s14.33 32 32 32h711.02c17.67 0 32-14.33 32-32 0-17.68-14.32-32-32-32zM312.01 367.52v270.35L137.47 489.71z" p-id="7768" fill={color}></path></svg>,
		fold: <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7950" width={size.toString()} height={size.toString()}><path d="M867.1 141.17H156.08c-17.67 0-32 14.33-32 32s14.33 32 32 32H867.1c17.67 0 32-14.33 32-32s-14.33-32-32-32zM867.92 367.52H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 573.87H403.2c-17.67 0-32 14.33-32 32s14.33 32 32 32h464.73c17.67 0 32-14.33 32-32s-14.33-32-32.01-32zM867.92 800.22H156.9c-17.67 0-32 14.33-32 32s14.33 32 32 32h711.02c17.67 0 32-14.33 32-32 0-17.68-14.32-32-32-32zM137.47 637.87V367.52l174.54 148.15z" p-id="7951" fill={color}></path></svg>
	}[key]
} 