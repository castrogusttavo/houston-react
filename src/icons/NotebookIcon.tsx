import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NotebookIcon({ iconName = 'notebook', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
