import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Coordinate01Icon({
  iconName = 'coordinate-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
