import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RainbowIcon({ iconName = 'rainbow', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
