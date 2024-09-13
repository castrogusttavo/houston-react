import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TrelloIcon({ iconName = 'trello', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
