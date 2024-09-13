import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashboardCircleSettingsIcon({
  iconName = 'dashboard-circle-settings',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
