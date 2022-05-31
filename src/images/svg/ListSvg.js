import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

export const ListSvg = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={23.001}>
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 81"
          d="M2.085 23A2.08 2.08 0 0 1 0 20.93V2.07A2.08 2.08 0 0 1 2.085 0h14.83A2.08 2.08 0 0 1 19 2.07v18.86A2.08 2.08 0 0 1 16.915 23ZM2.8 4.163v14.674a1.387 1.387 0 0 0 1.391 1.38h10.615a1.387 1.387 0 0 0 1.391-1.38V4.163a1.387 1.387 0 0 0-1.391-1.38H4.194A1.387 1.387 0 0 0 2.8 4.163Zm9.246 12.88v-.023a1.39 1.39 0 0 1 2.78 0v.023a1.407 1.407 0 0 1-.613 1.145 1.332 1.332 0 0 1-.777.236 1.385 1.385 0 0 1-1.387-1.381Zm-6.488 1.38a1.385 1.385 0 0 1-1.39-1.38v-.023a1.385 1.385 0 0 1 1.39-1.38h4.4a1.385 1.385 0 0 1 1.391 1.38v.023a1.386 1.386 0 0 1-1.391 1.38Zm0-3.681a1.385 1.385 0 0 1-1.39-1.38v-.022a1.385 1.385 0 0 1 1.39-1.38h7.878a1.385 1.385 0 0 1 1.39 1.38v.023a1.385 1.385 0 0 1-1.39 1.38Zm0-3.68a1.385 1.385 0 0 1-1.39-1.38V9.66a1.386 1.386 0 0 1 1.39-1.38h7.878a1.385 1.385 0 0 1 1.39 1.38v.023a1.385 1.385 0 0 1-1.39 1.38Zm0-3.68A1.385 1.385 0 0 1 4.171 6v-.019A1.385 1.385 0 0 1 5.561 4.6h7.878a1.385 1.385 0 0 1 1.39 1.38V6a1.385 1.385 0 0 1-1.39 1.38Z"
          transform="translate(0 -.001)"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 45"
      transform="translate(2 .001)"
      clipPath="url(#b)">
      <Path
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 1689"
        transform="translate(-2 -.001)"
        fill="url(#a)"
        d="M0 0h23v23H0z"
      />
    </G>
  </Svg>
);
