import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FerryBoatIcon({
  iconName = 'ferry-boat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
