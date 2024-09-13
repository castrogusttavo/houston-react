import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopChargingIcon({
  iconName = 'laptop-charging',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
