import { Bars } from 'react-loader-spinner'


function Loader() {
  return (
    <Bars
    height="40"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    // @ts-ignore
    wrapperStyle
    // @ts-ignore
    wrapperClass
    />
    )
}

export default Loader