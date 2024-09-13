import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SidebarRight01Icon({
  iconName = 'sidebar-right-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
