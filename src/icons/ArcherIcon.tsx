import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArcherIcon({ iconName = 'archer', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
