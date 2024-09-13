import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindPowerIcon({
  iconName = 'wind-power',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
