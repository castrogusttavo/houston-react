import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageProgrammingIcon({
  iconName = 'message-programming',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
