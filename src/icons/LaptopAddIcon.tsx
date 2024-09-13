import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopAddIcon({
  iconName = 'laptop-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
