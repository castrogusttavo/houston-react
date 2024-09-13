import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FirePitIcon({ iconName = 'fire-pit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
