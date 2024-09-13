import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HospitalLocationIcon({
  iconName = 'hospital-location',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
