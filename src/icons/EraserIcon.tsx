import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EraserIcon({ iconName = 'eraser', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
