import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AutoConversationsIcon({
  iconName = 'auto-conversations',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
