import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RulerIcon({ iconName = 'ruler', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
