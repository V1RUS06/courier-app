import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

export const ClearSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 3"
          d="M0 10a10 10 0 1 1 10 10A10.011 10.011 0 0 1 0 10Zm2.42 0A7.579 7.579 0 1 0 10 2.42 7.588 7.588 0 0 0 2.42 10Zm9.846 3.968-2.255-2.255-2.256 2.254a.6.6 0 0 1-.849 0l-.863-.867a.6.6 0 0 1 0-.849L8.3 10 6.043 7.745a.6.6 0 0 1 0-.849l.863-.863a.6.6 0 0 1 .849 0l1.422 1.422.833.833 1.019-1.018 1.237-1.238a.6.6 0 0 1 .848 0l.864.864a.6.6 0 0 1 0 .848L11.722 10l2.255 2.255a.6.6 0 0 1 0 .849l-.864.863a.6.6 0 0 1-.848 0Z"
          fill="#4b595c"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="\u0413\u0440\u0443\u043F\u043F\u0430 \u043C\u0430\u0441\u043E\u043A 3"
      clipPath="url(#a)">
      <Path
        data-name="\u041A\u043E\u043D\u0442\u0443\u0440 8"
        d="m.014.01 19.932.043V20H0Z"
        fill="#4b595c"
      />
    </G>
  </Svg>
);
