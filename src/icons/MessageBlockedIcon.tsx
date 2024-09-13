import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageBlockedIcon({
  iconName = 'message-blocked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
