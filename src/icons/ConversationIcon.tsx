import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConversationIcon({
  iconName = 'conversation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
