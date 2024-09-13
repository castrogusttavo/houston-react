import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SnapchatIcon({ iconName = 'snapchat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
