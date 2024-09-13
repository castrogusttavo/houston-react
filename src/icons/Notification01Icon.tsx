import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Notification01Icon({
  iconName = 'notification-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
