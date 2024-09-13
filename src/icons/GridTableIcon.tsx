import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GridTableIcon({
  iconName = 'grid-table',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
