import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransmissionIcon({
  iconName = 'transmission',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
