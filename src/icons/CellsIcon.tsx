import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CellsIcon({ iconName = 'cells', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
