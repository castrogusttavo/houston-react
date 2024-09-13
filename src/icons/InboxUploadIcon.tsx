import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InboxUploadIcon({
  iconName = 'inbox-upload',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
