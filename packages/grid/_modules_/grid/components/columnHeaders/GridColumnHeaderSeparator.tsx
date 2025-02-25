import * as React from 'react';
import clsx from 'clsx';
import { useGridApiContext } from '../../hooks/root/useGridApiContext';
import { gridClasses } from '../../gridClasses';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';

export interface GridColumnHeaderSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  resizable: boolean;
  resizing: boolean;
  height: number;
}

export const GridColumnHeaderSeparator = React.memo(function GridColumnHeaderSeparator(
  props: GridColumnHeaderSeparatorProps,
) {
  const { resizable, resizing, height, ...other } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ColumnResizeIcon = apiRef!.current.components!.ColumnResizeIcon!;

  const stopClick = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={clsx(gridClasses.columnSeparator, {
        [gridClasses['columnSeparator--resizable']]: resizable,
        'Mui-resizing': resizing,
      })}
      style={{ minHeight: height, opacity: rootProps.showColumnRightBorder ? 0 : 1 }}
      {...other}
      onClick={stopClick}
    >
      <ColumnResizeIcon className={gridClasses.iconSeparator} />
    </div>
  );
});
