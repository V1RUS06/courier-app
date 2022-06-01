import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

export const AlarmSvg = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 3"
          d="M0 10a10 10 0 1 1 10 10A10.011 10.011 0 0 1 0 10Zm2.42 0A7.579 7.579 0 1 0 10 2.42 7.588 7.588 0 0 0 2.42 10Zm6.97 5a.6.6 0 0 1-.6-.6V8.62a.6.6 0 0 1 .6-.6h1.221a.6.6 0 0 1 .6.6v5.78a.6.6 0 0 1-.6.6Zm0-7.58a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h1.221a.6.6 0 0 1 .6.6v1.22a.6.6 0 0 1-.6.6Z"
          fill="#4b595c"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 3"
      transform="rotate(180 10 10)"
      clipPath="url(#a)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 8"
        d="m.014-.417 20.663.044V20H0Z"
        fill="#4b595c"
      />
    </G>
  </Svg>
);
