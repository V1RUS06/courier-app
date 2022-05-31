import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from 'react-native-svg';

export const CartSvg = () => (
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
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 8"
          d="M15.1 20.195A2.811 2.811 0 1 1 17.912 23a2.808 2.808 0 0 1-2.812-2.805Zm-9.99 0A2.811 2.811 0 1 1 7.922 23a2.808 2.808 0 0 1-2.811-2.805Zm1.1-3.594a1.391 1.391 0 0 1-.441-.09 1.624 1.624 0 0 1-1.066-1.3L3.5 6.6l-.534-3.8h-1.8A1.161 1.161 0 0 1 0 1.647v-.488A1.16 1.16 0 0 1 1.162 0h3.252a1.173 1.173 0 0 1 .17.012A.929.929 0 0 1 5.52.8a1.157 1.157 0 0 1 .055.355V1.2L5.9 3.478h15.938A1.161 1.161 0 0 1 23 4.637v.488a1.16 1.16 0 0 1-.036.289.465.465 0 0 1-.012.091L20.6 15.672a1.447 1.447 0 0 1-1.317.93H6.319l-.104-.002ZM18.148 13.8l.544-2.352H7.018L7.35 13.8ZM8.831 8.637h10.51l.208-.9.337-1.457H6.292l.331 2.352Z"
          fill="url(#a)"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 8"
      clipPath="url(#b)">
      <Path
        data-name="\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A 145"
        transform="translate(-.133 -1.375)"
        fill="url(#a)"
        d="M0 0h23.667v24.834H0z"
      />
    </G>
  </Svg>
);
