import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TimeManagementIcon({
  iconName = 'time-management',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
