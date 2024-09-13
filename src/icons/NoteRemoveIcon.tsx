import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoteRemoveIcon({
  iconName = 'note-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
