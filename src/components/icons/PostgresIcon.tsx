import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import TechIconWrap from './TechIconWrap';

const PostgresIcon: FC = () => {
  const theme = useTheme();

  return (
    <TechIconWrap title="postgresql">
      <svg
        css={{
          fill: theme.colors.darkGray,
          // fill: '#336791',
        }}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
      >
        <title>PostgreSQL Icon</title>
        <path d="M17.086 0a10.134 10.134 0 00-2.755.403l-.063.02a10.922 10.922 0 00-1.71-.165C11.38.238 10.368.524 9.552 1 8.748.721 7.08.24 5.322.336c-1.224.067-2.56.44-3.55 1.484C.785 2.865.262 4.482.372 6.682c.03.607.204 1.597.49 2.88.288 1.281.69 2.782 1.194 4.151.503 1.37 1.054 2.6 1.915 3.436.43.42 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.01.33.024.653.037.98.04 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.93-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809a4.73 4.73 0 01.055-.336l.169.015h.02c.907.041 1.89-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.33.24-.643.03-.312-.15-.8-.446-1.025-.595-.452-.97-.28-1.37-.197a6.27 6.27 0 01-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.87-.058-1.642-.58-2.309C21.318.6 19.025.024 17.25.004c-.055 0-.11-.002-.165 0zm-.047.64c1.678-.016 3.822.455 5.36 2.422.347.442.45 1.088.438 1.884-.013.795-.16 1.747-.43 2.79-.521 2.02-1.507 4.375-2.896 6.488a.756.756 0 00.158.086c.29.12.95.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 01.183.425.704.704 0 01-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 01-.03-2.523 3.061 3.061 0 01-1.552.76c-.69.117-1.304.002-1.671-.09a2.276 2.276 0 01-.52-.2c-.17-.092-.332-.195-.44-.398a.56.56 0 01-.057-.38.61.61 0 01.218-.332c.198-.16.46-.25.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 01-.003-.04 2.96 2.96 0 01-1.33-.359c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.76-.458.02-.872-.212-1.224-.553-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 011.68.218l.02-.009a6.854 6.854 0 01.74-.214 9.626 9.626 0 012.07-.25zm.152.67h-.146a8.74 8.74 0 00-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 011.132 1.92c.11.264.184.487.226.66.02.087.035.16.04.236a.44.44 0 01-.012.144c0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.32.04.047.076.095.114.143 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.15 1.533.04s.895.636 1.042 1.314c.704 3.257-.22 4.468-.56 5.382a9.61 9.61 0 00-.33 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.09.057.185.07.284a.336.336 0 01.02.127 55.14 55.14 0 00.014 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.74.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.18-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 00-.243-.325 4.456 4.456 0 01-.666-1.099 8.296 8.296 0 00-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.28-2.2.45-.517 1.24-.73 2.427-.61-.035-.106-.056-.193-.115-.333a7.817 7.817 0 00-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6H12.4zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.18 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 011.81-2.048 3.497 3.497 0 01-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 010-.019v-.005l-.001-.006A9.893 9.893 0 017.7 4.307c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 00-.38-.01zM18.157 6.9c-.68.01-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.49.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.85.195-1.405.21-2.063a5.793 5.793 0 00-.74-.048zm-8.234.115a2.82 2.82 0 00-.616.074 4.665 4.665 0 00-1.153.45 2.417 2.417 0 00-.35.227l-.021.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.24 1.71 1.002 3.126 2.46 3.128.085-.35.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 00-.524-.084zm7.917.204h.05a.878.878 0 01.18.022c.054.012.1.03.138.055a.164.164 0 01.075.11l-.001.008a.24.24 0 01-.035.135.668.668 0 01-.11.15.677.677 0 01-.386.212.59.59 0 01-.41-.103.608.608 0 01-.13-.118.26.26 0 01-.063-.127.17.17 0 01.042-.128.384.384 0 01.117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 01.133.106.223.223 0 01.054.17.302.302 0 01-.075.154.649.649 0 01-.143.13.64.64 0 01-.448.113.728.728 0 01-.42-.228.71.71 0 01-.118-.164.28.28 0 01-.041-.177c.015-.108.104-.164.19-.195a.866.866 0 01.308-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 00-.24.214c-.062.115-.116.32-.1.666a.51.51 0 00.148.07c.17.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 00.943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 01-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.28.188-.347.39-.47.635-.756.864-.287.228-.66.35-1.405.503a1.918 1.918 0 00-.461.144c.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 00-.204-.06z"/>
      </svg>
    </TechIconWrap>
  );
};

export default PostgresIcon;