import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Layout2RowIcon({
  iconName = 'layout-2-row',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
