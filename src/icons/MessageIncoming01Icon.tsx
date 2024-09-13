import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageIncoming01Icon({
  iconName = 'message-incoming-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
