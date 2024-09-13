import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LibraryIcon({ iconName = 'library', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
