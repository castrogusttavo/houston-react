import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckUnread02Icon({
  iconName = 'check-unread-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
