import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FilePoundIcon({
  iconName = 'file-pound',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
