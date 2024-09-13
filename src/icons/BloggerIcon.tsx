import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BloggerIcon({ iconName = 'blogger', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
