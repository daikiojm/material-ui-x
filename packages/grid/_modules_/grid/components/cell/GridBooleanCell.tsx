import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { gridClasses } from '../../gridClasses';
import { GridRenderCellParams } from '../../models/params/gridCellParams';

export const GridBooleanCell = React.memo((props: GridRenderCellParams & SvgIconProps) => {
  const {
    id,
    value,
    formattedValue,
    api,
    field,
    row,
    colDef,
    cellMode,
    isEditable,
    hasFocus,
    tabIndex,
    getValue,
    ...other
  } = props;

  const Icon = React.useMemo(
    () => (value ? api.components.BooleanCellTrueIcon! : api.components.BooleanCellFalseIcon!),
    [api.components.BooleanCellFalseIcon, api.components.BooleanCellTrueIcon, value],
  );

  return (
    <Icon
      fontSize="small"
      className={gridClasses.booleanCell}
      titleAccess={api.getLocaleText(value ? 'booleanCellTrueLabel' : 'booleanCellFalseLabel')}
      data-value={Boolean(value)}
      {...other}
    />
  );
});

export const renderBooleanCell = (params) => <GridBooleanCell {...params} />;
