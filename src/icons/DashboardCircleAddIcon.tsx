import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardCircleAddIcon({
  iconName = 'dashboard-circle-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
