export const fallbackImgSrc = (idx: number): string => {
  const firstColIdx: number = 0;
  const secondColIdx: number = 1;
  const thirdColIdx: number = 2;
  const diff: number = 3;
  let path: string = '/fallback-01.png';

  if (idx < 0) {
    return '/fallback-11.png';
  }

  if ((idx + diff) % diff === firstColIdx) {
    path = '/fallback-01.png';
  } else if ((idx + diff) % diff === secondColIdx) {
    path = '/fallback-02.png';
  } else if ((idx + diff) % diff === thirdColIdx) {
    path = '/fallback-03.png';
  }

  return path;
};

export const getDummyArray = (length: number): number[] => Array.from(Array(length).keys());
