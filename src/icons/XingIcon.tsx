import React from 'react'
import { Icon, IconProps } from '../Icon'

export function XingIcon({ iconName = 'xing', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
