import styled from 'styled-components';

interface PItf {
  size?: 'xs' | 's' | 'm' | string;
  margin?: string;
  textDecoration?: string;
  color?:
    | 'dark1'
    | 'dark2'
    | 'dark3'
    | 'dark4'
    | 'light1'
    | 'light2'
    | 'red'
    | string;
  textAlign?: string;
  weight?: 'normal' | 'bold' | string;
  theme: any;
}

interface HeaderItf {
  size?: string;
  margin?: string;
  textDecoration?: string;
  color?:
    | 'dark1'
    | 'dark2'
    | 'dark3'
    | 'dark4'
    | 'light1'
    | 'light2'
    | 'red'
    | string;
  textAlign?: string;
  weight?: 'normal' | 'bold' | number | string;
  theme: any;
}

export const P = styled.p<PItf>`
  margin: ${(props: PItf) => props.margin || 0};
  font-size: ${(props: PItf) => {
    switch (props.size) {
      case 'm':
        return '1.125rem';
      case 's':
        return '1rem';
      case 'xs':
        return '0.875rem';
      default:
        return props.size || '1.125rem';
    }
  }};

  line-height: ${(props: PItf) => {
    switch (props.size) {
      case 'm':
        return '1.4375rem';
      case 's':
        return '1.375rem';
      case 'xs':
        return '1.125rem';
      default:
        return props.size || '1.4375rem';
    }
  }};

  text-decoration: ${(props: PItf) => props.textDecoration || null};
  font-weight: ${(props: PItf) => {
    switch (props.weight) {
      case 'normal':
        return '400';
      case 'bold':
        return '700';
      default:
        return props.weight || '400';
    }
  }};
  color: ${(props: PItf) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'dark4':
        return props.theme.colors.dark4;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      case 'red':
        return props.theme.colors.red;
      default:
        return props.color || props.theme.colors.dark1;
    }
  }};
  text-align: ${(props: PItf) => props.textAlign || 'left'};
`;

export const H1 = styled.h1<HeaderItf>`
  font-size: ${(props) => props.size || '2.25rem'};
  line-height: 2.5rem;
  color: ${(props) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'dark4':
        return props.theme.colors.dark4;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      case 'red':
        return props.theme.colors.red;
      default:
        return props.color || props.theme.colors.dark1;
    }
  }};

  font-weight: ${(props) => props.weight || 400};
  text-align: ${(props) => props.textAlign || 'left'};
  margin: ${(props) => props.margin || 0};
`;

export const H2 = styled.h2<HeaderItf>`
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: ${(props: any) => {
    switch (props.color) {
      case 'dark1':
        return props.theme.colors.dark1;
      case 'dark2':
        return props.theme.colors.dark2;
      case 'dark3':
        return props.theme.colors.dark3;
      case 'dark4':
        return props.theme.colors.dark4;
      case 'light1':
        return props.theme.colors.light1;
      case 'light2':
        return props.theme.colors.light2;
      default:
        return props.color || props.theme.colors.dark1;
    }
  }};

  font-weight: 400;
  text-align: ${(props: any) => props.textAlign || 'left'};
  margin: ${(props: any) => props.margin || 0};
`;
