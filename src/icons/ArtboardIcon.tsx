import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArtboardIcon({ iconName = 'artboard', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
