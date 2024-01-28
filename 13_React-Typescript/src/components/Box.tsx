type PropsType = {
    heading: string,
    count: number,
    func: () => void,
}

const Box = ({heading, count, func}: PropsType) => {
    func();
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
    </div>
  )
}

export default Box;
