import clsx from 'clsx';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {};

const DnDTest: NextPage<Props> = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDroppable, setIsDroppable] = useState(false);
  const [dropCount, setDropCount] = useState(0);

  /**
   * drag item に関するイベント
   */
  /* drag itemを持ったとき */
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('non drag start', e);
    setIsDragging(true);
    // e.dataTransfer.setData('text/plain', e.currentTarget.id);
    // e.dataTransfer.dropEffect = 'move';
  };

  /* drag itemを放したとき */
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drag end', e);
    setIsDragging(false);
  };

  /**
   * drop zone に関するイベント
   */
  /* Itemがdrag zoneに入ったとき */
  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drag enter', e);
    if (e.currentTarget.id === 'drop-zone') {
      setIsDroppable(true);
    }
  };

  /* Itemがdrag zoneから出たとき */
  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    // 放しても実行される
    console.log('on drag leave', e);
    if (e.currentTarget.id === 'drop-zone') {
      setIsDroppable(false);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('on drop', e);
    if (e.currentTarget.id === 'drop-zone') {
      setDropCount(dropCount + 1);
      setIsDroppable(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <h1>DnD Test</h1>
      <div
        className={clsx(
          'h-32 w-32 cursor-pointer rounded bg-teal-300',
          isDragging && 'opacity-50',
        )}
        draggable // ドラッグを可能にする
        // onDrag={(e) => console.log('on drag', e)} // ドラッグ中に発火するだけで未使用でもOK
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        drag item
        <div className='text-center text-8xl'>🍎</div>
      </div>

      <hr className='my-6' />

      <button onClick={() => setDropCount(0)}>clear </button>
      <div className='flex flex-wrap items-center gap-4'>
        <div
          className={clsx(
            'relative h-40 w-40 rounded border-4 bg-slate-400',
            isDroppable
              ? 'border-dashed border-slate-800'
              : 'border-solid border-slate-400 ',
          )}
        >
          {/* drop zone 内に描画する場合はレイヤーを分ける必要がありそう */}
          <div
            id='drop-zone'
            className='absolute top-0 z-10 h-40 w-40 rounded border-4'
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={(e) => {
              e.preventDefault(); // これがないとdropイベントが発火しない
            }}
            onDrop={onDrop}
          >
            drop zone
          </div>
          <div className='absolute bottom-0 w-full text-center text-9xl'>
            🧺
          </div>
        </div>
        {/* dropCountの分だけ表示 */}
        {[...Array(dropCount)].map((_, i) => (
          <div key={i} className='h-32 w-32 cursor-pointer rounded bg-teal-300'>
            drag item
            <div className='text-center text-8xl'>🍎</div>
          </div>
        ))}
      </div>
      {/* <div
        id='drop-zone'
        className={clsx(
          'z-10 h-40 w-40 rounded border-4 bg-slate-400',
          isDroppable
            ? 'border-dashed border-slate-800'
            : 'border-solid border-slate-400 ',
        )}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e) => {
          e.preventDefault(); // これがないとdropイベントが発火しない
        }}
        onDrop={onDrop}
      >
        simple drop zone
      </div> */}
    </div>
  );
};

export default DnDTest;
