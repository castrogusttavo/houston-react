import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PoopIcon({ iconName = 'poop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
