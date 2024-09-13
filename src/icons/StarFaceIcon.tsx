import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StarFaceIcon({ iconName = 'star-face', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
