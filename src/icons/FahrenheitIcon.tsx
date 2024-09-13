import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FahrenheitIcon({
  iconName = 'fahrenheit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
