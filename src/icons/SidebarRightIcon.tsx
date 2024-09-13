import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SidebarRightIcon({
  iconName = 'sidebar-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
