import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NThRootIcon({ iconName = 'n-th-root', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
