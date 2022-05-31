import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

export const DeliverAddressSvg = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={23}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#00b0f0" />
        <Stop offset={1} stopColor="#00d8f9" />
      </LinearGradient>
      <ClipPath id="b">
        <Path
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 26"
          d="M8.281 23c-.287 0-.923-.588-1.791-1.65a39.274 39.274 0 0 1-2.79-3.967 37.47 37.47 0 0 1-2.571-4.828A11.49 11.49 0 0 1 0 8.324 8.328 8.328 0 0 1 5.057.654a8.244 8.244 0 0 1 9.077 1.784 8.32 8.32 0 0 1 2.426 5.886 11.5 11.5 0 0 1-1.128 4.232 37.514 37.514 0 0 1-2.569 4.829 39.117 39.117 0 0 1-2.791 3.968C9.2 22.415 8.568 23 8.281 23ZM6.119 3.2a5.55 5.55 0 0 0-3.372 5.111 8.649 8.649 0 0 0 .76 2.96A31.117 31.117 0 0 0 5.231 14.8a33.136 33.136 0 0 0 1.852 2.95c.563.786.981 1.237 1.144 1.238s.587-.451 1.158-1.237a33.2 33.2 0 0 0 1.879-2.951 31.008 31.008 0 0 0 1.751-3.525 8.543 8.543 0 0 0 .772-2.96A5.551 5.551 0 0 0 10.416 3.2a5.511 5.511 0 0 0-4.3 0Zm-.624 5.1a2.76 2.76 0 1 1 2.76 2.775A2.767 2.767 0 0 1 5.495 8.3Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G data-name="Location_blue_icon_23">
      <G
        data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 18"
        transform="translate(3.22)"
        clipPath="url(#b)">
        <Path
          data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 216"
          transform="translate(-3.205)"
          fill="url(#a)"
          d="M0 0h22.894v24.229H0z"
        />
      </G>
    </G>
  </Svg>
);
