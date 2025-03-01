import { Lazy } from "@/utils"
import type { MenuObject } from "@/layout"
import { Container, Unit } from "unit-testing-react"
import React from "react"

export default {
	name: 'form',
	path: '/form',
	children: [
		{
			index: true,
			element: <Container columns={2}>
				<Unit>{Lazy(import('./classTest'))}</Unit>
				<Unit>{Lazy(import('./FCTest'))}</Unit>
			</Container>,
		},
		{
			name: 'button',
			path: '/form/button',
			element: (
				<Container columns={1}>
					<Unit>{Lazy(import('../modules/button/demo'))}</Unit>
					{/* <Unit>{Lazy(import('./FCTest'))}</Unit> */}
				</Container>
			),
		},
		{
			name: 'input',
			path: '/form/input',
			element: <Container columns={1}>
				<Unit title="FC(demo)">
					{Lazy(import('../modules/input/demo/fc-test'))}
				</Unit>
				{/* <Unit>
					<Container>
						<Unit title="Class(Form)">
							{Lazy(import('../modules/input/demo/class'))}
						</Unit>
						<Unit title="FC(Form)">
							{Lazy(import('../modules/input/demo/fc'))}
						</Unit>
					</Container>
				</Unit>
				<Unit>{Lazy(import('../modules/input/demo'))}</Unit> */}
			</Container>
		},
		{
			name: 'inputNumber',
			path: '/form/inputNumber',
			element: <Container columns={1}>
				<Unit>
					<Container>
						<Unit title="FC(Form)">
							{Lazy(import('../modules/inputNumber/demo/fc'))}
						</Unit>
						<Unit title="Class(Form)">
							{Lazy(import('../modules/inputNumber/demo/class'))}
						</Unit>
					</Container>
				</Unit>
				<Unit>
					{Lazy(import(`../modules/inputNumber/demo`))}
				</Unit>
			</Container>
		},
		{
			name: 'select',
			path: '/form/select',
			element: <Container columns={1} grid>
				<Unit title="select(mult)">
					{Lazy(import('../modules/select/demo/mult'))}
				</Unit>
				<Unit title="select(form)">
					{Lazy(import('../modules/select/demo/form'))}
				</Unit>
				<Unit title="select(simple)">
					{Lazy(import('../modules/select/demo/simple'))}
				</Unit>
			</Container>
		},

		{
			name: 'textarea',
			path: '/form/textarea',
			element: Lazy(import(`../modules/textarea/demo`))
		},
		{
			name: 'checkbox',
			path: '/form/checkbox',
			element: Lazy(import(`../modules/checkbox/demo`))
		},
		{
			name: 'radio',
			path: '/form/radio',
			element: <Container columns={1}>
				<Unit> {Lazy(import('../modules/radio/demo'))} </Unit>
				<Unit>{Lazy(import('../modules/radio/demo/fc'))}</Unit>
				<Unit>{Lazy(import('../modules/radio/demo/class'))}</Unit>
			</Container>
		}
	],
} as MenuObject