import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessageOutgoing01Icon({
  iconName = 'message-outgoing-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
