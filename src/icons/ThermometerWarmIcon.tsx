import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThermometerWarmIcon({
  iconName = 'thermometer-warm',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
