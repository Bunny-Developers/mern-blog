import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles/atom-one-dark';


const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} styles={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;