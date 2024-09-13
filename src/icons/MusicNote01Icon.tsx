import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MusicNote01Icon({
  iconName = 'music-note-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
