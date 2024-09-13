import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AttachmentSquareIcon({
  iconName = 'attachment-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
