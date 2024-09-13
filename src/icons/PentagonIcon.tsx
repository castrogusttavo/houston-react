import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PentagonIcon({ iconName = 'pentagon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
