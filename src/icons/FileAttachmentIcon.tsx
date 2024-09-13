import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileAttachmentIcon({
  iconName = 'file-attachment',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
