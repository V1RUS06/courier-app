import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Circle,
} from 'react-native-svg';

export const GettingSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={50}
    {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.464}
        y1={0.969}
        x2={0.479}
        y2={0.02}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#00b0f0" />
        <Stop offset={1} stopColor="#00d8f9" />
      </LinearGradient>
      <LinearGradient id="b" x1={0.5} y1={0} x2={0.5} y2={1} xlinkHref="#a" />
    </Defs>
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 899"
      d="M3.125 0h16.088a3.125 3.125 0 0 1 3.125 3.125v16.088a3.125 3.125 0 0 1-3.125 3.125H3.125A3.125 3.125 0 0 1 0 19.213V3.125A3.125 3.125 0 0 1 3.125 0Z"
      transform="translate(22.275 21.984)"
      fill="url(#a)"
    />
    <G
      data-name="\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C 2200"
      transform="translate(26.109 25.818)">
      <Circle
        data-name="\u042D\u043B\u043B\u0438\u043F\u0441 1"
        cx={2.183}
        cy={2.183}
        transform="rotate(-77.716 7.978 1.56)"
        r={2.183}
      />
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1"
        d="M7.354 0A7.354 7.354 0 0 0 0 7.354a7.354 7.354 0 0 0 7.354 7.355 7.354 7.354 0 0 0 7.357-7.353A7.354 7.354 0 0 0 7.354 0Zm0 12.823a5.469 5.469 0 0 1-5.469-5.469 5.469 5.469 0 0 1 5.469-5.468 5.469 5.469 0 0 1 5.469 5.468 5.469 5.469 0 0 1-5.469 5.469Z"
      />
    </G>
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 896"
      d="M44.61 24.892s3.7 4.406 3.7 8.592-3.7 8.15-3.7 8.15v-1.361s2.664-3.262 2.664-6.788-2.664-7.318-2.664-7.318Z"
      fill="#38484b"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 897"
      d="M44.61 24.892s2.441 3.794 2.441 7.4a13.987 13.987 0 0 1-2.441 7.018v-1.172a12.6 12.6 0 0 0 1.758-5.846 15.711 15.711 0 0 0-1.758-6.3Z"
      fill="#38484b"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 888"
      d="M.02 2.841C-.115 3.084.4.283 2.652.011 6.072-.324 19.6 7.074 19.345 7.388 19.163 7.61 9.756 2.33 4.09.925 1.808.359.059 2.77.02 2.841Z"
      transform="rotate(-24 65.82 -38.152)"
      fill="url(#b)"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 889"
      d="M33.725 20.726c1.159.02 2.094.453 2.085.965-1.767-.026-3.343-.045-4.201-.073.008-.512.954-.912 2.116-.892Z"
      fill="#38484b"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 893"
      d="M3.066 30.242H16.38a.563.563 0 0 1 .563.563v12.952a.563.563 0 0 1-.563.563H3.066a.563.563 0 0 1-.563-.563V30.805a.563.563 0 0 1 .563-.563Z"
      fill="#ffb155"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 894"
      d="M8.034 30.242h3.379v4.505a1.126 1.126 0 0 1-1.126 1.126H9.16a1.126 1.126 0 0 1-1.126-1.126Z"
      fill="#936937"
    />
    <Path
      data-name="\u041A\u043E\u043D\u0442\u0443\u0440 895"
      d="M12.177 40.465h2.253a.563.563 0 0 1 .563.563v1.69a.563.563 0 0 1-.563.563h-2.253a.563.563 0 0 1-.563-.563v-1.69a.563.563 0 0 1 .563-.563Z"
      fill="#fff"
    />
  </Svg>
);
