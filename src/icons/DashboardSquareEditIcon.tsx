import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardSquareEditIcon({
  iconName = 'dashboard-square-edit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
