import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DropboxIcon({ iconName = 'dropbox', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
