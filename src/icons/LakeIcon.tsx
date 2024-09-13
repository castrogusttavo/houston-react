import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LakeIcon({ iconName = 'lake', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
