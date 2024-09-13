import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SidebarLeft01Icon({
  iconName = 'sidebar-left-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
