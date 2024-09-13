import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CottageIcon({ iconName = 'cottage', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
