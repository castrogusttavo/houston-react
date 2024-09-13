import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScribdIcon({ iconName = 'scribd', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
