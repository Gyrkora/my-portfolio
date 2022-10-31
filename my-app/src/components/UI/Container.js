const Container = ({
	className,
	bColor,
	borderTop,
	width,
	height,
	rWidth,
	rotateY,
	children,
}) => {
	return <div className={className}>{children}</div>
}

export default Container
