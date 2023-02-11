const Button = (props) => {
  return (
    <button
      className={`btn btn-${props.type}`}
    >
      Request Beta Access
    </button>
  )
}

export default Button
