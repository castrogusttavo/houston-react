import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JokerIcon({ iconName = 'joker', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
