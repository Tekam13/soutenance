import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notice(props) {
  return (
    <Svg
      width={18}
      height={21}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.1.25a5.645 5.645 0 00-5.602 6.345l.08.635a2.9 2.9 0 01-.911 2.492 4.4 4.4 0 00-.976 5.155l.104.213a4.72 4.72 0 003.952 2.65l.188.324C5.948 19.8 7.526 20.75 9.183 20.75s3.235-.95 4.248-2.686l.191-.328a4.562 4.562 0 002.745-7.891l-.044-.04a3.131 3.131 0 01-.508-.61.75.75 0 00-1.264.809c.21.327.46.63.751.9l.044.04a3.062 3.062 0 01-2.084 5.306H5.196a.61.61 0 00-.027 0H5.04a3.22 3.22 0 01-2.897-1.815l-.103-.213a2.901 2.901 0 01.643-3.398 4.4 4.4 0 001.382-3.78l-.08-.635A4.145 4.145 0 018.1 1.75h1.703c1.118 0 2.121.438 2.862 1.145a.75.75 0 001.036-1.086A5.625 5.625 0 009.803.25H8.1zm1.083 19c-.921 0-1.904-.462-2.663-1.5h5.326c-.759 1.038-1.742 1.5-2.663 1.5z"
        fill="#2D264B"
      />
      <Path d="M16.183 6a2 2 0 11-4 0 2 2 0 014 0z" fill="#2D264B" />
    </Svg>
  )
}

export default Notice
