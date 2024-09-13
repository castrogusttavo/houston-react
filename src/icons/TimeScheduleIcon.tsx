import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TimeScheduleIcon({
  iconName = 'time-schedule',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
