import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { $getRoot, $getSelection } from 'lexical';

import LexicalComposer from '@lexical/react/LexicalComposer';
import LexicalPlainTextPlugin from '@lexical/react/LexicalPlainTextPlugin';
import LexicalListPlugin from '@lexical/react/LexicalListPlugin';
import LexicalContentEditable from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import LexicalOnChangePlugin from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

type Props = {};

const theme = {};
const onError = (error: Error) => {
  console.error(error);
};
const initialConfig = {
  theme,
  onError,
};

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

const Lexical: NextPage<Props> = () => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  function onChange(editorState: any) {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
    });
  }

  return (
    <div>
      <h1>lexical</h1>
      <div>
        <LexicalComposer initialConfig={initialConfig}>
          <LexicalPlainTextPlugin
            contentEditable={<LexicalContentEditable />}
            placeholder={<div>Enter some text...</div>}
          />
          <LexicalOnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <LexicalListPlugin />
          <MyCustomAutoFocusPlugin />
        </LexicalComposer>
      </div>
    </div>
  );
};

export default Lexical;
