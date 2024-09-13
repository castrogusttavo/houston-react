import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlarmClockIcon({
  iconName = 'alarm-clock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
