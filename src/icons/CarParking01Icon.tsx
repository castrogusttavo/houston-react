import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CarParking01Icon({
  iconName = 'car-parking-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
