import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OctagonIcon({ iconName = 'octagon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
