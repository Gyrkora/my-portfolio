export const Button = ({ className, bColor, pX, label, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	)
}
