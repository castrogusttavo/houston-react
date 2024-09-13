import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlackHole01Icon({
  iconName = 'black-hole-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
