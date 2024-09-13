import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardSquareAddIcon({
  iconName = 'dashboard-square-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
