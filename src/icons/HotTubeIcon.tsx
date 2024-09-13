import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HotTubeIcon({ iconName = 'hot-tube', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
