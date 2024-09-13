import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LollipopIcon({ iconName = 'lollipop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
