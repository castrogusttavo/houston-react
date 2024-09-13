import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlashOffIcon({ iconName = 'flash-off', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
