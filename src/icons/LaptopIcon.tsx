import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopIcon({ iconName = 'laptop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
