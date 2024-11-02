import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FV(props) {
  return (
    <Svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.533 1.528A.75.75 0 1010.467.472L8.72 2.235c-.71.716-1.197 1.206-1.61 1.538-.402.323-.66.434-.892.463a1.728 1.728 0 01-.436 0c-.232-.03-.49-.14-.891-.463-.414-.332-.902-.822-1.611-1.538L1.533.472A.75.75 0 10.467 1.528l1.78 1.795c.669.676 1.217 1.228 1.704 1.62.508.407 1.023.702 1.64.781.272.035.546.035.817 0 .618-.079 1.133-.374 1.64-.781.488-.392 1.036-.944 1.706-1.62l1.779-1.795z"
        fill="#fff"
      />
    </Svg>
  )
}

export default FV