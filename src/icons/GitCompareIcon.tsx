import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitCompareIcon({
  iconName = 'git-compare',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
