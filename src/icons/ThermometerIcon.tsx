import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ThermometerIcon({
  iconName = 'thermometer',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
