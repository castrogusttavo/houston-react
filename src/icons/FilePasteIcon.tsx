import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilePasteIcon({
  iconName = 'file-paste',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
