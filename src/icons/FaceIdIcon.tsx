import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FaceIdIcon({ iconName = 'face-id', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
