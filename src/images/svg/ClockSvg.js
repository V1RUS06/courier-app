import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

export const ClockSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} {...props}>
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 105"
          d="M7.024 22.1a11.54 11.54 0 1 1 4.476.9 11.472 11.472 0 0 1-4.476-.9ZM8.106 3.468a8.747 8.747 0 1 0 3.394-.685 8.685 8.685 0 0 0-3.394.685Zm2.694 9.424a.69.69 0 0 1-.69-.69V6.44a.69.69 0 0 1 .69-.69h1.4a.689.689 0 0 1 .69.69v3.668h3.67a.69.69 0 0 1 .69.69v1.4a.69.69 0 0 1-.69.69Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G data-name="Time_blue_icon_23" clipPath="url(#b)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 3760"
        d="M.016-.216 23-.166v23H0Z"
        transform="translate(0 .166)"
        fill="url(#a)"
      />
    </G>
  </Svg>
);
