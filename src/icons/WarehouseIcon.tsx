import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WarehouseIcon({ iconName = 'warehouse', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
