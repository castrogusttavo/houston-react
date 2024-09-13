import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SharingIcon({ iconName = 'sharing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
