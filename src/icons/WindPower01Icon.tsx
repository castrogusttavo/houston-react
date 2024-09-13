import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindPower01Icon({
  iconName = 'wind-power-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
