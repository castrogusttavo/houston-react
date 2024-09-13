import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HeartAddIcon({ iconName = 'heart-add', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
