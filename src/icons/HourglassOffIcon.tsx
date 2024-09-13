import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HourglassOffIcon({
  iconName = 'hourglass-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
