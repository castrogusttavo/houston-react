import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NikeIcon({ iconName = 'nike', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
