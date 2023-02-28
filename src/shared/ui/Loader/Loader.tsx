import './Loader.scss'

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => (
	<div className="lds-facebook">
		<div />
		<div />
		<div />
	</div>
)
