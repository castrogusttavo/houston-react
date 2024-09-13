import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WindPower02Icon({
  iconName = 'wind-power-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
