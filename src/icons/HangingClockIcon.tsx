import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HangingClockIcon({
  iconName = 'hanging-clock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
