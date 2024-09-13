import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout3ColumnIcon({
  iconName = 'layout-3-column',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
