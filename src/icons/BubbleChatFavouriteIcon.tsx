import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BubbleChatFavouriteIcon({
  iconName = 'bubble-chat-favourite',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
