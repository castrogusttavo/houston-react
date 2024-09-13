import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CropIcon({ iconName = 'crop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
