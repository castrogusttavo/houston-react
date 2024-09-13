import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout3RowIcon({
  iconName = 'layout-3-row',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
