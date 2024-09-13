import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SidebarBottomIcon({
  iconName = 'sidebar-bottom',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
