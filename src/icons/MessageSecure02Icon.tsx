import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageSecure02Icon({
  iconName = 'message-secure-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
