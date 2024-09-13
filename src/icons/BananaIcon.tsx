import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BananaIcon({ iconName = 'banana', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
