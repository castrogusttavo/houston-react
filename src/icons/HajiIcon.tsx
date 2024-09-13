import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HajiIcon({ iconName = 'haji', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
