import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitbookIconIcon({ iconName = 'gitbook-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
