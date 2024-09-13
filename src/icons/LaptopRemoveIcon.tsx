import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopRemoveIcon({
  iconName = 'laptop-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
