import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoteAddIcon({ iconName = 'note-add', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
