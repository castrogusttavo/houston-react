import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardSquareRemoveIcon({
  iconName = 'dashboard-square-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
