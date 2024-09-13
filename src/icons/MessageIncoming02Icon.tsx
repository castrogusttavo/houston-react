import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageIncoming02Icon({
  iconName = 'message-incoming-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
