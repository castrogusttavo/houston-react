import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CanvasIcon({ iconName = 'canvas', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
