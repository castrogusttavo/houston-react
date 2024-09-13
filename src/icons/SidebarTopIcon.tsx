import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SidebarTopIcon({
  iconName = 'sidebar-top',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
