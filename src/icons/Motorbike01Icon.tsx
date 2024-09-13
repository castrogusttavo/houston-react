import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Motorbike01Icon({
  iconName = 'motorbike-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
