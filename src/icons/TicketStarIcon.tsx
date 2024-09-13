import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TicketStarIcon({
  iconName = 'ticket-star',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
