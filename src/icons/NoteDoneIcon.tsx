import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoteDoneIcon({ iconName = 'note-done', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
