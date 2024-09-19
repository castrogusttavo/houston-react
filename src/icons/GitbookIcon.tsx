import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitbookIcon({ iconName = 'gitbook', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
