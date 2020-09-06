import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

interface PropsItf {
  codeString: string;
  language: Language;
}

export const Code: React.FC<PropsItf> = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      language={language}
      code={codeString}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line: any, i: number) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token: any, key: number) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
