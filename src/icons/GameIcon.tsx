import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GameIcon({ iconName = 'game', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
