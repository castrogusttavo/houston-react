import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InboxDownloadIcon({
  iconName = 'inbox-download',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
