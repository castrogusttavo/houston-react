import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FaceIdIconIcon({ iconName = 'face-id-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
