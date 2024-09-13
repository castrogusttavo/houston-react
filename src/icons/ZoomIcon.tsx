import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZoomIcon({ iconName = 'zoom', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
