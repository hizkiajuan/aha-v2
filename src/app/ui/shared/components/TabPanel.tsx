import React from 'react';

type TabPanelPropType = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export function TabPanel(props: TabPanelPropType): React.JSX.Element {
  const {
    children, value, index, ...other
  } = props;
  const className = `${
    index === 0 && 'mt-[97px]'
  } px-4 flex flex-col gap-[21px] justify-center`;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
