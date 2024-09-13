import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PackageIcon({ iconName = 'package', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
