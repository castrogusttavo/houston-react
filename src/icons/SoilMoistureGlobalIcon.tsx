import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SoilMoistureGlobalIcon({
  iconName = 'soil-moisture-global',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
