import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CopyLinkIcon({ iconName = 'copy-link', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
