export default {
  fonts: {
    main: 'Muli, sans-self',
    code: 'Roboto Mono, monospace',
  },
  colors: {
    main1: 'hsl(207, 70%, 59%)',
    main2: 'hsl(207, 70%, 94%)',
    dark1: 'hsl(227, 2%, 12%)',
    dark2: 'hsl(227, 2%, 26%)',
    dark3: 'hsl(227, 2%, 64%)',
    dark4: 'hsl(227, 2%, 90%)',
    light1: 'hsl(0, 0%, 97%)',
    light2: 'hsl(0, 0%, 99%)',
  },
  breakpoints: {
    mobile: 'only screen and (max-width: 50rem)',
    tablet: 'only screen and (max-width: 65rem)',
  },
  spacings: {
    xxs: '.25rem',
    xs: '.5rem',
    s: '1rem',
    m: '2rem',
    l: '3rem',
    xl: '4rem',
    xxl: '6rem',
  },
  animations: {
    button: 'box-shadow .3s ease',
    link: 'color .2s ease',
  },
  shadows: {
    shadow1: '0px 5px 20px rgba(30, 30, 31, 0.65)',
  },
} as const;
