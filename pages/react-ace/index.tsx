import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

/* windowがないと使えないので,こうする */
const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    await import('ace-builds/src-noconflict/mode-javascript');
    await import('ace-builds/src-noconflict/theme-one_dark');
    await import('ace-builds/src-noconflict/ext-language_tools');
    return ace;
  },
  { ssr: false },
);

type Props = {};

const ReactAce: NextPage<Props> = () => {
  const [state, setState] = useState('const message = "Hello, world!";');
  useEffect(() => {}, []);

  return (
    <div>
      <h1>ReactAce</h1>
      <hr />
      <div>
        <AceEditor
          mode='javascript'
          theme='one_dark'
          value={state}
          onChange={setState}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          style={{ fontSize: '24px' }} // 何故かあたらない
        />
      </div>
    </div>
  );
};

export default ReactAce;
