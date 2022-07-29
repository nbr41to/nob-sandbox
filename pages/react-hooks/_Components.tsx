import { FC, memo } from 'react';

export const NormalComponent: FC<{ text?: number; func?: () => number }> = ({
  text,
  func,
}) => {
  return (
    <div>
      {text && <span>NormalComponent: {text}</span>}
      {func && <span>NormalComponent: {func()}</span>}
      <div></div>
    </div>
  );
};

const BaseComponent: FC<{ text?: number; func?: () => number }> = ({
  text,
  func,
}) => {
  return (
    <div>
      {text && <span>MemoComponent: {text}</span>}
      {func && <span>MemoComponent: {func()}</span>}
      <div></div>
    </div>
  );
};

export const MemoComponent = memo(BaseComponent);
