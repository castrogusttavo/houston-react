import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BatteryFullIcon({
  iconName = 'battery-full',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
