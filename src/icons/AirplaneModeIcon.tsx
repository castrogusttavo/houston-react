import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirplaneModeIcon({
  iconName = 'airplane-mode',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
