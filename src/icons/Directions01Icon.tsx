import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Directions01Icon({
  iconName = 'directions-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
