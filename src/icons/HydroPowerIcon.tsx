import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HydroPowerIcon({
  iconName = 'hydro-power',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
