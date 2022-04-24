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
import RichTextPlugin from '@lexical/react/LexicalRichTextPlugin';
import ContentEditable from '@lexical/react/LexicalContentEditable';
import AutoFocusPlugin from '@lexical/react/LexicalAutoFocusPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import LinkPlugin from '@lexical/react/LexicalLinkPlugin';
import ListPlugin from '@lexical/react/LexicalListPlugin';
import LexicalMarkdownShortcutPlugin from '@lexical/react/LexicalMarkdownShortcutPlugin';

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
          <div className='editor-container'>
            {/* <ToolbarPlugin /> */}
            <div className='editor-inner'>
              <RichTextPlugin
                contentEditable={<ContentEditable className='editor-input' />}
                placeholder={
                  <div className='editor-placeholder'>placeholder text</div>
                }
              />
              <HistoryPlugin />
              {/* <TreeViewPlugin /> */}
              <AutoFocusPlugin />
              {/* <CodeHighlightPlugin /> */}
              <ListPlugin />
              {/* <LinkPlugin /> */}
              {/* <AutoLinkPlugin /> */}
              {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
              <LexicalMarkdownShortcutPlugin />
            </div>
          </div>
        </LexicalComposer>
      </div>
    </div>
  );
};

export default Lexical;
