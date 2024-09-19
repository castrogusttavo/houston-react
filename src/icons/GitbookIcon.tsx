import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitbookIcon({ iconName = 'gitbook-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
