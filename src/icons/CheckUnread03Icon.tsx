import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckUnread03Icon({
  iconName = 'check-unread-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
