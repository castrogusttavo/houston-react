import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoteEditIcon({ iconName = 'note-edit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
