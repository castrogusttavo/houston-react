import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AttachmentCircleIcon({
  iconName = 'attachment-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
