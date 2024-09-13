import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ExpanderIcon({ iconName = 'expander', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
