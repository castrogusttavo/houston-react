import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Rectangular01Icon({
  iconName = 'rectangular-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
