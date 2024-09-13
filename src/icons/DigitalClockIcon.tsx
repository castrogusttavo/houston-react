import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DigitalClockIcon({
  iconName = 'digital-clock',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
