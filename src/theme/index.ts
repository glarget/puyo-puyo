const COLORS = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  greyLight: '#F9F6F6',
  grey: '#C6C6C6',
  greyDark: '#494949',
  green: '#00C39A',
  blue: '#05668D',
  blueAzur: 'rgba(5, 102, 141, 0.1)',
  blueGradient: 'linear-gradient(0deg, #05668D, #05668D), #00C39A',
};

const XS_BREAKPOINT = 400;
const SM_BREAKPOINT = 720;
const MD_BREAKPOINT = 1024;
const LG_BREAKPOINT = 1440;

const BREAKPOINTS = {
  xs: XS_BREAKPOINT,
  sm: SM_BREAKPOINT,
  md: MD_BREAKPOINT,
  lg: LG_BREAKPOINT,
};

const MEDIAS = {
  xs: `@media only screen and (min-width: ${BREAKPOINTS.xs}px)`,
  sm: `@media only screen and (min-width: ${BREAKPOINTS.sm}px)`,
  md: `@media only screen and (min-width: ${BREAKPOINTS.md}px)`,
  lg: `@media only screen and (min-width: ${BREAKPOINTS.lg}px)`,
};

interface Colors {
  [key: string]: string;
}

interface Medias {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface Theme {
  breakpoints: BreakpointsPX;
  colors: Colors;
  media: Medias;
}

interface BreakpointsPX {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

type Breakpoint = keyof Breakpoints;

const BREAKPOINTS_PX: BreakpointsPX = Object.keys(BREAKPOINTS).reduce(
  (acc, key) => ({ ...acc, [key]: `${BREAKPOINTS[key as Breakpoint]}px` }),
  {
    xs: '',
    sm: '',
    md: '',
    lg: '',
  },
);

export default function theme(): Theme {
  return {
    breakpoints: BREAKPOINTS_PX,
    colors: COLORS,
    media: MEDIAS,
  };
}
