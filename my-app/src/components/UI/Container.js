const Container = ({
	className,
	bColor,
	borderTop,
	width,
	height,
	rWidth,
	children,
}) => {
	return <div className={className}>{children}</div>
}

export default Container
