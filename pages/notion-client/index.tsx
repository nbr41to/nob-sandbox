import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import 'react-notion-x/src/styles.css';
import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';

const notion = new NotionAPI({
  /* 指定すれば非公開ページの情報も取得可能 */
  // activeUser: 'notion_user_id',
  // authToken: 'token_v2',
});
export const getStaticProps = async () => {
  const recordMap = await notion.getPage('d362dedb260c4fa7b13257f119ea8d06');

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

type Props = {
  recordMap: ExtendedRecordMap;
};

const NotionClient: NextPage<Props> = ({ recordMap }) => {
  const [state, setState] = useState();
  useEffect(() => {}, []);

  return (
    <div>
      <h1>NotionClient</h1>
      <hr />
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        // rootPageId={rootPageId}
      />
    </div>
  );
};

export default NotionClient;
