import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardCircleRemoveIcon({
  iconName = 'dashboard-circle-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
