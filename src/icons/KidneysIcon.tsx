import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KidneysIcon({ iconName = 'kidneys', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
