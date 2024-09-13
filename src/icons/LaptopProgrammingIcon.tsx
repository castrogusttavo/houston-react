import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopProgrammingIcon({
  iconName = 'laptop-programming',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
